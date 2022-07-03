import { useEffect, useState } from "react";

export default function TimercleanUp() {
  const [count, setCount] = useState(0);

  // const startTimer = () => {
  //   setInterval(() => {
  //     console.log(`value is ${count}`);
  //     setCount((count) => count + 1);
  //   }, 1000);
  // };

  useEffect(() => {

    const id=setInterval(() => {
      console.log(`value is ${Date.now()}`);
      setCount((count) => count + 1);
    }, 1000);
   
    const cleanup=()=>{
      console.log("unmounting")
      clearInterval(id)
    }
    return cleanup;

  },[]);
  // cleanup function as a return statement

  return (
    <div>
      <h1>Timer:{count}</h1>
    
    
    </div>
  );
}
