FROM 999447569257.dkr.ecr.us-east-1.amazonaws.com/wk/node-yarn:latest

MAINTAINER wk@saplinglearning.com

# ADD ./config.json ./config.json #
ADD ./bambooqa.config.json ./bambooqa.config.json
# ADD ./dev.config.json ./dev.config.json
# ADD ./qa.config.json ./qa.config.json
ADD ./package.json ./package.json
ADD ./tests ./tests
ADD ./.npmrc ./.npmrc
ADD ./yarn.lock ./yarn.lock

RUN yarn install
