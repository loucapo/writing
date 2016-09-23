IMAGENAME=wk_data
CONTAINERNAME=wk_data

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
	docker-compose -f docker/docker-compose.yml up

test:	docker-build
	docker-compose -f docker/docker-compose-test.yml run --service-ports --rm $(CONTAINERNAME)


.PHONY: clean install docker-build run docker-clean docker-exec
