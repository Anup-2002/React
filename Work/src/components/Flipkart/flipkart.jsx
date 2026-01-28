import React, { useState, useEffect } from 'react';
import axios from 'axios';
export function Flipkart() {
const [product, setProduct] = useState({title:null,price:0,image:null,rating:{rate:0,ratings:0,reviews:0},offers:[]});//Mentions what type of data to be stored after react 19 version also for string mention null
function LoadData()
{
    // var htt=new XMLHttpRequest();//create XMLHttpRequest object
    // htt.open("GET","./product.json");//specify the request
    // htt.send();//send the request
    // htt.onreadystatechange=function()//event handler for readystate change
    // {
    //     if(htt.readyState===4 && htt.status===200)//check if the response is ready and status is ok
    //     {
    //         var pdata=JSON.parse(htt.responseText);//parse the json data
    //         console.log(pdata);
    //         setProduct(pdata);//set the data to state variable
    //     }
    // }
    //    fetch("product.json")
//    .then(response => response.json())//convert json data to js object
//    .then(data => setProduct(data))//set the data to state variable
//    .catch(error => console.error('Error fetching product data:', error));//actual dom used in js
   //issue with fetch
   //1. It is Dom method so may not work in older browsers
   //2. CORS policy may block the request if server not configured properly
   //3. it not good directly for virtual dom manipulation
   //4.explicitly have to convert json to js object
   //5. error handling is not good
   //6 binary data handling is not good
   // To overcome these issues axios library is used
   //React can use various libraries for http request like axios,jquery,superagent etc
   //axios is promise based library
   //axios automatically converts json to js object
   //axios has better error handling
   //axios works well with virtual dom
   //axios can handle binary data well
   //axios works well even in older browsers
   //axios supports request and response interceptors
   //axios supports cancellation of requests
   //axios supports timeout for requests
   //axios supports automatic transforms for JSON data
   //axios supports uploading and downloading progress
   //multiple concurrent requests can be handled using axios.all
   axios.get("product.json")
   .then(response => setProduct(response.data))
   .catch(error => console.error('Error fetching product data:', error))
   .finally(() => console.log('Request completed'));
}
useEffect(()=>{
LoadData();
},[]);
    return (
        <>
            <div className="container-fluid  p-3 text-center fs-3">
                Flipkart - The One Stop Shop
                <div className="mt-4">
                    <div className="row">
                        <div className="col-3">
                            <img src={product.image} alt="Product Image" width="100%" className="img-fluid" />
                        </div>
                        <div className="col-9 text-start">
                            <h2 className='fs-2'>{product.title}</h2>
                            <div className="mt-5">
                                <span className='badge bg-success rounded'>{product.rating.rate} <span className='bi bi-star-fill'></span></span>
                                <span className='mx-2 text-secondary fw-bold'>{product.rating.ratings} Ratings and {product.rating.reviews} Reviews</span>
                                </div>
                            <div className='mt-3 fs-2 fw-bold'> {product.price.toLocaleString('en-IN',{style: 'currency', currency: 'INR',minimumFractionDigits: 0,maximumFractionDigits: 0})}</div>
                            <h5>Available Offers:</h5>
                            <ul className='list-unstyled' >
                                {product.offers.map((offer) => (
                                    <li className='bi bi-tag-fill text-success my-4 ' key={offer}><span className='text-secondary'>{offer}</span></li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}