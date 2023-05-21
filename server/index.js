const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

const formRoutes = require('./routes/index');
app.use('/api', formRoutes);

app.listen(5000, () => {
  console.log('Server started on port 5000');
});