import React, { useState } from 'react';
import './Header.css'

const Header = () => {
    const [count, setCount] = useState(0);

    // const plus = () => {
    //     setCount(count + 1)
    // }
    // const minus = () => {
    //     setCount(count - 1)
    // }
    // console.log(count);

    return (
        <div className='card'>
            <h1>Counter</h1>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)} className='p-3 m-2'>+</button>
            <button onClick={() => setCount(count - 1)} className='p-3 m-2'>-</button>
        </div>
    );
};

export default Header;