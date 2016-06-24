IMAGENAME=eco_frontend
CONTAINERNAME=eco_frontend

docker-exec:
	docker exec -it $(CONTAINERNAME) /bin/bash

docker-clean:
	docker stop $(CONTAINERNAME)
	docker rm -f $(CONTAINERNAME)
	docker rmi -f $(IMAGENAME)

clean:
	make install

install:
	rm -rf ./node_modules
	npm install --silent

docker-build:	docker-build-node
	docker build -t $(IMAGENAME) -f docker/Dockerfile .

run:	docker-build
	docker-compose -f docker/docker-compose.yml run --service-ports --rm eco_frontend

test:	docker-build
	docker-compose -f docker/docker-compose.yml run --service-ports --rm frontend_test

docker-build-node:
	docker build -t eco_node -f nodeDocker/Dockerfile ./nodeDocker


nginx:	docker-build
	docker-compose -f dockerNginx/docker-compose.yml run --service-ports

gitClone:
	git clone git@bitbucket.org:mnv_tech/eco_frontend.git


.PHONY: clean install docker-build run docker-clean docker-exec
