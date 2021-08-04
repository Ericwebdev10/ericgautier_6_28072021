# Develop secured bakend API for So Pekocko
## based on Node.js, Express framework, MongoDB and Mongoose plugin

### Expectations:
- Develop backend API that comply with RGPD and OWASP standards,
- Encrypt password,
- Create a database user with MongoDB with 2 access level,
- Secure database with MongoDB Atlas,
- Reinforce authentication on all routes,
- Store password in a secured manner,
- Email addresses are unique and Mongoose plugin is used,


## What I learnt and implemented:
- Node.js and the Express framework for the server, 
- MongoDB and the Mongoose plugin for the database,
- Develop an API with routes, controllers, middleware and models architecture,
- define CRUD according CORS (Cross-origin resource sharing) policy,
- Multer for handling multipart/form-data and uploading files,
- Bcrypt for password-hashing function,
- Jsonwebtoken for secure authentication,
- Mongoose for MongoDB object modeling,
- Password-validator to ensure a strong password is created,
- Express-rate-limit to limit repeated requests to public APIs,
- Helmet to Help secure Express/Connect apps with various HTTP headers,
- express-mongo-sanitize to sanitizes user-supplied data to prevent MongoDB Operator Injection.


### How to use this repo : 

#frontend#

1- Clone the repository. (Repo created by OC)

2- Prerequisite :
- Install nodeJS 14.17.3 	https://nodejs.org/en/download/
- Start VSC as administrator
- npm install @angular/cli@7.0.2
- npm i node-sass@4.14.1
- ng serve


#backend#

1- Clone the repository.

2- Prerequisite :
- Npm init => entry point: (index.js) server.js
- npm install --save express
- npm install --save body-parser
- npm install --save mongoose
- npm install --save multer
- npm install --save bcrypt
- npm install --save jsonwebtoken
- npm install password-validator
- npm install --save express-rate-limit
- npm install helmet --save
- npm i maskdata
- npm install express-mongo-sanitize

3- Create .env file at the root, add the following keys and their secret values :
- DB_USER=
- DB_PASS=
- DB_TOKEN=


Then start the server with : 
- nodemon server

Open your browser : http://localhost:4200

