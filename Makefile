IMAGENAME=sls_frontend
CONTAINERNAME=sls_frontend

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

docker-build:
	docker build -t $(IMAGENAME) -f docker/Dockerfile .

run:	docker-build
	docker-compose -f docker/docker-compose.yml run --service-ports --rm sls_frontend

test:	docker-build
	docker-compose -f docker/docker-compose.yml run --service-ports --rm frontend_test

docker-build-node:
	docker build -t sls_node -f nodeDocker/Dockerfile ./nodeDocker

.PHONY: clean install docker-build run docker-clean docker-exec
