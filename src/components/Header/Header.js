import React, { useState } from 'react';

const Header = () => {
    const [count, setCount] = useState(0);

    const plus = () => {
        setCount(count + 1)
    }
    const minus = () => {
        setCount(count - 1)
    }

    console.log(count);
    return (
        <div>
            <h1>Counter</h1>
            <h3>0</h3>
            <button onClick={plus} className='p-3 m-2'>+</button>
            <button onClick={minus} className='p-3 m-2'>-</button>
        </div>
    );
};

export default Header;