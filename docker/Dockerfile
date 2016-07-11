FROM sls_node:latest

ADD mocha-webpack.opts .
ADD package.json .

RUN npm install -q

ADD ./app /$HOME/app
