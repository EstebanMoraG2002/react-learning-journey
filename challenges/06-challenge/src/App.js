import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  return (
    <div className="accordion">
      {faqs.map((faq, i) => (
        <Item key={i} num={i + 1} title={faq.title} text={faq.text} />
      ))}
    </div>
  );
}

function Item({ num, title, text }) {
  const [display, setDisplay] = useState("-");

  function handleDisplay() {
    setDisplay(display === "-" ? "+" : "-");
  }

  return (
    <div className={`item ${display === "+" ? "open" : ""}`}>
      <em className="number">{num.toString().padStart(2, "0")}</em>
      <em className="title">{title}</em>
      <em className="icon" onClick={handleDisplay}>
        {display}
      </em>
      {display === "+" && <p className="content-box">{text}</p>}
    </div>
  );
}
