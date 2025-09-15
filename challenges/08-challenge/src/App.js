import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [myPercentage, setMyPercentage] = useState(0);
  const [friendPercentage, setFriendPercentage] = useState(0);

  function handleReset() {
    if (bill) setBill("");
  }

  return (
    <div>
      <Bill bill={bill} setBill={setBill} />

      <MyTipPercentage
        myPercentage={myPercentage}
        setMyPercentage={setMyPercentage}
      />

      <FriendTipPercentage
        friendPercentage={friendPercentage}
        setFriendPercentage={setFriendPercentage}
      />

      <Output
        bill={bill}
        myPercentage={myPercentage}
        friendPercentage={friendPercentage}
      />

      {bill > 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
}

function Bill({ bill, setBill }) {
  return (
    <div>
      <span>💵 How much was the bill?</span>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
    </div>
  );
}

function MyTipPercentage({ myPercentage, setMyPercentage }) {
  return (
    <section>
      <label htmlFor="myTip">💡 How was your service?</label>
      <select
        id="myTip"
        value={myPercentage}
        onChange={(e) => setMyPercentage(Number(e.target.value))}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>Good (10%)</option>
        <option value={20}>Excellent! (20%)</option>
      </select>
    </section>
  );
}

function FriendTipPercentage({ friendPercentage, setFriendPercentage }) {
  return (
    <section>
      <label htmlFor="friendTip">🤝 How was your friend’s service?</label>
      <select
        id="friendTip"
        value={friendPercentage}
        onChange={(e) => setFriendPercentage(Number(e.target.value))}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>Good (10%)</option>
        <option value={20}>Excellent! (20%)</option>
      </select>
    </section>
  );
}

function Output({ bill, myPercentage, friendPercentage }) {
  if (!bill) return null;

  const tip = (Number(bill) * (myPercentage + friendPercentage)) / 2 / 100;

  return (
    <h3>
      You pay ${Number(bill) + tip} (${bill} + ${tip} tip)
    </h3>
  );
}

export default App;
