// components/ParticleBackground.jsx
import React, { useEffect } from 'react';
import './ParticleBackground.css';

const ParticleBackground = () => {
useEffect(() => {
const createParticle = () => {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDelay = Math.random() * 8 + 's';
    particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
    document.body.appendChild(particle);

    setTimeout(() => {
    if (particle.parentNode) {
        particle.remove();
    }
    }, 10000);
};

// Crear partículas iniciales
for (let i = 0; i < 20; i++) {
    setTimeout(createParticle, i * 100);
}

// Crear partículas continuamente
const interval = setInterval(createParticle, 500);

return () => {
    clearInterval(interval);
    // Limpiar partículas existentes
    const existingParticles = document.querySelectorAll('.particle');
    existingParticles.forEach(particle => particle.remove());
};
}, []);

return null; // Este componente no renderiza JSX, solo maneja efectos
};

export default ParticleBackground;