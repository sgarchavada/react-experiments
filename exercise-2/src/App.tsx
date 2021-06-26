import React, {useState, useContext} from "react";
import store from "./store";
import "./app.css";

const App: React.FC = () => {
    const totalStore = useContext(store);
    const [count, setcount] = useState(0);

    const increment = () => {
        setcount(count + 1);
        totalStore.addToTotal();
        totalStore.addToIncrement();
    };

    const decrement = () => {
        setcount(count - 1);
        totalStore.addToTotal();
        totalStore.addToDecrement();
    };

    return (
        <div className="center">
            <h1>Clicks: {count}</h1>
            <div className="row">
                <a onClick={increment} className="btn">
                    Increment
                </a>
                <a onClick={decrement} className="btn">
                    Decrement
                </a>
            </div>
            <br />
            <h2>Total Counts: {totalStore.total}</h2>
            <h2>Increment Button Counts: {totalStore.incrementTotal}</h2>
            <h2>Decrement Button Counts: {totalStore.decrementTotal}</h2>
        </div>
    );
};

export default App;
