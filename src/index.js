console.log("Hello World  !!!")

// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

require('../config/database');

const userRouter=require('../router')

// defining the Express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/v1' , userRouter);
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
