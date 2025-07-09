import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = { sender: 'user', text: input };
    const botReply = { sender: 'bot', text: getBotReply(input) };

    setMessages([...messages, newMessage, botReply]);
    setInput('');
  };

  const getBotReply = (msg) => {
    const lower = msg.toLowerCase();
    if (lower.includes('hello') || lower.includes('hi')) return 'Hello! 👋';
    if (lower.includes('hospital')) return 'You can search hospitals using the search page.';
    if (lower.includes('appointment')) return 'Currently, appointment booking is under development.';
    return 'Sorry, I did not understand that.';
  };

  return (
    <div className="chatbot-container">
      <div className="chat-window">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
