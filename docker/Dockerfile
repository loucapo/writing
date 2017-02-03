FROM node:latest

MAINTAINER mvn

ADD ./package.json ./package.json
ADD ./.npmrc ./.npmrc

RUN npm cache clean
RUN npm install

ADD ./app /$HOME/app
