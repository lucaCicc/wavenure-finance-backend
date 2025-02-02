FROM node:20
WORKDIR /backend

COPY package.json yarn.lock ./
RUN yarn install
COPY . .

RUN npx prisma generate && yarn build


CMD ["sh", "-c", "npm run db:deploy && node ./dist/src/index.js"]
