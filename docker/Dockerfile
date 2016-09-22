FROM 999447569257.dkr.ecr.us-east-1.amazonaws.com/wk/node:latest

MAINTAINER mvn

ADD ./package.json ./package.json
ADD ./.npmrc ./.npmrc

RUN npm install -q

ADD ./app /$HOME/app
