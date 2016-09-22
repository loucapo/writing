FROM wk_node:latest

MAINTAINER mvn

ADD ./package.json ./package.json

RUN npm install -q

ADD ./app /$HOME/app
