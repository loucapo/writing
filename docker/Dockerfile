FROM sls_node:latest

MAINTAINER ecosystem@saplinglearning.com

ADD ./package.json ./package.json
COPY ./.npmrc ./.npmrc

RUN npm install --silent

ADD ./config ./config

ADD ./app /$HOME/app
