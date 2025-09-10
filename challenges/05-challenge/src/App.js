import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleUseStateStep(value) {
    return setStep(value);
  }

  function handleUseStateCountPlus() {
    return setCount((count) => count + step);
  }

  function handleUseStateCountMinus() {
    return setCount((count) => count - step);
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <input
        type="range"
        min="1"
        max="10"
        value={step}
        onChange={(e) => handleUseStateStep(+e.target.value)}
      />
      <span>{step}</span>
      <br />
      <button onClick={handleUseStateCountMinus}>-</button>
      <input
        type="text"
        value={count}
        placeholder="0"
        onChange={(e) => setCount(+e.target.value)}></input>
      <button onClick={handleUseStateCountPlus}>+</button>
      <p>
        {count === 0
          ? "Today"
          : `${Math.abs(count)} day${Math.abs(count) === 1 ? "" : "s"} ${
              count > 0 ? "from today" : "ago"
            }`}{" "}
        is {new Date(Date.now() + count * 24 * 60 * 60 * 1000).toDateString()}
      </p>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
