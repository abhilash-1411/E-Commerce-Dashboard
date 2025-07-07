import React from "react";


const AddProduct = () => {
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState(""); 
    const [category, setCategory] = React.useState("");
    const [company, setCompany] = React.useState("");

    const addProduct = async () => {
        console.log(name, price, category, company);
    }
    return (
        <div className="product">
            <h1>Add Product</h1>
                <input type="text" className="inputBox" placeholder="Enter Product Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="number" className="inputBox" placeholder="Enter Product Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                <input type="text" className="inputBox" placeholder="Enter Product Category" value={category} onChange={(e) => setCategory(e.target.value)} />
                <input type="text" className="inputBox" placeholder="Enter Product Company" value={company} onChange={(e) => setCompany(e.target.value)} />
                <button className="appButton" type="submit" onClick={addProduct}>Add Product</button>
        </div>
    );
};

export default AddProduct;