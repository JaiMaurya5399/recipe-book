import React from 'react';
import './RecipeCard.css'; // Add a separate CSS file if needed for RecipeCard

function RecipeCard({ image, title }) {
  return (
    <div className="recipe-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default RecipeCard;
