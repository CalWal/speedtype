import { useState, useEffect, useRef } from "react";

const useWordGame = () => {
  const START_TIME = 10;

  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(START_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textboxRef = useRef(null);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter(word => word !== "").length;
  }

  function startGame() {
    setIsTimeRunning(true);
    setTimeRemaining(START_TIME);
    setText("");
    textboxRef.current.disabled = false;
    textboxRef.current.focus();
  }

  function endGame() {
    setIsTimeRunning(false);
    setWordCount(calculateWordCount(text));
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  return {
    textboxRef,
    handleChange,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount
  };
};

export default useWordGame;
