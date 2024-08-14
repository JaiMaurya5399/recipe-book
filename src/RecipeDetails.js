// RecipeDetails.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipeDetails.css'; // Make sure to create and link this CSS file

function RecipeDetails({ recipe, onBack }) {
  const navigate = useNavigate();

  if (!recipe) {
    return <div className="recipe-details">No recipe selected.</div>;
  }

  const handleBack = () => {
    onBack();
    navigate('/');
  };

  return (
    <div className="recipe-details">
      <div className="recipe-details-content">
        <div className="image">
            
        <h2>{recipe.title}</h2>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="main-image"
          />
           <p>{recipe.description}</p>
 
        </div>

           <table className="recipe-details-table">
          <caption>Recipe Information</caption>
          <tbody>
            <tr>
              <th>Author</th>
              <td>{recipe.author}</td>
            </tr>
            <tr>
              <th>Prep Time</th>
              <td>{recipe.prepTime}</td>
            </tr>
            <tr>
              <th>Total Time</th>
              <td>{recipe.totalTime}</td>
            </tr>
            <tr>
              <th>Servings</th>
              <td>{recipe.servings}</td>
            </tr>
            <tr>
              <th>Course</th>
              <td>{recipe.course}</td>
            </tr>
            <tr>
              <th>Cuisine</th>
              <td>{recipe.cuisine}</td>
            </tr>
            <tr>
              <th>Freezer Friendly</th>
              <td>{recipe.freezerFriendly}</td>
            </tr>
            <tr>
              <th>Does It Keep?</th>
              <td>{recipe.doesItKeep}</td>
            </tr>
          </tbody>
        </table>

        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h3>Instructions</h3>
        <ol>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>

        <h3>Notes</h3>
        <p>{recipe.notes}</p>

        <h3>Nutritional Information</h3>
        <table className="recipe-details-table">
          <tbody>
            <tr>
              <th>Calories</th>
              <td>{recipe.nutrition.calories}</td>
            </tr>
            <tr>
              <th>Carbohydrates</th>
              <td>{recipe.nutrition.carbohydrates}</td>
            </tr>
            <tr>
              <th>Protein</th>
              <td>{recipe.nutrition.protein}</td>
            </tr>
            <tr>
              <th>Fat</th>
              <td>{recipe.nutrition.fat}</td>
            </tr>
          </tbody>
        </table>

        <h3>Why You'll Love It</h3>
        <ul>
          {recipe.whyLove.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>

        <button onClick={handleBack} className="back-button">Back to Recipes</button>
      </div>
    </div>
  );
}

export default RecipeDetails;
