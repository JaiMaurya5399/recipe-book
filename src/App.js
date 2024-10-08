// Worked by Jai Maurya and Aneri Patel
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About'; 
import PrivacyPolicy from './PrivacyPolicy'; 
import Terms from './Terms'; 
import Footer from './Footer';
import RecipeDetails from './RecipeDetails';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleRecipeSelect = (recipe) => {
    const detailedRecipes = {
      'Vegan Chocolate Cherry Protein Shake': {
        image: recipe.image,
        title: 'Vegan Chocolate Cherry Protein Shake',
        description: 'A healthy and delicious vegan shake',
        author: 'Minimalist Baker',
        prepTime: '5 minutes',
        totalTime: '5 minutes',
        servings: '1-2',
        course: 'Beverage',
        cuisine: 'Vegan',
        freezerFriendly: 'No',
        doesItKeep: 'Up to 24 hours',
        ingredients: [
          '1 cup almond milk',
          '1 banana',
          '1/2 cup cherries',
          '1 scoop protein powder',
          '1 tbsp cocoa powder',
        ],
        instructions: [
          'Combine all ingredients in a blender.',
          'Blend until smooth.',
          'Serve immediately.',
        ],
        notes: 'Adjust sweetness to taste.',
        nutrition: {
          calories: 250,
          carbohydrates: '30g',
          protein: '20g',
          fat: '5g',
        },
        whyLove: [
          'Delicious',
          'Healthy',
          'Easy to make',
        ],
      },
      'Super Fluffy Gluten-Free Pancakes': {
        image: recipe.image,
        title: 'Super Fluffy Gluten-Free Pancakes',
        description: 'Fluffy and light pancakes that are completely gluten-free.',
        author: 'Cooking Light',
        prepTime: '10 minutes',
        totalTime: '20 minutes',
        servings: '4',
        course: 'Breakfast',
        cuisine: 'American',
        freezerFriendly: 'Yes',
        doesItKeep: 'Up to 2 days',
        ingredients: [
          '1 cup gluten-free flour',
          '2 tbsp sugar',
          '1 tbsp baking powder',
          '1/4 tsp salt',
          '1 cup milk',
          '1 egg',
          '2 tbsp melted butter',
        ],
        instructions: [
          'Mix dry ingredients in one bowl.',
          'In another bowl, whisk wet ingredients.',
          'Combine wet and dry ingredients until smooth.',
          'Cook on a preheated griddle until bubbles form, then flip.',
        ],
        notes: 'Serve with your favorite toppings.',
        nutrition: {
          calories: 350,
          carbohydrates: '50g',
          protein: '8g',
          fat: '15g',
        },
        whyLove: [
          'Fluffy texture',
          'Gluten-free',
          'Perfect for breakfast',
        ],
      },
      'Coconut Dal Green Curry': {
        image: recipe.image,
        title: 'Coconut Dal Green Curry',
        description: 'A rich and creamy green curry with coconut and lentils.',
        author: 'Spice Cravings',
        prepTime: '15 minutes',
        totalTime: '40 minutes',
        servings: '4',
        course: 'Dinner',
        cuisine: 'Indian',
        freezerFriendly: 'Yes',
        doesItKeep: 'Up to 5 days',
        ingredients: [
          '1 cup red lentils',
          '1 can coconut milk',
          '1 onion, chopped',
          '2 tbsp green curry paste',
          '1 cup spinach',
          '1 tbsp oil',
          'Salt and pepper to taste',
        ],
        instructions: [
          'Cook onions in oil until translucent.',
          'Add curry paste and cook for 1 minute.',
          'Add lentils and coconut milk.',
          'Simmer until lentils are tender.',
          'Add spinach and cook until wilted.',
        ],
        notes: 'Serve with rice or naan.',
        nutrition: {
          calories: 300,
          carbohydrates: '40g',
          protein: '12g',
          fat: '15g',
        },
        whyLove: [
          'Creamy and flavorful',
          'Nutritious',
          'Easy to prepare',
        ],
      },
      'Palak Paneer with Tofu': {
        image: recipe.image,
        title: 'Palak Paneer with Tofu',
        description: 'A vegan twist on the classic Palak Paneer using tofu.',
        author: 'The Vegan Corner',
        prepTime: '20 minutes',
        totalTime: '30 minutes',
        servings: '4',
        course: 'Main',
        cuisine: 'Indian',
        freezerFriendly: 'Yes',
        doesItKeep: 'Up to 4 days',
        ingredients: [
          '1 block tofu, cubed',
          '2 cups spinach, chopped',
          '1 onion, chopped',
          '2 tomatoes, chopped',
          '2 tbsp oil',
          '1 tsp cumin seeds',
          '1 tsp turmeric',
          '1 tsp garam masala',
          'Salt to taste',
        ],
        instructions: [
          'Fry tofu cubes until golden brown.',
          'Cook onions and tomatoes with spices.',
          'Add spinach and cook until wilted.',
          'Add tofu and mix well.',
        ],
        notes: 'Adjust spice levels to taste.',
        nutrition: {
          calories: 250,
          carbohydrates: '20g',
          protein: '18g',
          fat: '15g',
        },
        whyLove: [
          'Healthy and flavorful',
          'Great protein source',
          'Vegan-friendly',
        ],
      },
      'Hot Chocolate with Chai Spices': {
        image: recipe.image,
        title: 'Hot Chocolate with Chai Spices',
        description: 'Warm and comforting hot chocolate with a hint of chai spices.',
        author: 'Tea Time Treats',
        prepTime: '10 minutes',
        totalTime: '15 minutes',
        servings: '2',
        course: 'Beverage',
        cuisine: 'Indian',
        freezerFriendly: 'No',
        doesItKeep: 'Best served immediately',
        ingredients: [
          '2 cups milk',
          '2 tbsp cocoa powder',
          '1/4 cup sugar',
          '1/2 tsp chai spice mix',
          '1/4 cup water',
          'Whipped cream for topping',
        ],
        instructions: [
          'Heat milk in a saucepan.',
          'In a separate bowl, mix cocoa powder, sugar, and chai spices.',
          'Combine with milk and whisk until smooth.',
          'Serve with whipped cream.',
        ],
        notes: 'Adjust sweetness and spice levels to taste.',
        nutrition: {
          calories: 300,
          carbohydrates: '40g',
          protein: '8g',
          fat: '12g',
        },
        whyLove: [
          'Cozy and comforting',
          'Perfect for cold days',
          'Rich and flavorful',
        ],
      },
      'Vegan Tofu Cauliflower Curry Korma': {
        image: recipe.image,
        title: 'Vegan Tofu Cauliflower Curry Korma',
        description: 'A creamy, spicy korma curry with tofu and cauliflower.',
        author: 'Indian Foodie',
        prepTime: '15 minutes',
        totalTime: '40 minutes',
        servings: '4',
        course: 'Main',
        cuisine: 'Indian',
        freezerFriendly: 'Yes',
        doesItKeep: 'Up to 5 days',
        ingredients: [
          '1 block tofu, cubed',
          '1 head cauliflower, cut into florets',
          '1 onion, chopped',
          '1 can coconut milk',
          '2 tbsp korma paste',
          '2 tbsp oil',
          'Salt to taste',
        ],
        instructions: [
          'Cook onions with korma paste.',
          'Add tofu and cauliflower.',
          'Pour in coconut milk and simmer.',
          'Cook until vegetables are tender.',
        ],
        notes: 'Serve with rice or naan.',
        nutrition: {
          calories: 350,
          carbohydrates: '35g',
          protein: '20g',
          fat: '20g',
        },
        whyLove: [
          'Rich and creamy',
          'Full of flavor',
          'Vegan and gluten-free',
        ],
      },
      'Shawarma Roasted Cabbage Wedges': {
        image: recipe.image,
        title: 'Shawarma Roasted Cabbage Wedges',
        description: 'Savory roasted cabbage wedges with shawarma spices.',
        author: 'Middle Eastern Delights',
        prepTime: '15 minutes',
        totalTime: '35 minutes',
        servings: '4',
        course: 'Side',
        cuisine: 'Middle Eastern',
        freezerFriendly: 'No',
        doesItKeep: 'Up to 3 days',
        ingredients: [
          '1 head cabbage, cut into wedges',
          '2 tbsp shawarma seasoning',
          '2 tbsp olive oil',
          'Salt to taste',
        ],
        instructions: [
          'Toss cabbage wedges with oil and shawarma seasoning.',
          'Roast in the oven until tender.',
          'Serve warm.',
        ],
        notes: 'Great as a side dish or snack.',
        nutrition: {
          calories: 150,
          carbohydrates: '20g',
          protein: '3g',
          fat: '8g',
        },
        whyLove: [
          'Flavorful and spicy',
          'Easy to make',
          'Perfect side dish',
        ],
      },
      'Tikka Masala BIG Flavor Vegan': {
        image: recipe.image,
        title: 'Tikka Masala BIG Flavor Vegan',
        description: 'A vegan version of the classic tikka masala with big flavors.',
        author: 'Vegan Eats',
        prepTime: '20 minutes',
        totalTime: '45 minutes',
        servings: '4',
        course: 'Main',
        cuisine: 'Indian',
        freezerFriendly: 'Yes',
        doesItKeep: 'Up to 4 days',
        ingredients: [
          '1 block tofu, cubed',
          '1 onion, chopped',
          '2 tomatoes, pureed',
          '1 can coconut milk',
          '2 tbsp tikka masala paste',
          '2 tbsp oil',
          'Salt and pepper to taste',
        ],
        instructions: [
          'Cook onions with tikka masala paste.',
          'Add tofu and tomato puree.',
          'Pour in coconut milk and simmer.',
          'Cook until flavors are well blended.',
        ],
        notes: 'Serve with rice or naan.',
        nutrition: {
          calories: 400,
          carbohydrates: '30g',
          protein: '25g',
          fat: '20g',
        },
        whyLove: [
          'Rich and flavorful',
          'Hearty and satisfying',
          'Vegan and delicious',
        ],
      },
      'Indian Style Jeera Rice': {
        image: recipe.image,
        title: 'Indian Style Jeera Rice',
        description: 'A fragrant rice dish flavored with cumin seeds.',
        author: 'Spice House',
        prepTime: '10 minutes',
        totalTime: '20 minutes',
        servings: '4',
        course: 'Side',
        cuisine: 'Indian',
        freezerFriendly: 'Yes',
        doesItKeep: 'Up to 5 days',
        ingredients: [
          '1 cup basmati rice',
          '1 tbsp cumin seeds',
          '2 tbsp oil',
          '2 cups water',
          'Salt to taste',
        ],
        instructions: [
          'Heat oil and cumin seeds in a pot.',
          'Add rice and stir for a few minutes.',
          'Add water and salt, and cook until rice is tender.',
        ],
        notes: 'Pairs well with curries and dals.',
        nutrition: {
          calories: 200,
          carbohydrates: '40g',
          protein: '4g',
          fat: '2g',
        },
        whyLove: [
          'Simple and aromatic',
          'Perfect side dish',
          'Easy to make',
        ],
      },
      'Mint Chutney Fresh Indian Inspired': {
        image: recipe.image,
        title: 'Mint Chutney Fresh Indian Inspired',
        description: 'A refreshing and spicy mint chutney.',
        author: 'Indian Flavor',
        prepTime: '10 minutes',
        totalTime: '10 minutes',
        servings: '6',
        course: 'Condiment',
        cuisine: 'Indian',
        freezerFriendly: 'No',
        doesItKeep: 'Up to 1 week',
        ingredients: [
          '1 cup fresh mint leaves',
          '1/2 cup cilantro leaves',
          '1 green chili',
          '1 tbsp lemon juice',
          '1 tsp cumin seeds',
          'Salt to taste',
        ],
        instructions: [
          'Blend all ingredients until smooth.',
          'Adjust seasoning to taste.',
          'Serve with snacks or as a condiment.',
        ],
        notes: 'Great with pakoras or kebabs.',
        nutrition: {
          calories: 30,
          carbohydrates: '5g',
          protein: '1g',
          fat: '1g',
        },
        whyLove: [
          'Fresh and spicy',
          'Perfect accompaniment',
          'Quick to make',
        ],
      },
      'Sweet Potato Fritters Gluten-free': {
        image: recipe.image,
        title: 'Sweet Potato Fritters Gluten-free',
        description: 'Crispy and tasty sweet potato fritters that are gluten-free.',
        author: 'Healthy Eats',
        prepTime: '15 minutes',
        totalTime: '25 minutes',
        servings: '4',
        course: 'Snack',
        cuisine: 'American',
        freezerFriendly: 'Yes',
        doesItKeep: 'Up to 3 days',
        ingredients: [
          '2 large sweet potatoes, grated',
          '1/4 cup gluten-free flour',
          '1 egg',
          '1 tsp cumin',
          'Salt and pepper to taste',
          'Oil for frying',
        ],
        instructions: [
          'Mix all ingredients in a bowl.',
          'Form into patties and fry in hot oil until crispy.',
          'Serve with dipping sauce.',
        ],
        notes: 'Try with a yogurt dip.',
        nutrition: {
          calories: 180,
          carbohydrates: '25g',
          protein: '3g',
          fat: '8g',
        },
        whyLove: [
          'Crispy and delicious',
          'Gluten-free',
          'Perfect snack',
        ],
      },
      'Pot Vegan Chickpea Curry': {
        image: recipe.image,
        title: 'Pot Vegan Chickpea Curry',
        description: 'A hearty and flavorful chickpea curry made with wholesome ingredients.',
        author: 'Vegan Delight',
        prepTime: '15 minutes',
        totalTime: '30 minutes',
        servings: '4',
        course: 'Main',
        cuisine: 'Indian',
        freezerFriendly: 'Yes',
        doesItKeep: 'Up to 5 days',
        ingredients: [
          '1 can chickpeas, drained',
          '1 can diced tomatoes',
          '1 onion, chopped',
          '2 cloves garlic, minced',
          '1 tbsp curry powder',
          '1 cup spinach',
          '2 tbsp oil',
          'Salt to taste',
        ],
        instructions: [
          'Cook onions and garlic in oil.',
          'Add curry powder and cook for 1 minute.',
          'Add chickpeas, tomatoes, and spinach.',
          'Simmer until flavors are well combined.',
        ],
        notes: 'Serve with rice or naan.',
        nutrition: {
          calories: 300,
          carbohydrates: '40g',
          protein: '12g',
          fat: '10g',
        },
        whyLove: [
          'Hearty and filling',
          'Full of flavor',
          'Easy to make',
        ],
      },
    };
  
    setSelectedRecipe(detailedRecipes[recipe.title]);
  };
  

  return (
    <Router>
      <div className="App">
        <Header onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} onRecipeClick={handleRecipeSelect} />} />
          <Route path="/recipe-details" element={<RecipeDetails recipe={selectedRecipe} onBack={() => setSelectedRecipe(null)} />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer /> {}
      </div>
    </Router>
  );
}

export default App;
