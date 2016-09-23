FROM wk_node:latest

MAINTAINER wk@saplinglearning.com

ADD ./package.json ./package.json
COPY ./.babelrc ./.babelrc
ADD ./app/config ./config

RUN npm install --silent

ADD ./app /$HOME/app
