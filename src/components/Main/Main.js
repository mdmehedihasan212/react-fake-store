import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Main.css'

const Main = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])

    console.log(products);
    return (
        <div>
            <h1>All Products</h1>

            {
                products.map(product => <Product product={product}></Product>)
            }
        </div>
    );
};

export default Main;