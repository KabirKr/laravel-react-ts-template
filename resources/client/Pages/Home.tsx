import React, { useState } from "react";

const Home = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Laravel + React + TS</h1>
            <button onClick={() => setCount(count + 1)}>
                <strong>Count : </strong>
                <span>{count}</span>
            </button>
        </div>
    );
};

export default Home;
