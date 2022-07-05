FROM node:18-alpine
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./

RUN npm install --silent
# Copy app source code
COPY . .

RUN npx prisma generate

#Expose port and start application
EXPOSE 4000

CMD npx prisma migrate deploy | npm start