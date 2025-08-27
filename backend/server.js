const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Placeholder for mongodb database
let transactionsDatabase = [];


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// GET Endpoint for transaction data
app.get('/transactions', (req, res, next) => {
  res.send('[SERVER]: Here is the transactions database: ' + JSON.stringify(transactionsDatabase));

});

// POST endpoint for transaction data
app.post('/transactions', (req, res, next) => {
  const newTransaction = {
    TransactionData: req.body,
  };
  console.log('The request body is: ' + req.body)
  transactionsDatabase.push(newTransaction.TransactionData.query)
  console.log(transactionsDatabase[0]);
  res.send("success");
});

app.listen(port, () => {
  console.log(`[SERVER]: Example app listening on port ${port}`)
});