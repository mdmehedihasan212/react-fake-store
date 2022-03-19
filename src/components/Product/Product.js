import React from 'react';
import ProductModal from '../ProductModal/ProductModal';
import './Product.css'
import 'aos'

const Product = ({ product, setCountCard }) => {
    // console.log(product);
    return (
        <div className='col-md-4'>
            <div data-aos="zoom-in-up" className="card">
                <h1>{product.title.slice(0, 10)}</h1>
                <img src={product.image} alt="" />
                <div className="d-flex justify-content-evenly">
                    <button onClick={setCountCard} className='btn btn-success'>Add To Cart</button>
                    <button className='btn btn-danger'>Delete</button>
                    <ProductModal product={product}></ProductModal>
                    {/* <button className='btn btn-info'>Details</button> */}
                </div>
            </div>
        </div>
    );
};

export default Product;