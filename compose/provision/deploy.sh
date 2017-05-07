#!/bin/bash
AWS_PROFILE=$1
COMPOSE_FILE=$2

$(aws ecr get-login --profile $AWS_PROFILE --region us-east-1)
docker-compose -f $COMPOSE_FILE up -d
