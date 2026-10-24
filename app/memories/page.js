import { memories } from "../data";

export const metadata = { title: "Our Memories 📸" };

export default function Memories() {
  return (
    <>
      <h1>Our Memories 📸</h1>
      <p className="sub">Every little moment counts</p>
      <div className="timeline">
        {memories.map((m) => (
          <div className="card" key={m.title}>
            <small>{m.date}</small>
            <h2>{m.title}</h2>
            <p>{m.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}
