// components/DeclarationButton.jsx
import React from 'react';
import './DeclarationButton.css';

const DeclarationButton = () => {
  const showDeclaration = () => {
    alert(`💕 Mi amor por ti crece cada segundo que pasa 💕

Eres la razón de mi felicidad y la dueña de mi corazón.

¡Te quiero, Tatiana!   ¿Quieres ser mi novia? ❤️`);
};

return (
<button className="declaration-btn" onClick={showDeclaration}>
    INICIAR DECLARACIÓN ❤
</button>
);
};

export default DeclarationButton;