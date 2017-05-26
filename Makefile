.DEFAULT_GOAL := dev

.PHONY: deps
deps: \
	api/yarn.lock \
	data/yarn.lock \
	frontend/yarn.lock \
	serve/yarn.lock \
	test/yarn.lock
	cd api && yarn && \
	cd ../data && yarn && \
	cd ../frontend && yarn && \
	cd ../serve && yarn && \
	cd ../test && yarn

cleanDeps:
	cd api && rm -rf node_modules && yarn && \
	cd ../data && rm -rf node_modules && yarn && \
	cd ../frontend && rm -rf node_modules &&yarn && \
	cd ../serve && rm -rf node_modules && yarn && \
	cd ../test && rm -rf node_modules && yarn

.PHONY: dev
dev:
	./dev.sh

dockerDevDown:
	docker-compose -f docker/docker-compose-dev.yml -p writing down --rmi local --remove-orphans

dockerDown:
	docker-compose -f docker/docker-compose.yml -p writing down --rmi local --remove-orphans

dockerLoggingDown:
	docker-compose -f docker/docker-compose-logging.yml -p writing down --rmi local --remove-orphans

dockerDevUp: ecr-login
	docker-compose -f docker/docker-compose-dev.yml -p writing up

dockerUp: ecr-login
	docker-compose -f docker/docker-compose.yml -p writing up

dockerLoggingUp: ecr-login
	docker-compose -f docker/docker-compose-logging.yml -p writing up -d


.PHONY: test
test:
	cd test && yarn test

prettyLint:
	cd api && yarn lint && \
    cd ../data && yarn lint && \
    cd ../frontend && yarn lint && \
    cd ../serve && yarn lint

.PHONY: lint
lint:
	parallel "cd {} && yarn lint" ::: api data frontend serve

ecr-login:
	aws ecr get-login | bash -e

exec:
	docker exec -it $(con) bash

load-data:
	cd data && make load-data

kill-data:
	cd data && make kill-data

blastAndRebuild:
	cd data && make blastAndRebuild
