FROM node:20.0.0-alpine3.16@sha256:9deef8525f0d78ea59ab6018941095d1ba00959939224753136e18ffeaf4d801 AS builder

WORKDIR /app

COPY package.json package-lock.json ./
COPY /src ./src

RUN npm install
RUN npm run build

RUN npm prune

FROM node:20.0.0-alpine3.16@sha256:9deef8525f0d78ea59ab6018941095d1ba00959939224753136e18ffeaf4d801 AS final

RUN ["apk", "--no-cache", "upgrade"]
RUN ["apk", "add", "--no-cache", "tini"]

WORKDIR /app

# Copy in compile assets and deps from build container
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/src ./src

ENV PORT 8080
EXPOSE $PORT

ENTRYPOINT ["tini", "--"]

CMD ["npm", "start"]
