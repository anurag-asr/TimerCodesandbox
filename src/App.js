import { useState } from "react";
import "./styles.css";
import Timer from "./Timer";
import TimercleanUp from "./TimerCleanUp";
import TimerCounterSetTimeout from "./TimerCounterSetTimeout";

export default function App() {
  const [show,setShow]=useState(true)
  return (
    <div className="App">
      

      {/* <Timer /> */}
      {/* <TimerCounterSetTimeout/> */}
      {show&&<TimercleanUp/>}
      <button onClick={()=>{setShow(!show)}} >Toggle</button>
     
    </div>
  );
}
