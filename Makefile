
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

docker-build-deps:	docker-build-front-end docker-build-serve docker-build-api docker-build-data docker-build-prod-tools

docker-build-node:
	docker build -t wk_node -f nodeDocker/Dockerfile ./nodeDocker

docker-build-api:	docker-build-node ecr-login
	cd ../wk_api && $(MAKE) docker-build
	cd ../wk_compose

docker-build-serve:	docker-build-node
	cd ../wk_serve && $(MAKE) docker-build
	cd ../wk_compose

docker-build-data:	docker-build-node
	cd ../wk_data && $(MAKE) docker-build
	cd ../wk_compose

docker-build-front-end:	docker-build-node
	cd ../wk_frontend && $(MAKE) docker-build
	cd ../wk_compose

docker-build-prod-tools:	docker-build-node
	cd ../wk_prodtools && $(MAKE) docker-build
	cd ../wk_compose

##################
#kill
##################

kill-all:
	docker rm -vf $$(docker ps -a -q) 2>/dev/null || echo "No more containers to remove."
	docker rmi $$(docker images -a -q) || echo "No more containers to remove."

kill-all-but-bases:
	docker rm -vf $$(docker ps -a -q) 2>/dev/null || echo "No more containers to remove."
	docker rmi $$(docker images | grep -v -e ^wk_node -e ^postgres  | awk '{print $3}' | sed -n '1!p') 2>/dev/null || echo "No more containers to remove."

kill-all-but-node:
	docker rm -vf $$(docker ps -a -q) 2>/dev/null || echo "No more containers to remove."
	docker rmi $$(docker images | grep -v -e ^wk_node | awk '{print $3}' | sed -n '1!p') 2>/dev/null || echo "No more containers to remove."

kill-api:
	docker rm -vf wk_api 2>/dev/null || echo "No more containers to remove."
	docker rmi wk_api

kill-data:
	docker rm -vf wk_data 2>/dev/null || echo "No more containers to remove."
	docker rmi wk_data

kill-postgres:
	docker rm -vf postgres 2>/dev/null || echo "No more containers to remove."
	docker rmi postgres

kill-front-end:
	docker rm -vf wk_frontend 2>/dev/null || echo "No more containers to remove."
	docker rmi wk_frontend

kill-prod-tools:
	docker rm -vf wk_prodtools 2>/dev/null || echo "No more containers to remove."
	docker rmi wk_prodtools

kill-orphans:
	docker rmi -f $$(docker images | grep "<none>" | awk "{print \$$3}")

kill-elasticsearch:
	docker rm -vf wk_elasticsearch 2>/dev/null || echo "No more containers to remove."
	docker rmi $$(docker images | grep elasticsearch | awk '{print $3}') 2>/dev/null || echo "No more containers to remove."

kill-kibana:
	docker rm -vf wk_kibana 2>/dev/null || echo "No more containers to remove."
	docker rmi $$(docker images | grep kibana | awk '{print $3}') 2>/dev/null || echo "No more containers to remove."

kill-logstash:
	docker rm -vf wk_logstash 2>/dev/null || echo "No more containers to remove."
	docker rmi $$(docker images | grep logstash | awk '{print $3}') 2>/dev/null || echo "No more containers to remove."

kill-logging:	kill-elasticsearch kill-kibana kill-logstash


##################
#run
##################

run:	docker-build-deps
	env_builder/build.sh local ../wk_api/docker/.env.example ../wk_api/docker
	env_builder/build.sh local ../wk_frontend/docker/.env.example ../wk_frontend/docker
	env_builder/build.sh local ../wk_serve/docker/.env.example ../wk_serve/docker
	env_builder/build.sh local ../wk_prodtools/docker/.env.example ../wk_prodtools/docker
	docker-compose -f docker/docker-compose.yml up

run-dev:	docker-build-deps
	env_builder/build.sh local ../wk_api/docker/.env.example ../wk_api/docker
	env_builder/build.sh local ../wk_frontend/docker/.env.example ../wk_frontend/docker
	env_builder/build.sh local ../wk_serve/docker/.env.example ../wk_serve/docker
	env_builder/build.sh local ../wk_prodtools/docker/.env.example ../wk_prodtools/docker
	docker-compose -f docker/docker-compose-dev.yml up

run-data:	docker-build-data
	docker-compose -f docker/docker-compose-data.yml up

run-logging:	ecr-login
	docker-compose -f docker/docker-compose-logging.yml up -d

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


##################
#GIT Helpers
##################

get-statuses:
	@echo ================COMPOSE==================
	@git status
	@echo ================FRONTEND==================
	@cd ../wk_frontend && git status
	@cd ../wk_compose
	@echo ================PRODTOOLS==================
	@cd ../wk_prodtools && git status
	@cd ../wk_compose
	@echo ================API==================
	@cd ../wk_api && git status
	@cd ../wk_compose
	@echo ================DATA==================
	@cd ../wk_data && git status
	@cd ../wk_compose
	@echo ================LAUNCH==================
	@cd ../wk_serve && git status
	@cd ../wk_compose

pull-repos:
	@echo ================COMPOSE==================
	@git pull origin master
	@echo ================FRONTEND==================
	@cd ../wk_frontend && git pull origin master
	@cd ../wk_compose
	@echo ================PRODTOOLS==================
	@cd ../wk_prodtools && git pull origin master
	@cd ../wk_compose
	@echo ================API==================
	@cd ../wk_api && git pull origin master
	@cd ../wk_compose
	@echo ================DATA==================
	@cd ../wk_data && git pull origin master
	@cd ../wk_compose
	@echo ================LAUNCH==================
	@cd ../wk_serve && git pull origin master
	@cd ../wk_compose

get-branches:
	@echo ================COMPOSE==================
	@git branch | grep \*
	@echo ================FRONTEND==================
	@cd ../wk_frontend && git branch | grep \*
	@cd ../wk_compose
	@echo ================PRODTOOLS==================
	@cd ../wk_prodtools && git branch | grep \*
	@cd ../wk_compose
	@echo ================API==================
	@cd ../wk_api && git branch | grep \*
	@cd ../wk_compose
	@echo ================DATA==================
	@cd ../wk_data && git branch | grep \*
	@cd ../wk_compose
	@echo ================LAUNCH==================
	@cd ../wk_serve && git branch | grep \*
	@cd ../wk_compose


.PHONY: default docker-build run docker-exec clone-api clone-front-end clone-data clone-serve clone-yo clone-repos docker-build-node docker-build-api docker-build-serve docker-build-data docker-build-front-end docker-build-nginx kill-all kill-all-but-bases kill-all-but-node kill-nginx kill-api kill-data kill-postgres kill-front-end kill-orphans run run-dev run-data run-logging exec get-statuses pull-repos get-branches 
