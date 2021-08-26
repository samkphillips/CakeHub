const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.get('/recipes', controllers.getAllRecipes)

router.post('/submitrecipe', controllers.addRecipe)

module.exports = router
