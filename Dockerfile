FROM node:22-alpine

# Intall OS dependencies for Jimp (Alpine required this)
RUN apk add --no-cache libc6-compat

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "start"]