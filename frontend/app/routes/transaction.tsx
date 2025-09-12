import { useState } from "react";
import axios from "axios";



// See --> https://react.dev/reference/react/useState#passing-the-initializer-function for how this works

function createInitialTransactionRows() {
  // Initially no transaction rows in the database
  const initialTransactions = [];
  initialTransactions.push({
      id: 0,
      text: 'Item ' + (1)
    });
  return initialTransactions;
}

export default function Transaction() {
    const [transactions, setTransactions] = useState(createInitialTransactionRows);
    const [text, setText] = useState('');

    




  
  return (
    <div >
      <h1>Welcome, Brandon..</h1>
      <p>You currently have ? timelimes.</p>
      <hr></hr>
      <br></br>
      {/* Input box where transaction data goes*/}
      <input 
        value={text}
        onChange={e => setText(e.target.value)}
      />
      {/* Button click that's displayed beside the input element*/}
      <button onClick={() => {
        setText('');
        setTransactions([{
          id: transactions.length,
          text: text
        }, ...transactions]);
      }}>Add Transaction</button>
      {/* Data to be shown on the front end each time a user 'adds' a transaction*/}
      <ul>
        {transactions.map(item => (
          <li key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
     


    </div>
  )



}

/*
const TransactionRow = () => {
  function handleClick() {
    // Get the transaction and save to database

    alert('Transaction saved to database');
    // Add a new transaction

  }
  return (
    
    <div>
  <p>Current Transaction To Be Added:</p>
      <form className="flex row items-center justify-around border-white border-2 border-solid">
        <p>DATE:</p>
        <input className="text-black bg-amber-600 scheme-dark" type="date" />
        <p>DESCRIPTION</p>
        <input className="text-black bg-white" type="text" />
        <p>MONEY IN</p>
        <input className="text-black bg-white" type="text" />
        <p>Money OUT</p>
        <input className="text-black bg-white" type="text" />
        <p>BALANCE</p>
        <input className="text-black bg-white" type="text" />
        <p>CATEGORY</p>
        <input className="text-black bg-white" type="text" />
        <button type="submit" onClick={handleClick} className="border-2 border-white border-solid" value="submit">ADD</button>
      </form>
    </div>
  );
};
*/


