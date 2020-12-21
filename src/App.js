import React, { useState, useEffect, useRef } from 'react'
import './App.css';

function App() {
  const startTime = 10;
  const [text, getText] = useState('');
  const [wordCount, setWordCount] = useState(0)
  const [isTimeRunning, setTimeRunning] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(startTime);
  const inputRef = useRef(null);

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
    setWordCount(0);
    setTimeRemaining(startTime);
    inputRef.current.disabled = false;
    inputRef.current.focus();
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
      <textarea
        ref={inputRef}
        value={text}
        onChange={handleChange}
        disabled={!isTimeRunning ? true : false}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button
        onClick={startGame}
        disabled={isTimeRunning ? true : false}
      >START</button>
      <h1>Word Count: {wordCount}</h1>
    </section>
  );
}

export default App;
