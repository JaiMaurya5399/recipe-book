import React from 'react';
import './Home.css';
import RecipeCard from './RecipeCard';

import image1 from './img/Vegan-Chocolate-Cherry-Protein-Shake-7-500x750.jpg';
import image2 from './img/Super-Fluffy-Gluten-Free-Pancakes-5-600x900.jpg';

function Home() {
  const recipes = [
    {
      image: image1,  // Use the imported image variable here
      title: 'Chocolate Cherry Protein Shake',
    },
    {
      image: image2,  // Use the imported image variable here
      title: 'Chocolate Peanut Butter Ice Cream Bars (Vegan)',
    },
    // Add more recipes as needed
  ];

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Recipe Index</h1>
        <p>Browse our collection of recipes by category, cuisine, diet, or occasion.</p>
      </header>
      <div className="home-recipes">
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            image={recipe.image}
            title={recipe.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
