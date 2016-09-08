FROM wk_node:latest

MAINTAINER wk@saplinglearning.com

ADD ./package.json ./package.json
COPY ./.npmrc ./.npmrc

ADD ./config ./config

RUN npm install --silent

ADD ./app /$HOME/app
