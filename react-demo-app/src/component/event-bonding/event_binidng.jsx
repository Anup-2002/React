import { useState } from "react";

export  function EventBinding() {
            function handleInsertClick(e,...args) {
                console.log("Button Clicked");
                console.log("Event Object:", e);
                console.log("Additional Arguments:", args);
                e.stopPropagation(); //stopropagation is used to stop event bubbling
                e.preventDefault(); //preventdefault is used to prevent default behavior of the element
            }
            const [userName, setUserName] = useState("Guest");
            function handleChangeName(e) {
                setUserName(e.target.value);
                console.log(e.target.value);
                console.log(userName);

            }

        return(
            
    <div className="container-fluid my-3 mx-5">
        <h2>Event Binding in React</h2>
    <button onClick={(e)=>handleInsertClick(e,1,'TV',['Samsung','LG','Sony'])}>Click Me</button> 
    <div className="mt-3"></div>
        <h4>Welcome, {userName}!</h4>
        <input type="text" placeholder="Enter your name" onChange={handleChangeName} value={userName}/>
        <div className="mt-3"></div>
            <p>hello {userName}</p>
        
    </div>
        );
}