import React from 'react'

const RecipeCard = (props) => {
  return (
    <div className="card">
      <div className="image">
        <img src={props.image} alt="Recipe Card" />
      </div>
      <div className="information">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>{props.duration}</p>
        <p>{props.ingredients}</p>
        <p>{props.steps}</p>
        <p>{props.author}</p>
      </div>
    </div>
  )
}

export default RecipeCard
