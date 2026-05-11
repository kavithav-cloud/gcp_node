const express =  require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = 3000;  

app.get('/', (req, res) => {
  res.send(`Hello World! ${process.env.environment}`);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});