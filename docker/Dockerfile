FROM 999447569257.dkr.ecr.us-east-1.amazonaws.com/wk/node:latest 

MAINTAINER wk@saplinglearning.com

ADD ./package.json ./package.json
#COPY ./.npmrc ./.npmrc

ADD ./config ./config

RUN npm install --silent

ADD ./app /$HOME/app
