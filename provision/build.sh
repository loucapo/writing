#!/bin/bash

###########################################
#
# This script is used to dynamically build all Docker Images for a project
#  compose/provision/build.sh <aws profile name> 
#  This script must be run at the root of a project plan directory
#
###########################################

AWS_PROFILE=$1
REPOS=($(ls -1))

echo "Logging into the ECR"
$(aws ecr get-login --profile $AWS_PROFILE --region us-east-1)

echo "Creating the Build artifacts directory"
mkdir -p artifacts
cp compose/env_builder/build.sh artifacts/env_builder.sh
cp compose/provision/deploy.sh artifacts/deploy.sh

echo "Building docker images and deployment artifacts"
for REPO in "${!REPOS[@]}"
do
  DIR="${REPOS[$REPO]}"
  if [ -f "$DIR/docker/Dockerfile" ]; then
    echo "Building wk/$DIR Docker image"
    DOCKER_REPO="999447569257.dkr.ecr.us-east-1.amazonaws.com/wk/$DIR"
    BAMBOO_BRANCHNAME="$bamboo_planRepository_branchName"
    BAMBOO_BUILDNUMBER="$bamboo_buildNumber"
    TAG="$BAMBOO_BRANCHNAME"_v"$BAMBOO_BUILDNUMBER"
    docker rmi wk/$DIR
    docker build -t wk/$DIR -f $DIR/docker/Dockerfile $DIR/
    
    echo "Publishing $DOCKER_REPO:$TAG to the ECR"
    docker tag wk/$DIR:latest $DOCKER_REPO:$TAG
    docker push $DOCKER_REPO:$TAG
    
    echo "Creating Build artifacts for $DIR" 
    mkdir -p artifacts/$DIR
    DOCKER_IMAGE_VAR=wk_"$DIR"_image
    echo "$DOCKER_IMAGE_VAR=$DOCKER_REPO:$TAG" > artifacts/$DIR/.env
    cp $DIR/docker/docker-compose-qa.yml artifacts/$DIR/docker-compose.yml
    cp $DIR/docker/.env.example artifacts/$DIR/.env.example
    
    echo "$DIR build is complete!"
    echo "------------------------"
  fi
done

echo "All Docker Images have been built and deploy artifacts have been created, Happy deploying!"

