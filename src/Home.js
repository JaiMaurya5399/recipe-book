import React from 'react';
import './Home.css';
import image1 from './img/Vegan-Chocolate-Cherry-Protein-Shake-7-500x750.jpg';
import image2 from './img/Super-Fluffy-Gluten-Free-Pancakes-5-600x900.jpg';


function Home() {
  console.log("Home component is loaded");

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Recipe Index</h1>
        <p>Browse our collection of recipes by category, cuisine, diet, or occasion.</p>
      </header>
      <div className="home-categories">
        <div className="category">
          <img src={image1}  alt="Category 1" />
          <h3>Category 1</h3>
        </div>
        <div className="category">
          <img src={image2}  alt="Category 2" />
          <h3>Category 2</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
