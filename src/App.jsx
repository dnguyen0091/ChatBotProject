import React, { useState } from 'react';
import './App.css'; // Ensure Tailwind CSS is imported

function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <div className="bg-gray-500 flex justify-center items-center h-16">
      <h1 className="text-center text-white">ChatBot</h1>
    </div>
  );
}

function Body() {
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendClick = () => {
    console.log('Message sent:', message);
    // Add your send message logic here
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendClick();
    }
  }

  return (
    <div className="flex flex-col items-center h-full p-4">
      <div class="displayChat" className="border-2 border-solid border-gray-700 p-4 w-96 h-96 mb-4">
        <h1 className="text-xl text-center">Body</h1>
        {/* Additional content can go here */}
      </div>
      <div className="w-full max-w-2xl flex items-center border-2 border-solid border-gray-800 rounded-md p-2">
        <input
          type="text"
          placeholder="Type a message"
          className="border-none p-2 w-full rounded-l-md focus:outline-none"
          value={message}
          onChange={handleInputChange}
        />
        <button className="bg-blue-500 text-white p-2 rounded-r-md flex items-center" onClick={handleSendClick}>
          <img src="src/assets/send.svg" alt="send" className="w-10" />
        </button>
      </div>
    </div>
  );
}

function handleMessageSend(message)
{
  const displayChat=document.querySelector('.displayChat');
  const userMessage=document.createElement('div');
  userMessage.classList.add('userMessage');
  const botMessage=document.createElement('div');
  botMessage.classList.add('botMessage');

  userMessage.textContent=message;
  botMessage.textContent='Bot response';

  displayChat.appendChild(userMessage);
  displayChat.appendChild(botMessage);
}
function Footer() {
  return (
    <div className="flex justify-center p-4">
      <h1 className="text-xl">Footer</h1>
    </div>
  );
}

export default App;
