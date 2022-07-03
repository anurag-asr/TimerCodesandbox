import { useEffect, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);

  const startTimer = () => {
    setInterval(() => {
      console.log(`value is ${count}`);
      setCount((count) => count + 1);
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <div>
      <h1>Timer:{count}</h1>
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  );
}
