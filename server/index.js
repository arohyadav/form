const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
const keys = require('./keys')

const app = express();
app.use(cors());
app.use(bodyParser.json());


// Postgres Client Setup
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort,
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
  .catch( err => console.log(err));

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

