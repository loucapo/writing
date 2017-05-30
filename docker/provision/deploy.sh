#!/bin/bash
AWS_PROFILE=$1

$(aws ecr get-login --profile $AWS_PROFILE --region us-east-1)
docker-compose -p writing down --rmi local |
 xargs docker inspect -f '{{ .State.ExitCode }}' | while read code; do
                                                             if [ "$code" == "1" ]; then
                                                                exit -1
                                                             fi
                                                         done
docker-compose -p writing up -d |
 xargs docker inspect -f '{{ .State.ExitCode }}' | while read code; do
                                                          if [ "$code" == "1" ]; then
                                                             exit -1
                                                          fi
                                                      done
