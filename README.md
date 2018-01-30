# cheese-selector api
node backend for cheese selector app

## Getting Started
```
fork the repository (https://github.com/v-lai/cheese-selector)
$ git clone https://github.com/[YOUR_USERNAME]/cheese-selector.git
$ cd cheese-selector
$ yarn install or npm install
$ touch .env
```

### Optional add to .env file
```
NODE_ENV=development
```

### Starting the Backend Server
```
open two terminals
	- in one terminal
		$ mongod
	- in second terminal
		$ yarn start or npm start
```

### Port Numbers
* navigate to/use 8001 for development

## General Structure
The website consists of the following general component:

* cheese

## Routes
### `routes/cheeses.js`
Used to get, add, update, delete cheeses

* `GET all cheeses (/cheeses)`
* `GET a random cheese by id (/cheeses/random)`
* `GET a specific cheese by id (/cheeses/:id)`
* `POST a new cheese (/cheeses)`
* `PATCH a specific cheese by id (/cheeses/:id)`
* `DELETE a specific cheese by id (/cheeses/:id)`

## Tests
* TBD
