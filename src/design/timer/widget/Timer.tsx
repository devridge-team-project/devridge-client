import { useState, useEffect } from "react";

export default function Timer() {
  const MINUTES_IN_MS = 5 * 60 * 1000;
  const INTERVAL = 1000;
  const [timeLeft, setTimeLeft] = useState<number>(MINUTES_IN_MS);

  const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(
    2,
    "0"
  );
  const second = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, "0");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - INTERVAL);
    }, INTERVAL);

    if (timeLeft <= 0) {
      clearInterval(timer);
      console.log("타이머가 종료되었습니다.");
    }

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  return (
    <div className="absolute text-bright-purple top-5 right-5">
      {minutes} : {second}
    </div>
  );
}
