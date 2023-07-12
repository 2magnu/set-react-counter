import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Counter</h1>
      <button onClick={handleClick}>Clicked {count} times</button>
    </>
  );
}
