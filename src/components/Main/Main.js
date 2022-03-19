import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Main.css'

const Main = ({ setCountCard }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])

    console.log(products);
    return (
        <div>
            <div className="row">
                {
                    products.map(product => <Product setCountCard={setCountCard} key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Main;