import React from 'react'
import axios from 'axios'

function SubmitRecipes() {
  const parseForm = (e) => {
    return {
      title: e.target[0].value,
      description: e.target[1].value,
      image: e.target[2].value,
      cooking_duration: Number(e.target[3].value),
      ingredients: e.target[4].value,
      steps: e.target[5].value,
      authorName: e.target[6].value
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const parsedForm = parseForm(e)

    axios({
      method: 'post',
      url: 'http://localhost:3001/api/submitrecipe',
      data: parsedForm,
      headers: { 'Content-Type': 'application/json' }
    })
      .then(function (response) {
        alert(`Thank you for your submission`)
        console.log(response)
      })
      .catch(function (response) {
        alert(`Submission unsuccessful.`)
        console.log(response)
      })
  }

  return (
    <div className="background">
      <h1>Submit Your Recipe</h1>
      <h4>Click the submit button below.</h4>
      <form className="form-container" onSubmit={handleSubmit}>
        <p>Please enter the name of your recipe.</p>
        <input name="title" type="" />
        <p>Please enter the description of your recipe.</p>
        <input name="description" type="" />
        <p>Include image URL.</p>
        <input name="image" />
        <p>Include the duration of your recipe (minutes).</p>
        <input className="numbers" type="Number" name="duration" />
        <p>Please include the ingredients of your recipe.</p>
        <input name="ingredients" />
        <p>Inform us step by step how to make your recipe.</p>
        <input name="steps" />
        <p>Please add your name!</p>
        <input name="authorName" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SubmitRecipes
