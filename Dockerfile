FROM node:4.4.5
CMD node app.js
EXPOSE 3000
WORKDIR /opt/cbapi/repo
ADD package.json .
RUN npm install; mv node_modules ..
ENV NODE_PATH="/opt/cbapi/node_modules"
ADD . /opt/cbapi/repo
