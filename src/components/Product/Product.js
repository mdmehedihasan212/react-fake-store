import React from 'react';
import './Product.css'

const Product = ({ product }) => {
    console.log(product);
    return (
        <div>
            <h1>{product.title}</h1>
        </div>
    );
};

export default Product;