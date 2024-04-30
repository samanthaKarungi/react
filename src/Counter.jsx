import React, { useState} from "react";

function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(c => c + 1); // work with count previous state
    };

    const decrement = () => {
        setCount(c => c - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return(
        <>
            <div className="counter-container">
                <p>{count}</p>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
                <button onClick={increment}>Increment</button>
            </div>
        </>
    );

}

export default Counter;