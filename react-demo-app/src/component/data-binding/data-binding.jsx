import {useState, useEffect} from 'react';
export function DataBinding() { 
    let name="John Doe";
const [price,setPrice] = useState(0);
const [viewCount, setViewCount] = useState(0);
useEffect(()=>{
setPrice(10023);
setViewCount(1000000);

}, [])
    return (
        <div className='container-fluid'>
            <h2>Data Binding Example</h2>
            <p>name can modify one way Binding</p>
            <input type="text" value={name} />
            <h3>Hello, {name}!</h3>
            <p>price can modify two way Binding</p>
            <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} />
            <h3>Product Price: {price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</h3>
            <p>viewCount can modify two way Binding</p>
            <h3>View Count: {viewCount.toLocaleString('en-US')}</h3>
{/* onunmount="console.log('Component Unmounted')" */}
 {/*
 usestate(): This hook is used to manage state in functional components.The useState hook returns an array with two elements: the current state value and a function to update that state.
 useEffect():This hook is used to perform side effects in functional components, such as fetching data, directly manipulating the DOM, or setting up subscriptions. It runs after the component renders and can be configured to run only when certain dependencies change. */} 
        </div>
        
    );
}