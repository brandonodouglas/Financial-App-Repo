
import { useState } from 'react';
import React from 'react';
import { useRef } from 'react';

// This is a message object
type Message = {
  text: string,
  sender: 'ai' | 'user'
};

// https://www.dhiwise.com/post/a-step-by-step-guide-to-retrieving-input-values-in-react
// Use an uncontrolled component

export function Chatbot() {
  function chatbot(formData: { get: (arg0: string) => any; }) {
    const query = formData.get("query");
    alert(`You searched for '${query}'`);
    // send query to backend
    console.log(query);
  }

 
  return (
    <div className="flex flex-col items-center bg-white h-screen w-screen">
        <div className="flex flex-col text-black mt-10 text-base/9">
          <p className="text-black text-5xl font-semibold">Brandroid Chat Bot 🤖💬</p>
          <p>[BRANDROID]: Hey, I'm Brandroid! 👋😊 . Enter your transaction data below to get started.</p>
          <form action={chatbot}>
            <input name="query" className="border-1" type="text" placeholder="Enter transaction data" />
            <button type="submit">Chatbot</button>
          </form>

        </div>


    </div>

  );
}