"use client";
import { useState } from "react";
import { reasons } from "../data";

export default function LoveButton() {
  const [index, setIndex] = useState(-1);
  const [hearts, setHearts] = useState([]);

  function handleClick() {
    setIndex((i) => (i + 1) % reasons.length);
    const id = Date.now();
    const left = Math.random() * 90 + 5;
    setHearts((h) => [...h, { id, left }]);
    setTimeout(() => setHearts((h) => h.filter((x) => x.id !== id)), 3000);
  }

  return (
    <div className="card center">
      <h2>Reasons I love you 💖</h2>
      <p style={{ minHeight: 60, fontSize: "1.2rem", margin: "12px 0" }}>
        {index === -1 ? "Press the button, bububall 👇" : reasons[index]}
      </p>
      <button className="btn" onClick={handleClick}>Tell me why 💕</button>
      {hearts.map((h) => (
        <span key={h.id} className="floating-heart" style={{ left: `${h.left}%` }}>💗</span>
      ))}
    </div>
  );
}
