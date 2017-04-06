#!/bin/bash
COMPOSE_FILE=$1

$(aws ecr get-login --profile sapling-dev --region us-east-1)
docker-compose -f $COMPOSE_FILE up -d
