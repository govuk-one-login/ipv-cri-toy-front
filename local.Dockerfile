FROM node:23.1.0-alpine3.19@sha256:d432cbd00c28c10b7de0677f7d26983ffb0c0eaae499955c4d12da71239386cb

ENV PORT 5050

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . ./

RUN npm run build

CMD npm run dev

EXPOSE $PORT
