import Bears from "../components/Bears";
import { couple } from "../data";

export const metadata = { title: "About Us 🐼" };

export default function About() {
  return (
    <>
      <h1>About Us 🐼🐻</h1>
      <div className="bears"><Bears size={180} /></div>
      <div className="card">
        <h2>{couple.me} 🐼</h2>
        <p>Write something sweet or funny about yourself here.</p>
      </div>
      <div className="card">
        <h2>{couple.her} 🐻</h2>
        <p>Write what makes her special here.</p>
      </div>
      <p className="center">Made with 💕 using Next.js</p>
    </>
  );
}
