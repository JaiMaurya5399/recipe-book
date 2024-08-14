// RecipeCard.js
import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({ image, title, onClick }) => {
  return (
    <div className="recipe-card" onClick={onClick}>
      <img src={image} alt={title} className="recipe-image" />
      <h3 className="recipe-title">{title}</h3>
    </div>
  );
}

export default RecipeCard;
