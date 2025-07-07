import React from "react";


const AddProduct = () => {
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState(""); 
    const [category, setCategory] = React.useState("");
    const [company, setCompany] = React.useState("");
    const [error, setError] = React.useState(false);

    const addProduct = async () => {
        if(!name || !price || !category || !company) {
            setError(true);
            return false;
        }
        console.log(name, price, category, company);
        const userId = JSON.parse(localStorage.getItem("user"))._id;
        let result = await fetch("http://localhost:8080/add-product", {
            method: "POST",
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                "Content-Type": "application/json",
            }
            
        });
        result = await result.json();
        console.log("Result:", result);
    }
    return (
        <div className="product">
            <h1>Add Product</h1>
                <input type="text" className="inputBox" placeholder="Enter Product Name" value={name} onChange={(e) => setName(e.target.value)} />
                {error && !name && <span className="invalid-input">Enter valid name</span>}
                <input type="number" className="inputBox" placeholder="Enter Product Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                {error && !price && <span className="invalid-input">Enter valid price</span>}
                <input type="text" className="inputBox" placeholder="Enter Product Category" value={category} onChange={(e) => setCategory(e.target.value)} />
                {error && !category && <span className="invalid-input">Enter valid category</span>}
                <input type="text" className="inputBox" placeholder="Enter Product Company" value={company} onChange={(e) => setCompany(e.target.value)} />
                {error && !company && <span className="invalid-input">Enter valid company</span>}
                <button className="appButton" type="submit" onClick={addProduct}>Add Product</button>
        </div>
    );
};

export default AddProduct;