import React from 'react';
import './Home.css';
import RecipeCard from './RecipeCard';

import image1 from './img/Vegan-Chocolate-Cherry-Protein-Shake.jpg';
import image2 from './img/Super-Fluffy-Gluten-Free-Pancakes.jpg';
import image3 from './img/Coconut-Dal-Green-Curry.jpg';
import image4 from './img/Palak-Paneer-with-Tofu.jpg';
import image5 from './img/Hot-Chocolate-with-Chai-Spices.jpg';
import image6 from './img/Vegan-Tofu-Cauliflower-Curry-Korma.jpg';
import image7 from './img/Shawarma-Roasted-Cabbage-Wedges.jpg';
import image8 from './img/Tikka-Masala-BIG-flavor-vegan.jpg';
import image9 from './img/Indian-Style-Jeera-Rice.jpg';
import image10 from './img/Mint-Chutney-Fresh-Indian-inspired.jpg';
import image11 from './img/Sweet-Potato-Fritters-Gluten-free.jpg';
import image12 from './img/Pot-Vegan-Chickpea-Curry.jpg';

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
    {
        image: image3,  // Use the imported image variable here
        title: 'Coconut-Dal-Green-Curry',
      },
      {
        image: image4,  // Use the imported image variable here
        title: 'Palak-Paneer-with-Tofu',
      },
      {
        image: image5,  // Use the imported image variable here
        title: 'Hot-Chocolate-with-Chai-Spices',
      },
      {
        image: image6,  // Use the imported image variable here
        title: 'Vegan-Tofu-Cauliflower-Curry-Korma',
      },
      {
        image: image7,  // Use the imported image variable here
        title: 'Shawarma-Roasted-Cabbage-Wedges',
      },
      {
        image: image8,  // Use the imported image variable here
        title: 'Tikka-Masala-BIG-flavor-vegan',
      },
      {
        image: image9,  // Use the imported image variable here
        title: 'Indian-Style-Jeera-Rice',
      },
      {
          image: image10,  // Use the imported image variable here
          title: 'Mint-Chutney-Fresh-Indian',
        },
        {
          image: image11,  // Use the imported image variable here
          title: 'Sweet-Potato-Fritters-Gluten-free',
        },
        {
          image: image12,  // Use the imported image variable here
          title: 'Pot-Vegan-Chickpea-Curry',
        },
        
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
