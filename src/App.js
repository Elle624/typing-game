import React, { useState } from 'react'
import './App.css';

function App() {
  const [text, getText] = useState('');
  const handleChange = (event) => {
    getText(event.target.value)
  }

  const calculateWordsCount = (text) => {
    const words = text.trim().split(' ');
    return words.length
  }

  return (
    <section>
      <h1> How fast do you type?</h1>
      <textarea value={text} onChange={handleChange} />
      <h4>Time remaining: </h4>
      <button onClick={() => calculateWordsCount(text)}>START</button>
      <h1>Word Count:{calculateWordsCount(text)}</h1>
    </section>
  );
}

export default App;
