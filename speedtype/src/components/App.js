import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [startGame, setStartGame] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const handleChange = e => {
    const { value } = e.target;
    setText(value);
  };

  const calculateWordCount = text => {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter(word => word !== "").length;
  };

  const beginGame = () => {
    setStartGame(!startGame);
    setTimeRemaining(10);
  };

  const buttonLogic = () => {
    if (timeRemaining === 10) {
      return <button onClick={beginGame}>Start Game</button>;
    } else {
      return <button onClick={beginGame}>Reset</button>;
    }
  };

  useEffect(() => {
    if (timeRemaining > 0 && startGame === true) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setStartGame(false);
      setWordCount(calculateWordCount(text));
    }
  }, [timeRemaining, startGame]);

  return (
    <div>
      <h1>Test Your Speed</h1>
      <textarea onChange={handleChange} value={text} />
      <h4>Time Remaining:{timeRemaining}</h4>
      {buttonLogic}
      <h1>Word Count:{wordCount}</h1>
    </div>
  );
};

export default App;
