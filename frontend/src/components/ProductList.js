import React, { useEffect } from "react";

const ProductList = () => {
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:8080/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    setProducts(result);
  };

 const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:8080/product/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
    result= await result.json();
    console.log("Delete Result:", result);
    if (result) {
        getProducts();
    }
  };

  return (
    <div className="product-list">
        <h3>Products List</h3>
        <ul>
            <li>S.No</li>
            <li>Name</li>
            <li>Price</li>
            <li>Category</li>
            <li>Company</li>
            <li>Actions</li>
        </ul>
      {products.map((product,index) => (
         <ul key={product._id}>
              <li>{index + 1}</li>
              <li>{product.name}</li>
              <li>${product.price}</li>
              <li>{product.category}</li>
              <li>{product.company}</li>
              <li><button  onClick={() => deleteProduct(product._id)}>Delete</button></li>
          </ul>
      ))}
    </div>
  );
};
export default ProductList;

       
