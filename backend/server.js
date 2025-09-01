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
// DATABASE STUFF


// mongoose reference code - https://www.geeksforgeeks.org/mongodb/mongoose-schemas-creating-a-model/
// app.js
let db = mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'budgetwithbrandonDB', })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.log('Could not connect to MongoDB...', err));



// Mongoose schema
const userSchema = new mongoose.Schema({
  _id: Number, 
  userName: String,
})



// Model
const userModel = mongoose.model('users', userSchema);


// Placeholders for mongodb database -- replace with actual code
let usernamesDatabase = [];


app.get('/', (req, res) => {
  res.send('Hello World!')
})


// GET Endpoint for usernames 
app.get('/usernames', async (req, res, next) => {

  const users = await userModel.find();
  res.send('[SERVER]: Here is a list of currently registered users: ' + users);

});

// POST endpoint for usernames
app.post('/usernames', async (req, res, next) => {
  
  const registerUser = new userModel({ _id: 1, userName: req.body.Username});
  const number = await userModel.countDocuments();
  // For now, limit number of users to one user -- me!
  if (number == 0) {
    await registerUser.save();
    
    
  ;
    console.log('[SERVER]: Added user data to database as username is not currently taken')
      res.send("success");


  } else {
    console.log("[SERVER]: The maximum amount of users are currently signed up for the website, registration denied..");
    res.send("success")
  }
});


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
  if (number == 0) {
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