import Bears from "./components/Bears";
import Counter from "./components/Counter";
import LoveButton from "./components/LoveButton";
import { couple } from "./data";

export default function Home() {
  return (
    <>
      <h1>Happy Anniversary, {couple.her}! 💕</h1>
      <p className="sub">From {couple.me}</p>
      <div className="bears"><Bears /></div>
      <div className="card">
        <h2 className="center">We've been together for</h2>
        <Counter startDate={couple.startDate} />
      </div>
      <LoveButton />
    </>
  );
}
