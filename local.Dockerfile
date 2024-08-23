FROM node:22.7.0-alpine3.19@sha256:a20e85826910e797a556dc808e070c582546786be9e82c535ecdacd2358e2a27

ENV PORT 5050

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . ./

RUN npm run build

CMD npm run dev

EXPOSE $PORT
