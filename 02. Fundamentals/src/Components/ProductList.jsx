import React from "react";

const ProductList = () => {
  const Product = [
    { id: 1, name: "Phone", price: "$699" },
    { id: 2, name: "Laptop", price: "$1200" },
    { id: 3, name: "Headphones", price: "$199" },
  ];
  return (
    <div>
      {Product.map((p) => (
        <div key={p.id}>
          <p>name:{p.name}</p>
          <p>price:{p.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
