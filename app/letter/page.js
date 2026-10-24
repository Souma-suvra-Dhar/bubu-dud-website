import { letter } from "../data";

export const metadata = { title: "A Letter For You 💌" };

export default function Letter() {
  return (
    <>
      <h1>A Letter For You 💌</h1>
      <div className="card letter" style={{ marginTop: 24 }}>
        {letter.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </>
  );
}
