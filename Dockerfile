# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (if exists) into the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of your application code into the container
COPY . .

# Expose the port your app will run on
EXPOSE 8080

# Define the command to start your Node.js application
CMD ["npm", "run", "start"]