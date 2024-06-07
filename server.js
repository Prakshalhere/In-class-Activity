const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const UserRoute = require('./routes/User');
app.use('/user', UserRoute);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connect to the database
mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,  // Add this line for better compatibility
}).then(() => {
  console.log("Database Connected Successfully!!");
}).catch(err => {
  console.log('Could not connect to the database', err);
  process.exit();
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
    });
