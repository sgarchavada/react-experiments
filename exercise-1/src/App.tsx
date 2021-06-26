import React, {useEffect, useState} from "react";
import moment from "moment";
import "./app.css";

const App: React.FC = () => {
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(moment(new Date()).format("h:mm:ss A"));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="center">
            <h1>{currentTime}</h1>
        </div>
    );
};

export default App;
