/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

function MyComp () {

    const [count, setCount] = useState(0);

    // useEffect hook
    useEffect(() => {
        document.title = `Count: ${count}`;
    });

    function addCount() {
        setCount(c => c + 1);  // previous state for count
    }

    return(
        <>
            <p>Count: {count}</p>
            <button onClick={addCount}>Add</button>
        </>
    );
}


export default MyComp;
