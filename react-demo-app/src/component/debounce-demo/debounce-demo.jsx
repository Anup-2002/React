import { useRef } from "react";
import { useState } from "react";

export function DebounceDemo() {
   
   const [msg, setMgs] = useState("Volume is 0%");
   let thread=useRef(null);
   function Level1(){
     setMgs("Volum increased 10%"); 
   }
   function Level2(){
     setMgs("volume increased 20%");

   }
   function Level3(){
        setMgs("volume increased 80%");
}
function Level4(){
    setMgs("volume increased 100%");
}
   function handleVolumeclick(){
        setTimeout(Level1, 1000);
        thread.current = setTimeout(Level2, 2000);//current thread reference is stored in thread variable cancel this thread using clearTimeout current property is used to access the current value of ref
        setTimeout(Level3, 3000);
        setTimeout(Level4, 4000);
        
        //bouncing effect not good user experience
        //DeBounce device execute task inside process at high speed/
        //but we want to execute task after some delay
        //! The process of Locking task in Memory for specific  duration and releasing after specific duration is called DeBounce
}
function handleCancelClick(){
    clearTimeout(thread.current);
}
    return <div className="container-fluid m-2 text-center p-4">DebounceDemo
        <button className="btn btn-warning bi bi-volume-up" onClick={handleVolumeclick}></button>
        <button className="btn btn-danger mx-3" onClick={handleCancelClick} >Cancel L2</button>
        <h3>{msg}</h3>
    </div>;
}