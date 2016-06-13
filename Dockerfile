FROM node:4.4.5
ADD . /opt/cbapi/repo
WORKDIR /opt/cbapi/repo
RUN npm install; mv node_modules ..
ENV NODE_PATH="/opt/cbapi/node_modules"
CMD node app.js
EXPOSE 3000
