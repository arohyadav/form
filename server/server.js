import { Pool } from 'pg';

const db = new Pool({
    host: "database-1.cuhephxwwjxs.us-east-1.rds.amazonaws.com",
    user: "postgres",
    database: "mydb",
    password: "password",
    port: 5432,
  });

db.connect(err=>{
    if (err) {
        console.log(err.message);
        return;
    }
    console.log("Database connected");
  
});
