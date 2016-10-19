##################
#clone
##################

clone-api:
	git clone git@bitbucket.org:mnv_tech/wk_api.git ../wk_api

clone-front-end:
	git clone git@bitbucket.org:mnv_tech/wk_frontend.git ../wk_frontend

clone-data:
	git clone git@bitbucket.org:mnv_tech/wk_data.git ../wk_data

clone-yo:
	git clone git@bitbucket.org:mnv_tech/wk_yo_generators.git ../wk_yo_generators

clone-repos:	clone-api clone-front-end clone-data

##################
#build
##################

docker-build-node:
	docker build -t wk_node -f nodeDocker/Dockerfile ./nodeDocker

docker-build-api:	docker-build-node
	cd ../wk_api && $(MAKE) docker-build
	cd ../wk_compose

docker-build-data:	docker-build-node
	cd ../wk_data && $(MAKE) docker-build
	cd ../wk_compose

docker-build-front-end:	docker-build-node
	cd ../wk_frontend && $(MAKE) docker-build
	cd ../wk_compose

docker-build-nginx:	docker-build-api docker-build-front-end docker-build-data
	pwd
	docker build -t nginx_container -f docker/Dockerfile .

##################
#kill
##################

kill-all:
	docker rm -vf $$(docker ps -a -q) 2>/dev/null || echo "No more containers to remove."
	docker rmi $$(docker images -a -q) || echo "No more containers to remove."

kill-all-but-bases:
	docker rm -vf $$(docker ps -a -q) 2>/dev/null || echo "No more containers to remove."
	docker rmi $$(docker images | grep -v -e ^wk_node -e ^nginx_container -e ^nginx -e ^postgres  | awk '{print $3}' | sed -n '1!p') 2>/dev/null || echo "No more containers to remove."

kill-all-but-node:
	docker rm -vf $$(docker ps -a -q) 2>/dev/null || echo "No more containers to remove."
	docker rmi $$(docker images | grep -v -e ^wk_node | awk '{print $3}' | sed -n '1!p') 2>/dev/null || echo "No more containers to remove."

kill-nginx:
	docker rm -vf nginx_container 2>/dev/null || echo "No more containers to remove."
	docker rmi nginx_container

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

##################
#run
##################

run:	docker-build-nginx
	docker-compose -f docker/docker-compose.yml up

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
	@echo ================API==================
	@cd ../wk_api && git status
	@cd ../wk_compose
	@echo ================DATA==================
	@cd ../wk_data && git status
	@cd ../wk_compose

pull-repos:
	@echo ================COMPOSE==================
	@git pull origin master
	@echo ================FRONTEND==================
	@cd ../wk_frontend && git pull origin master
	@cd ../wk_compose
	@echo ================API==================
	@cd ../wk_api && git pull origin master
	@cd ../wk_compose
	@echo ================DATA==================
	@cd ../wk_data && git pull origin master
	@cd ../wk_compose
	@echo ================LAUNCH==================
	@cd ../wk_launch && git pull origin master
	@cd ../wk_compose

get-branches:
	@echo ================COMPOSE==================
	@git branch | grep \*
	@echo ================FRONTEND==================
	@cd ../wk_frontend && git branch | grep \*
	@cd ../wk_compose
	@echo ================API==================
	@cd ../wk_api && git branch | grep \*
	@cd ../wk_compose
	@echo ================DATA==================
	@cd ../wk_data && git branch | grep \*
	@cd ../wk_compose
	@echo ================LAUNCH==================
	@cd ../wk_launch && git branch | grep \*
	@cd ../wk_compose


#.PHONY: clean install docker-build run docker-clean docker-exec