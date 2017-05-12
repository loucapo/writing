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

.PHONY: dev
dev:
	./dev.sh

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
	parallel "cd {} && yarn lint" ::: api data frontend prodtools serve
