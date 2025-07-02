import React from 'react';
import MessageCard from './components/MessageCard';
import LoveCounter from './components/LoveCounter';
import DeclarationButton from './components/DeclarationButton';
import ParticleBackground from './components/ParticleBackground';
import './App.css';

function App() {
return (
<div className="app">
    <ParticleBackground />
    <div className="container">
    <MessageCard />
    <LoveCounter />
    <DeclarationButton />
    </div>
</div>
);
}

export default App;