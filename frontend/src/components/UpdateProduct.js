import React from 'react';
import { useState, useEffect } from 'react';    


const UpdateProduct = ({ id }) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    
    useEffect(() => {
        getProductDetails();
    }, []);
    
    const getProductDetails = async () => {
        let result = await fetch(`http://localhost:8080/product/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        });
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    };
    
    const updateProduct = async () => {
        let result = await fetch(`http://localhost:8080/product/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, price, category, company }),
        });
        result = await result.json();
        console.log("Update Result:", result);
    };
    
    return (
        <div className="product">
        <h1>Update Product</h1>
        <input
            type="text"
            placeholder="Enter Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="inputBox"
        />
        <input
            type="text"
            placeholder="Enter Product Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="inputBox"
        />
        <input
            type="text"
            placeholder="Enter Product Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="inputBox"
        />
        <input
            type="text"
            placeholder="Enter Product Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="inputBox"
        />
        <button onClick={updateProduct} className="appButton" type="submit">
            Update Product
        </button>
        </div>
    );
}
export default UpdateProduct;