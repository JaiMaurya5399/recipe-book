import React from 'react';
import './RecipeCard.css';

function RecipeCard({ image, title }) { // Remove `tags` from the props
  return (
    <div className="recipe-card">
      <img src={image} alt={title} className="recipe-image" />
      <h3 className="recipe-title">{title}</h3>
      {/* Remove or comment out the following section to exclude the tags */}
      {}
    </div>
  );
}

export default RecipeCard;
