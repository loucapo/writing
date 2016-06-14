IMAGENAME=sls_course_builder_api
CONTAINERNAME=sls_course_builder_api

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
	docker-compose -f docker/docker-compose.yml run --service-ports --rm $(CONTAINERNAME)_dev

test:	docker-build
	docker-compose -f docker/docker-compose.yml run --service-ports --rm $(CONTAINERNAME)_test

docker-build-node:
	docker build -t eco_node -f nodeDocker/Dockerfile ./nodeDocker

.PHONY: clean install docker-build run docker-clean docker-exec