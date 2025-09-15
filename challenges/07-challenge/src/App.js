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
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {faqs.map((faq, i) => {
        const num = i + 1;
        const isOpen = curOpen === num;
        return (
          <Item
            key={num}
            num={num}
            title={faq.title}
            isOpen={isOpen}
            onToggle={() => setCurOpen(isOpen ? null : num)}>
            {" "}
            {faq.text}{" "}
          </Item>
        );
      })}
    </div>
  );
}

function Item({ num, title, isOpen, onToggle, children }) {
  return (
    <div className={`item ${isOpen ? "open" : ""}`}>
      <em className="number">{String(num).padStart(2, "0")}</em>
      <em className="title">{title}</em>
      <em className="icon" onClick={onToggle}>
        {isOpen ? "–" : "+"}
      </em>
      {isOpen && <p className="content-box">{children}</p>}
    </div>
  );
}
