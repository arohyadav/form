const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
const keys = require('./keys');

const app = express();

// use body-parser middleware to parse incoming request bodies
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//initialize middlewares
app.use(express.json())
// app.use(cors({ origin: CLIENT_URL, credentials: true }))

const pgClient = new Pool({
  user: 'postgres',
  host: 'database-1.cuhephxwwjxs.us-east-1.rds.amazonaws.com',
  database: 'mydb',
  password: 'password',
  port: 5432,
});

// Postgres Client Setup
// const pgClient = new Pool({
//   user: keys.pgUser,
//   host: keys.pgHost,
//   database: keys.pgDatabase,
//   password: keys.pgPassword,
//   port: keys.pgPort,
// });

pgClient
  .connect()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });

// Create the table if it doesn't exist
pgClient.query(
  `CREATE TABLE IF NOT EXISTS consulting (
    ID SERIAL PRIMARY KEY,
    firstname VARCHAR NOT NULL,
    lastname VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    phonenumber VARCHAR NOT NULL,
    companyname VARCHAR NOT NULL,
    companyurl VARCHAR(255) NOT NULL,
    industry VARCHAR NOT NULL,
    pickdate VARCHAR NOT NULL,
    whatisyourissue VARCHAR NOT NULL
  )`
)
  .catch((err) => console.log(err));

// Route to handle submitting the consulting form
app.post('/api/consulting', async (req, res) => {
  const {
    firstname,
    lastname,
    email,
    phonenumber,
    companyname,
    companyurl,
    industry,
    pickdate,
    whatisyourissue,
  } = req.body;

  try {
    const query = `
      INSERT INTO consulting (firstname, lastname, email, phonenumber, companyname, companyurl, industry, pickdate, whatisyourissue)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    `;
    const values = [
      firstname,
      lastname,
      email,
      phonenumber,
      companyname,
      companyurl,
      industry,
      pickdate,
      whatisyourissue,
    ];

    await pgClient.query(query, values);
    return res.send('Form data inserted into database');
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error inserting form data into database');
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server started on port 5000');
});