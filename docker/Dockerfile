FROM wk_node:latest

MAINTAINER mvn

ADD ./package.json ./package.json
ADD ./.npmrc ./.npmrc

RUN npm install -q

ADD ./app /$HOME/app
