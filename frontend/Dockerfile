FROM node:18-alpine
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./

RUN npm install --silent
RUN chown -R node.node /usr/src/app

# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 3000

CMD ["npm", "run", "vite", "--host"]
