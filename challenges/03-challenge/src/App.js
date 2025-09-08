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

  function handleUseStateStepPlus() {
    return setStep((step) => step + 1);
  }

  function handleUseStateStepMinus() {
    return setStep((step) => step - 1);
  }

  function handleUseStateCountPlus() {
    return setCount((count) => count + step);
  }

  function handleUseStateCountMinus() {
    return setCount((count) => count - step);
  }

  return (
    <div>
      <button onClick={handleUseStateStepMinus}>-</button>
      <spam>Step: {step}</spam>
      <button onClick={handleUseStateStepPlus}>+</button>
      <br />
      <button onClick={handleUseStateCountMinus}>-</button>
      <spam>Count: {count}</spam>
      <button onClick={handleUseStateCountPlus}>+</button>
      <p>
        {count === 0
          ? "Today"
          : `${Math.abs(count)} day${Math.abs(count) === 1 ? "" : "s"} ${
              count > 0 ? "from today" : "ago"
            }`}{" "}
        is {new Date(Date.now() + count * 24 * 60 * 60 * 1000).toDateString()}
      </p>
    </div>
  );
}

export default App;
