import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const startTime = 5;
  const [text, getText] = useState('');
  const [wordCount, setWordCount] = useState(0)
  const [isTimeRunning, setTimeRunning] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(startTime);

  const handleChange = (event) => {
    getText(event.target.value)
  }

  const calculateWordsCount = (text) => {
    const words = text.trim().split(' ');
    const filteredWords = words.filter(word => word !== '')
    return filteredWords.length
  }

  const startGame = () => {
    setTimeRunning(true);
    getText('');
    setTimeRemaining(startTime)
  }

  const endGame = () => {
    setWordCount(calculateWordsCount(text))
    setTimeRunning(false);
  }

  useEffect(() => {
    setTimeout(() => {
      if (isTimeRunning && timeRemaining > 0) {
        setTimeRemaining(prevTime => prevTime - 1);
      } else if (timeRemaining === 0) {
        endGame()
      }
    }, 1000)
  }, [timeRemaining, isTimeRunning])

  return (
    <section>
      <h1> How fast do you type?</h1>
      <textarea value={text} onChange={handleChange} />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning ? true : false}>START</button>
      <h1>Word Count: {wordCount}</h1>
    </section>
  );
}

export default App;
