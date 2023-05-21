// const { Sequelize, DataTypes } = require("sequelize");
// const keys = require('../keys');

// // create a database connection
// // const sequelize = new Sequelize("mydb", "postgres", "password", {
// //   host: "database-1.cuhephxwwjxs.us-east-1.rds.amazonaws.com",
// //   dialect: "postgres",
// //   port: 5432,
// // });

// const sequelize = new Sequelize({
//   user: keys.pgUser,
//   host: keys.pgHost,
//   database: keys.pgDatabase,
//   password: keys.pgPassword,
//   port: keys.pgPort,
//   dialect: keys.pgDialect
// });

// <<<<<<< HEAD
// =======
// const sequelize = new Sequelize({
//   user: keys.pgUser,
//   host: keys.pgHost,
//   database: keys.pgDatabase,
//   password: keys.pgPassword,
//   port: keys.pgPort,
//   dialect: 'postgres'
// });
// >>>>>>> 6e467b98fc701487f4bee926150b83a50119b6a7

// const validUrl = require('valid-url');

// async function validateCompanyUrl(companyurl) {
//   try {
//     if (!validUrl.isUri(companyurl)) {
//       throw new Error('Invalid URL');
//     }
//     const parsedUrl = new URL(companyurl);
//     if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
//       throw new Error('Invalid URL protocol');
//     }
//     return true;
//   } catch (error) {
//     console.error(error);
//     return false;
//   }
// }
// // const sequelize = new Sequelize(
// //   "postgres://postgres:arohyadav@localhost:5432/postgres"
// // );

// // test the database connection
// async function testConnection() {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// }

// // define a model for the 'career' table
// const contact = sequelize.define(
//   "contact",
//   {
//     ID: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     firstname: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     lastname: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     phonenumber: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     companyname: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     companyurl: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     industry: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     whatisyourissue: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     // Options
//     tableName: "contact",
//     timestamps: true,
//     underscrored: true,
//     createdAt: "created_at",
//     updatedAt: "updated_at",
//   }
// );

// // Create the table in the database
// contact.sync();

// exports.contactForm = async (req, res) => {
//   const {
//     firstname,
//     lastname,
//     email,
//     phonenumber,
//     companyname,
//     companyurl,
//     industry,
//     whatisyourissue,
//   } = req.body;

//   try {
//     const existingUser = await contact.findOne({ where: { email } });
//     if (existingUser) {
//       console.error(`User with email ${email} already exists`);
//       return res.status(400).send('User with this email already exists');
//     }

//     const isValidCompanyUrl = await validateCompanyUrl(companyurl);
//     if (!isValidCompanyUrl) {
//       console.error('Invalid company URL');
//       return res.status(400).send('Invalid company URL');
//     }

//     const newUser = contact.build({
//       ID: null,
//       firstname,
//       lastname,
//       email,
//       phonenumber,
//       companyname,
//       companyurl,
//       industry,
//       whatisyourissue,
//     });

//     await newUser.save();
//     return res.send('Form data inserted into database');
//   } catch (error) {
//     console.error(error);
//     return res.status(500).send('Error inserting form data into database');
//   }
// };
