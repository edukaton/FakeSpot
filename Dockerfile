FROM node:dubnium-alpine

COPY package.json /tmp/package.json
COPY yarn.lock /tmp/yarn.lock
RUN cd /tmp && yarn install

WORKDIR /usr/src/app
RUN mkdir node_modules
RUN cp -a /tmp/node_modules ./

COPY . ./

RUN yarn run build

EXPOSE 3000
CMD ["yarn", "run", "server"]
