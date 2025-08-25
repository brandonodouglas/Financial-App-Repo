import { useState } from 'react';

// <button type="submit" className="border-green-400 text-2xl border-1 border-red-white p-3 font-extralight">[ ANALYSE ]</button>

export function TransactionInput() {
  function handleTransactions() {
    // Put transaction data here and send to server.
    // see https://react.dev/reference/react-dom/components/input#reading-the-input-values-when-submitting-a-form
  }



  
  return (
    <div className="flex flex-col justify-center items-center bg-blue-400 h-50 w-screen">
      <p className="font-light">Analyse Your Transactions Below:</p>
      <form className="border-2 border-white p-3">
        <input name="transactions" placeholder="Enter Transactions" className="placeholder-gray-200 bg-amber-50 text-2xl p-3 border-green-300 border-1 text-black m-3" />
        <input type="submit" onClick={handleTransactions} />	
      </form>
    </div>
  );
}