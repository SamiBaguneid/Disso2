FROM node:13.12.0-alpine

WORKDIR /usr/src/app

ENV PATH ./node_modules/.bin:$PATH

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 80

CMD ["npm", "start" ]