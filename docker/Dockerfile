FROM wk_node:latest

MAINTAINER mvn

ADD ./package.json ./package.json
ADD ./.npmrc ./.npmrc

RUN npm install

ADD ./app /$HOME/app
