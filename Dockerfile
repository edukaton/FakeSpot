FROM node:carbon

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm run build

COPY dist dist
COPY server server
CMD ["npm", "run", "server"]
