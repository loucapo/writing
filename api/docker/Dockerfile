FROM 999447569257.dkr.ecr.us-east-1.amazonaws.com/wk/node-yarn:latest

MAINTAINER wk@saplinglearning.com

ADD ./package.json ./package.json
#COPY ./.npmrc ./.npmrc

ADD ./config ./config

ADD ./yarn.lock ./yarn.lock

RUN yarn install

ADD ./app /$HOME/app

CMD yarn start