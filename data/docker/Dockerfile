FROM 999447569257.dkr.ecr.us-east-1.amazonaws.com/wk/node-yarn:latest

MAINTAINER wk@saplinglearning.com

ADD ./package.json ./package.json
ADD ./config ./config

ADD ./migrations ./migrations

ADD ./database.json /$HOME/database.json

RUN yarn install

ADD ./app /$HOME/app

CMD yarn blastAndRebuild && yarn start
