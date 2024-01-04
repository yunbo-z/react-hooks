import React, { useState } from "react";

const React_useState = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <div>useState example</div>
            <div>useState Hook allows us to track state in a function component</div>
            <br></br>
            <div>Here is a Counter component</div>
            <button type="button" onClick={() => setCount(count+1)}>Count Number: {count}</button>
        </>

    )
}
export default React_useState