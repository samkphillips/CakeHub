import React from 'react'

function SubmitRecipes() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    alert(`Thank you for your submission`)
  }
  return (
    <div className="background">
      <h1>Submit Your Recipe</h1>
      <h4>Click the submit button below.</h4>
      <form className="form-container" onSubmit={handleSubmit}>
        <p>Please enter the name of your recipe.</p>
        <input name="title" type="" />
        <p>Include recipe URL.</p>
        <input name="image" />
        <p>Include the duration of your recipe (minutes).</p>
        <input name="duration" />
        <p>Please include the ingredients of your recipe.</p>
        <input name="description" />
        <p>Inform us step by step how to make your recipe.</p>
        <input name="steps" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SubmitRecipes
