import {  useState } from "react";

export function Elementstate(){
    const [userName,setuserName]=useState("");
    const [msg,setMsg]=useState("");
    function handleNameBlur (e){
        setuserName(e.target.value.toUpperCase());
    }
    function handlleNameChange(e){
        setuserName (e.target.value);
    }
    function handleNameFocus(){
        setMsg("You are focused on input box");
    }
    return(
        <div className="container-fluid">
            <dl className="ms-4">
                <dt>User Namme:</dt>
                <dd><input type="text" value={userName} onFocus={handleNameFocus} onBlur={handleNameBlur} onChange={handlleNameChange} placeholder="Name in Block " /></dd> 
            </dl>
            {/* Onchange is two binding we can use to modify value */}
            <dd>{msg}</dd>
        </div>
    );
}