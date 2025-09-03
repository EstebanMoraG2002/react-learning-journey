import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="me-picture.jpeg" alt="me" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h2>Esteban Mora</h2>
      <p>
        I’m a Full-stack Software Engineer passionate about building clean and
        efficient solutions. I enjoy working across the stack, from creating
        intuitive user interfaces to designing robust backends. Always curious
        and eager to learn, I love tackling challenges that push me to grow and
        deliver real value.
      </p>
    </div>
  );
}

const skills = [
  { skill: "React", emoji: "⚛️", color: "#61DBFB" },
  { skill: "JavaScript", emoji: "🟨", color: "#f7df1e" },
  { skill: "Node.js", emoji: "🟢", color: "#3c873a" },
  { skill: "Python", emoji: "🐍", color: "#306998" },
];

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((s) => (
        <Skill key={s.skill} skill={s.skill} emoji={s.emoji} color={s.color} />
      ))}
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
