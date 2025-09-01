import { useState } from 'react';
import React from 'react';
import { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

// https://www.dhiwise.com/post/a-step-by-step-guide-to-retrieving-input-values-in-react
// Use an uncontrolled component
// https://api.reactrouter.com/v7/functions/react_router.useNavigate.html#:~:text=Returns%20a%20function%20that%20lets,to%20user%20interactions%20or%20effects.&text=It's%20often%20better%20to%20use,and%20loaders%20than%20this%20hook.
// Handles the username input on the landing page and stores in a database

export function Chatbot() {
      let navigate = useNavigate();

    function handleSubmit(formData: { get: (arg0: string) => any; }) {
    const query = formData.get("query");
    alert(`You name is: ' ${query}'`);
    axios.post('http://localhost:3000/usernames', {
      Username: query,
    })
      .then(function (response) {
        console.log("[CLIENT]: Server response was: " + response.data);
        if(response.data == "failure") {
          navigate("/")
        } else {
navigate("/transactions")
        }
        
      })
      .catch(function (error) {
        console.log(error);
        navigate("/")
      });



  }
  
  // sends user input data to the database
  function chatbot(formData: { get: (arg0: string) => any; }) {
    const query = formData.get("query");
    alert(`You searched for '${query}'`);
    // send query to backend
    const name = "brandon";
    console.log(query);
   

    axios.post('http://localhost:3000/transactions', {
      TransactionData: query,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      


  };
  

 
  {/* 
    <form action={chatbot}>
          <input name="query" className="border-1" type="text" placeholder="Upload CSV here" />
          <button type="submit">Upload your csvt</button>
        </form>
  */}
  
  return (
    
    
    <div className="flex flex-col items-center bg-white h-screen w-screen">
      
      <div className=" text-black mt-5 text-center">
        <p>Hey there 👋☺️.<p>Ready to transform <strong>your </strong>financial life? </p>Enter your username below to get started.</p>
      
         <form action={handleSubmit}>
          <input name="query" className="border-1" type="text" placeholder="Enter username" />
          <button  className="p-0 border-black border-1 text-shadow-md bg-amber-500 text-white" type="submit">REGISTER</button>
        
        </form>
        

         {/* 
    <form action={chatbot}>
          <input name="query" className="border-1" type="text" placeholder="Upload CSV here" />
          <button type="submit">Upload your csvt</button>
        </form>
  */}
        
      </div>
    </div>
  );
}