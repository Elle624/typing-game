import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [text, getText] = useState('');
  const [isTimeRunning, setTimeRunning] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(5);

  const handleChange = (event) => {
    getText(event.target.value)
  }

  const calculateWordsCount = (text) => {
    const words = text.trim().split(' ');
    const filteredWords = words.filter(word => word !== '')
    return filteredWords.length
  }

  useEffect(() => {
    setTimeout(() => {
      if (isTimeRunning && timeRemaining > 0) {
        setTimeRemaining(prevTime => prevTime - 1)
      } else if (timeRemaining === 0) {
        setTimeRunning(false)
      }
    }, 1000)
  }, [timeRemaining, isTimeRunning])

  return (
    <section>
      <h1> How fast do you type?</h1>
      <textarea value={text} onChange={handleChange} />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={() => setTimeRunning(true)}>START</button>
      <h1>Word Count:</h1>
    </section>
  );
}

export default App;
