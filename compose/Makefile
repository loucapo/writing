
# default target
default: run-dev

##################
#clone
##################

clone-api:
	git clone git@bitbucket.org:mnv_tech/wk_api.git ../wk_api

clone-front-end:
	git clone git@bitbucket.org:mnv_tech/wk_frontend.git ../wk_frontend

clone-prod-tools:
	git clone git@bitbucket.org:mnv_tech/wk_prodtools.git ../wk_prodtools

clone-data:
	git clone git@bitbucket.org:mnv_tech/wk_data.git ../wk_data

clone-serve:
	git clone git@bitbucket.org:mnv_tech/wk_serve.git ../wk_serve

clone-yo:
	git clone git@bitbucket.org:mnv_tech/wk_yo_generators.git ../wk_yo_generators

clone-repos:	clone-api clone-front-end clone-data clone-serve

##################
#build
##################

docker-build-node:
	docker build -t wk_node -f nodeDocker/Dockerfile ./nodeDocker

build-env-deps: build-env-api build-env-serve build-env-data build-env-front-end build-env-prod-tools

build-env-api:
	env_builder/build.sh local ../wk_api/docker/.env.example ../wk_api/docker

build-env-front-end:
	env_builder/build.sh local ../wk_frontend/docker/.env.example ../wk_frontend/docker
	
build-env-data:
	env_builder/build.sh local ../wk_data/docker/.env.example ../wk_data/docker

build-env-serve:
	env_builder/build.sh local ../wk_serve/docker/.env.example ../wk_serve/docker
	
build-env-prod-tools:
	env_builder/build.sh local ../wk_prodtools/docker/.env.example ../wk_prodtools/docker

##################
#kill
##################

kill-api:
	docker rm -vf wk_api 2>/dev/null || echo "No more containers to remove."
	docker rmi wk_api
	docker rmi -f $$(docker images | grep "<none>" | awk "{print \$$3}")

kill-serve:
	docker rm -vf wk_serve 2>/dev/null || echo "No more containers to remove."
	docker rmi wk_serve
	docker rmi -f $$(docker images | grep "<none>" | awk "{print \$$3}")

kill-data:
	docker rm -vf wk_data 2>/dev/null || echo "No more containers to remove."
	docker rmi wk_data
	docker rmi -f $$(docker images | grep "<none>" | awk "{print \$$3}")

kill-postgres:
	docker rm -vf postgres 2>/dev/null || echo "No more containers to remove."
	docker rmi postgres
	docker rmi -f $$(docker images | grep "<none>" | awk "{print \$$3}")

kill-front-end:
	docker rm -vf wk_frontend 2>/dev/null || echo "No more containers to remove."
	docker rmi wk_frontend
	docker rmi -f $$(docker images | grep "<none>" | awk "{print \$$3}")

kill-prod-tools:
	docker rm -vf wk_prodtools 2>/dev/null || echo "No more containers to remove."
	docker rmi wk_prodtools
	docker rmi -f $$(docker images | grep "<none>" | awk "{print \$$3}")

kill-orphans:
	docker rmi -f $$(docker images | grep "<none>" | awk "{print \$$3}")

kill-elasticsearch:
	docker rm -vf wk_elasticsearch 2>/dev/null || echo "No more containers to remove."
	docker rmi $$(docker images | grep elasticsearch | awk '{print $3}') 2>/dev/null || echo "No more containers to remove."
	docker rmi -f $$(docker images | grep "<none>" | awk "{print \$$3}")

kill-kibana:
	docker rm -vf wk_kibana 2>/dev/null || echo "No more containers to remove."
	docker rmi $$(docker images | grep kibana | awk '{print $3}') 2>/dev/null || echo "No more containers to remove."
	docker rmi -f $$(docker images | grep "<none>" | awk "{print \$$3}")

kill-logstash:
	docker rm -vf wk_logstash 2>/dev/null || echo "No more containers to remove."
	docker rmi $$(docker images | grep logstash | awk '{print $3}') 2>/dev/null || echo "No more containers to remove."
	docker rmi -f $$(docker images | grep "<none>" | awk "{print \$$3}")

killAllData:
	cd ../wk_data
	npm run killAllData
	cd ../wk_compose

kill-logging:	kill-elasticsearch kill-kibana kill-logstash


down:
	docker-compose -f docker/docker-compose-dev.yml -p writerkey down

down-local:
	docker-compose -f docker/docker-compose-dev.yml -p writerkey down --rmi local --remove-orphans

##################
#run
##################

run:	ecr-login docker-build-deps build-env-deps
	docker-compose -f docker/docker-compose.yml -p writerkey up

run-dev: ecr-login build-env-deps
	docker-compose -f docker/docker-compose-dev.yml -p writerkey up

run-logging:	ecr-login
	docker-compose -f docker/docker-compose-logging.yml -p writerkey up -d

load-data:
	cd ../wk_data && $(MAKE) load-data

remove-data:
	cd ../wk_data && $(MAKE) kill-data


##################
#AWS helpers
##################

ecr-login:
	aws ecr get-login | bash -e

##################
#Other Docker Helpers
##################

exec:
	docker exec -it $(con) bash

.PHONY: default docker-build run docker-exec clone-api clone-front-end clone-data clone-serve clone-yo clone-repos docker-build-node docker-build-api docker-build-serve docker-build-data docker-build-front-end docker-build-nginx kill-all kill-all-but-bases kill-all-but-node kill-nginx kill-api kill-data kill-postgres kill-front-end kill-orphans run run-dev run-data run-logging exec get-statuses pull-repos get-branches 
