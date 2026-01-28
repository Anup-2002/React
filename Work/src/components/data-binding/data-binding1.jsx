import React, { useEffect, useState } from 'react';
export default function DataBinding1() {
    const [items,setItems] = useState([
    'Loading items...']);
const [product,setProduct] = useState([]);
useEffect(() => {   
    // Simulating data fetching with setTimeout
    setItems(['Iphone 13', 'Samsung Galaxy S21', 'OnePlus 9', 'Google Pixel 6']);
    setProduct([{id: 1, name: 'Iphone 13', price: 799.99, stock: true, rating: 4.5},{id: 2, name: 'Samsung Galaxy S21', price: 699.99, stock: true, rating: 4.3}, {id: 3, name: 'OnePlus 9', price: 729.99, stock: false, rating: 4.0}, {id: 4, name: 'Google Pixel 6', price: 599.99, stock: true, rating: 4.4}]);
}, []);
    return (

        <div className="container-fluid p-5 bg-light text-center border border-1" >
            <h1>Data Binding Component 1</h1>
            <p>This is a simple React component demonstrating data binding.</p>
            <ol>
                {   items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))

                }
            </ol>
            <select className="form-select w-25 mx-auto bg-body-secondary">
                { items.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))
                }
            </select>
            <div className="mt-4 d-flex flex-column align-items-center">
                <h2>Product Details</h2>
                <div className='d-flex flex-column align-items-center   accordion-item p-3 border border-2 border-info rounded-3 shadow-lg w-50 bg-white'>
                {product.map((prod) => (
                <li  key={prod.id}>
                <p>ID: {prod.id}</p>
                <p>Name: {prod.name}</p>
                <p>Price: {prod.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                <p>In Stock: {prod.stock ? 'Yes' : 'No'}</p>
                <p className='bi bi-star-fill'>Rating: {prod.rating} stars</p>
            
                </li>
                ))}
                </div>
                <table className="table table-bordered table-striped w-75 mt-4">
                    <thead className='table-dark'>
                        <tr className=''>
                            <th>ID</th>
                            <th>Name</th>   
                            <th>Price</th>
                            <th>In Stock</th>
                            <th>Rating</th>
                        </tr>
                    </thead >
                    <tbody className='bg-light'>
                        {product.map((prod) => (    
                            <tr key={prod.id}>
                                <td>{prod.id}</td>
                                <td>{prod.name}</td>
                                <td>{prod.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                                <td>{prod.stock ? 'Yes' : 'No'}</td>
                                <td className='bi bi-star-fill'>{prod.rating} stars</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}