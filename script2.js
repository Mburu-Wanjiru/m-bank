const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_db_user',
  password: 'your_db_password',
  database: 'banking_system'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database as id ' + db.threadId);
});

app.use(bodyParser.json());

app.post('/register', (req, res) => {
  // Implement user registration logic, insert data into the 'customers' table
});

app.post('/login', (req, res) => {
  // Implement user login logic, validate credentials
});

app.post('/transfer', (req, res) => {
  // Implement fund transfer logic, update 'transactions' and 'accounts' tables
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});