const Recipe = require('../models/recipe')

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find()
    return res.status(200).json({ recipes })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const addRecipe = async (req, res) => {
  try {
    const recipe = await new Recipe(req.body)
    await recipe.save()
    return res.status(201).json({ recipe })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllRecipes,
  addRecipe
}
