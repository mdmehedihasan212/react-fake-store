import React from 'react';
import './Product.css'

const Product = ({ product }) => {
    console.log(product);
    return (
        <div className='col-md-4 container'>
            <div className="card p-3">
                <h1>{product.title.slice(0, 10)}</h1>
                <img className='w-50 m-auto' src={product.image} alt="" />
                <div className="d-flex justify-content-evenly">
                    <button className='btn btn-success'>Add Cart</button>
                    <button className='btn btn-danger'>Delete</button>
                    <button className='btn btn-warning'>Details</button>
                </div>
            </div>
        </div>
    );
};

export default Product;