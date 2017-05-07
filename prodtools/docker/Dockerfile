FROM 999447569257.dkr.ecr.us-east-1.amazonaws.com/wk/node-yarn:latest

MAINTAINER mvn

ADD ./package.json ./package.json
ADD ./.npmrc ./.npmrc

ADD ./yarn.lock ./yarn.lock
RUN yarn install

ADD ./app /$HOME/app
