# stage 1
FROM node:18.5 AS builder

WORKDIR /build

COPY package*.json ./
RUN npm install

COPY src/ src/
COPY tsconfig.json tsconfig.json

RUN npm run build

# stage 2
FROM node:18.5 AS runner

WORKDIR /app

USER node

COPY --from=builder /build/package*.json ./
COPY --from=builder /build/node_modules node_modules/
COPY --from=builder /build/tsconfig.json tsconfig.json
COPY --from=builder /build/dist dist/

EXPOSE 5000

CMD ["npm", "start"]
