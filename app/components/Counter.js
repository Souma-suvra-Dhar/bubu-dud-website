"use client";
import { useEffect, useState } from "react";

export default function Counter({ startDate }) {
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) return <p className="center">💕 counting...</p>;

  const diff = Math.max(0, now - new Date(startDate));
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor(diff / 3600000) % 24;
  const minutes = Math.floor(diff / 60000) % 60;
  const seconds = Math.floor(diff / 1000) % 60;

  return (
    <div className="counter">
      <div><strong>{days}</strong>days</div>
      <div><strong>{hours}</strong>hours</div>
      <div><strong>{minutes}</strong>mins</div>
      <div><strong>{seconds}</strong>secs</div>
    </div>
  );
}
