import React, { useState, useEffect } from 'react'
import RecipeCard from '../components/RecipeCard'
import axios from 'axios'

const Recipes = () => {
  const [recipes, setRecipes] = useState([])

  const getRecipes = async () => {
    const res = await axios.get('http://localhost:3001/api/recipes')
    setRecipes(res.data.recipes)
  }

  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <div className="recipes">
      <div>
        <h2 className="center">Recipes</h2>
        <section className="recipe-container">
          {recipes.map((recipe) => (
            <RecipeCard
              title={recipe.title}
              description={recipe.description}
              image={recipe.image}
              duration={recipe.cooking_duration}
              ingredients={recipe.ingredients}
              steps={recipe.steps}
              author={recipe.authorName}
            />
          ))}
        </section>
      </div>
    </div>
  )
}

export default Recipes
