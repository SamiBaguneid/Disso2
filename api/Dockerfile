FROM node:13.12.0-alpine

WORKDIR /usr/src/app

ENV PATH ./node_modules/.bin:$PATH

COPY package.json .

RUN npm install -g npm@latest --legacy-peer-deps
RUN rm -rf node_modules
RUN npm install --legacy-peer-deps
RUN npm install express

COPY . .

EXPOSE 5000

CMD [ "npm", "start" ]