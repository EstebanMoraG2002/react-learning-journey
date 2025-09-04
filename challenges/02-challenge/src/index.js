import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "React",
    level: "intermediate",
    color: "#61DBFB", // React blue
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#F7DF1E", // JS yellow
  },
  {
    skill: "Node.js",
    level: "advanced",
    color: "#3C873A", // Node green
  },
  {
    skill: "Python",
    level: "advanced",
    color: "#3776AB", // Python blue
  },
  {
    skill: "Machine Learning",
    level: "intermediate",
    color: "#FF6F00", // orange (ML/AI)
  },
  {
    skill: "SQL",
    level: "advanced",
    color: "#F29111", // SQL orange
  },
  {
    skill: "TypeScript",
    level: "beginner",
    color: "#3178C6", // TS blue
  },
];

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

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((s) => (
        <Skill
          key={s.skill}
          skill={s.skill}
          emoji={
            s.level === "beginner"
              ? "👶"
              : s.level === "intermediate"
              ? "👍"
              : "💪"
          }
          color={s.color}
        />
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
