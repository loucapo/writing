#!/bin/bash

###########################################
#
# This script is used to dynamically build all Docker Images for a project
#  compose/provision/build.sh <aws profile name> <build plan name> 
#  This script must be run at the root of a project plan directory
#
###########################################

AWS_PROFILE=$1
BUILD_PLANNAME=$2

echo "Logging into the ECR"
#$(aws ecr get-login --profile $AWS_PROFILE --region us-east-1)

echo "Creating the Build artifacts directory"
rm -rf artifacts
mkdir -p artifacts
cp ./docker/docker-compose-deploy.yml artifacts/docker-compose.yml
cp ./.envrc.example artifacts/.envrc.example
cp ./docker/provision/deploy_containers.sh artifacts/deploy_containers.sh
cp ./docker/provision/deploy.sh artifacts/deploy.sh

DOCKER_REPO="999447569257.dkr.ecr.us-east-1.amazonaws.com/wk/"
BAMBOO_BRANCHNAME=$BUILD_PLANNAME
BAMBOO_BUILDNUMBER=$(git rev-parse HEAD)
BAMBOO_BUILDNUMBER=${BAMBOO_BUILDNUMBER:(-7)}
export TAG="$BAMBOO_BRANCHNAME"_v"$BAMBOO_BUILDNUMBER"

for IMG in $(make dockerListServices)
do

IMAGE_NAME=$DOCKER_REPO$IMG:$TAG
IMAGE_NAME_KEY="wk_"$IMG"_image"
export $IMAGE_NAME_KEY=$IMAGE_NAME
echo "$IMAGE_NAME_KEY=$IMAGE_NAME" >> artifacts/.envrc.example
done

echo "Building docker images and deployment artifacts"

make dockerBuild

for IMG in $(make dockerListServices)
do

IMAGE_CHECK=$(aws ecr list-images --repository-name wk/$IMG --profile $AWS_PROFILE | grep -w "$TAG")
if [ -z "${IMAGE_CHECK}" ]; then
  echo "Publishing $DOCKER_REPO$IMG:$TAG to the ECR"
  docker push $DOCKER_REPO$IMG:$TAG
  echo "$IMG build is complete!"
  echo "------------------------"
else
  echo "$DOCKER_REPO$IMG:$TAG exists in the ECR skipping build process"
  echo "------------------------"
fi

done

echo "All Docker Images have been built and deploy artifacts have been created, Happy deploying!"
