import React, { useState, useEffect } from "react";
import "./Clock.css";

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleanup function to clear the interval
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="clock-container">
            <h1 className="clock-title">Digital Clock</h1>
            <div className="time-display">
                {time.toLocaleTimeString()}
            </div>
        </div>
    );
};

export default Clock;