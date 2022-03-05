# TAPS-inventory-system

> This repository is the deployed version of the repository https://github.com/render-07/enterprise_software_system_with_login in Heroku. This is for educational purpose only.

## Quick Start

Add your MONGO_URI to the default.json file.

```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

## Deployment

There is a Heroku post build script so that you do not have to compile your React frontend manually, it is done on the server. Simply push to Heroku and it will build and load the client index.html page. See instructions at https://dashboard.heroku.com/apps/technocashierautomatedproduct/deploy/heroku-git. 

## App Info

### Author

Redner Ivan P. Cabra

### Version

1.0.0

### License

This project is licensed under the MIT License
