import { useEffect, useState } from "react";

export default function TimerCounterSetTimeout() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);

  return (
    <div>
      <h1>count:{count}</h1>
      <h1>update at every second</h1>
    </div>
  );
}
