console.log("Hello World  !!!")

// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');

require('../config/database');

const customRouter=require('../router')

// defining the Express app
const app = express();
global.__basedir= __dirname


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__basedir,'public')));
app.use('/uploads',express.static(path.join(__basedir,'uploads')));


app.use('/v1' , customRouter);
// defining an array to work as the database (temporary solution)
const ads = [
  {title: 'Hello this side chandradeep kumar!'}
];

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/', (req, res) => {
  res.send(ads);
});

// starting the server
app.listen(3003, () => {
  console.log('listening on port 3003');
});
