import React, { useState, useEffect } from "react";
export default function DataBinding() {
// not good practice to change the value of username one waty data binding
// http as protocal stateless protocol it cant remember the value between requests
const [price, setPrice] = useState(0);
const [viewCount, setViewCount] = useState(1);
const [username, setUsername] = useState("geekyshows"); 
const [stock, setStock] = useState(true);
const [style, setStyle] = useState('');
//data desctructuring my current value and function to update the value amd useState hook is used to create state variable
useEffect(() => {
    //side effects
    //fetching data from server
    //simulating data fetching with setTimeout
    
        setUsername("john_doe");
        setPrice(1999.99);
        setViewCount(1234567);
        setStock(true);
        setStyle('border border-3 border-primary rounded-3 shadow-lg');
}, []); //side effects
return (
    <div className={`container-fluid p-5 bg-light text-center border border-1 ${style}`} >
        <h1>Username :{username.toUpperCase()} </h1>
        <p>price :{price.toLocaleString('en-IN',{style: 'currency', currency: 'INR'})}</p> 
        <p className="bi bi-eye-fill m-4"> viewCount :{viewCount.toLocaleString('en-US',{notation: 'compact'})} views</p>
        <p>{console.log(isNaN(price))}</p>
        <p>{stock ? "In Stock" : "Out of Stock"}</p>
    </div>


);
//each componets has it local state
//props - to pass data from parent to child
//state - to manage local state within the component
//local state is used to manage data that can change over time within a component
// when state changes component re-renders to reflect the changes in the UI
// useState hook is used to create state variables in functional components it access usinf array destructuring
// useEffect hook is used to perform side effects in functional components such as data fetching setting up subscriptions and manually changing the DOM it runs after every render by default
}