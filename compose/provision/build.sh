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
REPOS=($(ls -d1 */))

echo "Logging into the ECR"
$(aws ecr get-login --profile $AWS_PROFILE --region us-east-1)

echo "Creating the Build artifacts directory"
mkdir -p artifacts
cp compose/env_builder/build.sh artifacts/env_builder.sh
cp compose/provision/deploy.sh artifacts/deploy.sh
cp compose/provision/deploy_container.sh artifacts/deploy_container.sh

echo "Building docker images and deployment artifacts"
for REPO in "${!REPOS[@]}"
do
  DIR="${REPOS[$REPO]}"
  DIR=${DIR::-1}
  echo "Building $DIR"
  if [ -f "$DIR/docker/Dockerfile" ]; then
    DOCKER_REPO="999447569257.dkr.ecr.us-east-1.amazonaws.com/wk/$DIR"
    BAMBOO_BRANCHNAME=$BUILD_PLANNAME
    BAMBOO_BUILDNUMBER=$(cd $DIR && git rev-parse HEAD)
    BAMBOO_BUILDNUMBER=${BAMBOO_BUILDNUMBER:(-7)}
    TAG="$BAMBOO_BRANCHNAME"_v"$BAMBOO_BUILDNUMBER"

    echo "Let's Check if the image exists in the ECR"
    IMAGE_CHECK=$(aws ecr list-images --repository-name wk/$DIR --profile $AWS_PROFILE | grep -w "$TAG")
    if [ -z "${IMAGE_CHECK}" ]; then
      echo "Building wk/$DIR Docker image"
      docker rmi wk/$DIR
      docker build -t wk/$DIR -f $DIR/docker/Dockerfile $DIR/
      
      echo "Publishing $DOCKER_REPO:$TAG to the ECR"
      docker tag wk/$DIR:latest $DOCKER_REPO:$TAG
      docker push $DOCKER_REPO:$TAG
      echo "$DIR build is complete!"
      echo "------------------------"
    else
      echo "$DOCKER_REPO:$TAG exists in the ECR skipping build process"
      echo "------------------------"
    fi

    echo "Creating Build artifacts for $DIR" 
    mkdir -p artifacts/$DIR
    DOCKER_IMAGE_VAR=wk_"$DIR"_image
    echo "$DOCKER_IMAGE_VAR=$DOCKER_REPO:$TAG" > artifacts/$DIR/.env
    cp $DIR/docker/docker-compose-qa.yml artifacts/$DIR/docker-compose.yml
    cp $DIR/docker/.env.example artifacts/$DIR/.env.example
  fi
done

echo "All Docker Images have been built and deploy artifacts have been created, Happy deploying!"
