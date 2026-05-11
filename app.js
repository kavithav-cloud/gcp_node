const express =  require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const QueryResults = require('./db.js');

const port = 8080;  

app.get('/', (req, res) => {
  res.send(`Hello World! Environment: ${process.env.environment}`);
  
});
app.get('/users', async (req, res) => {
  try {
    const users = await QueryResults.queryresults();
    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err.stack);
    res.status(500).send('Error fetching users');
  }
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
