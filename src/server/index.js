/*--------------------------------------------------------------
+ References Express
+ Pulls in the body-parser for reading JSON data in the body of requests
+ Uses a built-in feature called path
+ Sets root variables to make it easier to find where our code is located
+ Sets up a port
+ Cranks up Express
+ Tells the app how to use the middleware that were going to be using to serve up the server
+ Serves everything that's in the dist folder, which will be the static content
+ Serves up the application, and serves index.html for any GET requests not found on the server (for deep links)
+ Starts the server with app.listen
+ Uses an arrow function to log that the port is alive
----------------------------------------------------------------*/

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');

const root = './';
const port = process.env.PORT || '3000';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(root, 'dist/angular-cosmosdb')));
app.use('/api', routes);
app.get('*', (req, res) => {
  res.sendFile('dist/angular-cosmosdb/index.html', {root});
});

app.listen(port, () => console.log(`API running on localhost:${port}`));