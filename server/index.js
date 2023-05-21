const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// create an instance of express app
const app = express();

// use body-parser middleware to parse incoming request bodies
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//initialize middlewares
app.use(express.json())
// app.use(cors({ origin: CLIENT_URL, credentials: true }))

//import routes
const formRoutes = require('./routes/index');

//initialize routes
app.use('/api', formRoutes)

// start the server
app.listen(5000, () => {
  console.log('Server started on port 5000');
});
