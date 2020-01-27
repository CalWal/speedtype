import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(10);

  const handleChange = e => {
    const { value } = e.target;
    setText(value);
  };

  const wordCount = text => {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter(word => word !== "").length;
  };

  useEffect(() => {
    if (timeRemaining > 0) {
      setTimeout(function() {
        setTimeRemaining(time => time - 1);
      }, 1000);
    }
  }, [timeRemaining]);

  return (
    <div>
      <h1>Test Your Speed</h1>
      <textarea onChange={handleChange} value={text} />
      <h4>Time Remaining:{timeRemaining}</h4>
      <button>Start Game</button>
      <h1>Word Count:</h1>
    </div>
  );
};

export default App;
