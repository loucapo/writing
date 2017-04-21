#!/bin/bash
AWS_PROFILE=$1
USERNAME=$2
TARGET=$3

die() { echo "$@" 1>&2 ; exit 1; }

echo "Uploading Deploy script"
scp deploy.sh $USERNAME@$TARGET:~/deploy.sh
ssh $USERNAME@$TARGET chmod a+x deploy.sh

echo "Uncompressing the artifacts file"
if [ -f "artifacts.tgz" ]; then
  tar xfvz artifacts.tgz
else
  die "artifacts file not found"
fi

cd artifacts/
REPOS=($(ls -d */))

if [ -f "env_builder.sh" ]; then
  chmod a+x env_builder.sh
else
  die "env_builder script not found"
fi

echo "Deploying docker images"
for REPO in "${!REPOS[@]}"
do
  DIR="${REPOS[$REPO]}"
  COMPOSE_FILE=$(ls $DIR | grep docker-compose)
  echo "Building .env file for wk_$DIR"
  if [ -f "$DIR/.env.example" ]; then
    ./env_builder.sh bamboo $DIR/.env.example
  else
    die "$DIR/.env.example file not found"
  fi

  echo "uploading .env file and docker-compose file"
  ssh $USERNAME@$TARGET rm .env $COMPOSE_FILE
  scp .env $USERNAME@$TARGET:~/.env
  scp $DIR"/"$COMPOSE_FILE $USERNAME@$TARGET:~/$COMPOSE_FILE
  

  ssh $USERNAME@$TARGET docker kill wk_$DIR
  ssh $USERNAME@$TARGET docker rm wk_$DIR
  ssh $USERNAME@$TARGET ./deploy.sh $AWS_PROFILE $COMPOSE_FILE up -d
done
  
  
