import React from 'react'

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="cake-font">CakeHub</h1>

      <p className="centerP">
        This is our collection of some of the best dessert recipes on the
        planet. You can browse through our recipes, and if you have a recipe
        you'd like to share you can add your recipe as well.
      </p>
      <div>
        <img
          className="home-picture"
          src="https://biancazapatka.com/wp-content/uploads/2020/07/tiramisu-dessert-easy-vegan.jpg"
          alt="Dessert Image"
        ></img>
      </div>
    </div>
  )
}

export default Home
