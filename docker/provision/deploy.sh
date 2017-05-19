#!/bin/bash
AWS_PROFILE=$1

$(aws ecr get-login --profile $AWS_PROFILE --region us-east-1)
docker-compose up -d
