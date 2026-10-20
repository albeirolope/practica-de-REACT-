// components/LoveCounter.jsx
import React, { useState, useEffect, useMemo } from 'react';
import './LoveCounter.css';

const LoveCounter = () => {
const [timeElapsed, setTimeElapsed] = useState({
days: 0,
hours: 0,
minutes: 0,
seconds: 0
});

// ✅ Define la fecha fija con useMemo para que no cambie en cada render
const startDate = useMemo(() => new Date('2025-05-09T00:00:00'), []);

useEffect(() => {
const updateCounter = () => {
    const now = new Date();
    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    setTimeElapsed({ days, hours, minutes, seconds });
};

updateCounter();
const interval = setInterval(updateCounter, 1000);

return () => clearInterval(interval);
}, [startDate]); // ✅ ahora es estable gracias a useMemo

return (
<div className="neon-card magenta">
    <div className="heart-container">
    <div className="neon-heart">❤️</div>
    </div>
    
    <div className="love-text">Me enamoré de ti hace...</div>
    
    <div className="counter">
    <div className="time-unit">
        <div className="time-number">{timeElapsed.days}</div>
        <div className="time-label">días</div>
    </div>
    <div className="time-unit">
        <div className="time-number">{timeElapsed.hours}</div>
        <div className="time-label">hrs</div>
    </div>
    <div className="time-unit">
        <div className="time-number">{timeElapsed.minutes}</div>
        <div className="time-label">min</div>
    </div>
    <div className="time-unit">
        <div className="time-number">{timeElapsed.seconds}</div>
        <div className="time-label">seg</div>
    </div>
    </div>
</div>
);
};

export default LoveCounter;
