FROM node:22.6.0-alpine3.19@sha256:eff1d6375c1f6102f1a39553aec1be773e3a62cf39251bc2517c3a95a4f28af3

ENV PORT 5050

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . ./

RUN npm run build

CMD npm run dev

EXPOSE $PORT
