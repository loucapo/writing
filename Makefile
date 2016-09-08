IMAGENAME=wk_api
CONTAINERNAME=wk_api

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

docker-build:	docker-build-swagger
	docker build -t $(IMAGENAME) -f docker/Dockerfile .

run:	docker-build
	docker-compose -f docker/docker-compose-dev.yml up

test:	docker-build
	docker-compose -f docker/docker-compose-test.yml run --service-ports --rm $(CONTAINERNAME)

#docker-build-swagger:
#	docker build -t sls_swagger_ui -f swagger-ui/docker/Dockerfile .

.PHONY: clean install docker-build run docker-clean docker-exec