import dotenv from "dotenv"
import express from "express"
const app = express()
import cors from "cors"
const port = 3000
import mongoose from "mongoose"
dotenv.config();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// DATABASE STUFF]


// mongoose reference code - https://www.geeksforgeeks.org/mongodb/mongoose-schemas-creating-a-model/
// app.js
let db = mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'budgetwithbrandonDB', })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.log('Could not connect to MongoDB...', err));

// Mongoose schema
const userSchema = new mongoose.Schema({
  transaction: String,
})

// Model
const userModel = mongoose.model('user-transactions', userSchema);


// Placeholder for mongodb database -- replace with actual code
let transactionsDatabase = [];


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// GET Endpoint for transaction data
app.get('/transactions', (req, res, next) => {
  res.send('[SERVER]: Here is the transactions database: ' + JSON.stringify(transactionsDatabase));

});


// POST endpoint for transaction data
app.post('/transactions', async (req, res, next) => {
  const newTransaction = {
    TransactionData: req.body,
  };

  const brandon = new userModel({ transaction: JSON.stringify(newTransaction) });
    const number = await userModel.countDocuments();
    if(number == 0) {
   await brandon.save();
   console.log('Added data to the database as the database is empty')

    } else {
      console.log("Database is already full so can't add any new transactional data.");
    }







  res.send("success");
});

app.listen(port, () => {
  console.log(`[SERVER]: Example app listening on port ${port}`)
});