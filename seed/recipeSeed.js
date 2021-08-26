const db = require('../db')
const Recipe = require('../models/recipe')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const recipes = [
    {
      title: 'Best Chocolate Chip Cookies',
      description: 'Crisp edges, chewy middles!',
      image:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5961345.jpg&w=596&h=596&c=sc&poi=face&q=85',
      cooking_duration: 60,
      ingredients:
        '1 cup butter softened, 1 cup white sugar, 1 cup packed brown sugar, 2 eggs, 2 teaspoons vanilla extract, 1 teaspoon baking soda, 2 teaspoons hot water, 1/2 teaspoon salt, 3 cups all-purpose flour, 2 cups semisweet chocolate chips, 1 cup chopped walnuts',
      steps:
        'Step 1: Preheat oven to 350 degrees F (175 degrees C). Step 2: Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans. Step 3: Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.',
      authorName: 'Dora'
    },
    {
      title: 'Second Best Chocolate Chip Cookies',
      description: 'Chewy edges, crispy middles!',
      image:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5961345.jpg&w=596&h=596&c=sc&poi=face&q=85',
      cooking_duration: 65,
      ingredients:
        '1 cup butter softened, 1 cup white sugar, 1 cup packed brown sugar, 2 eggs, 2 teaspoons vanilla extract, 1 teaspoon baking soda, 2 teaspoons hot water, 1/2 teaspoon salt, 3 cups all-purpose flour, 2 cups semisweet chocolate chips, 1 cup chopped walnuts',
      steps:
        'Step 1: Preheat oven to 350 degrees F (175 degrees C). Step 2: Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans. Step 3: Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.',
      authorName: 'Nora'
    },
    {
      title: 'One Bowl Chocolate Cake',
      description:
        'This is a rich and moist chocolate cake. It only takes a few minutes to prepare the batter. Frost with your favorite chocolate frosting.',
      image:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F708879.jpg&w=272&h=272&c=sc&poi=face&q=85',
      cooking_duration: 60,
      ingredients:
        '2 cups white sugar, 1 3/4 cups all-purpose flour, 3/4 cup unsweetened cocoa powder, 1 1/2 teaspoons baking powder, 1 1/2 teaspoons baking soda, 1 teaspoon salt, 2 eggs, 1 cup milk, 1/2 cup vegetable oil, 2 teaspoons vanilla extract, 1 cup boiling water',
      steps:
        'Step 1: Preheat oven to 350 degrees F (175 degrees C). Grease and flour two nine inch round pans. Step 2: In a large bowl, stir together the sugar, flour, cocoa, baking powder, baking soda and salt. Add the eggs, milk, oil and vanilla, mix for 2 minutes on medium speed of mixer. Stir in the boiling water last. Batter will be thin. Pour evenly into the prepared pans. Step 3: Bake 30 to 35 minutes in the preheated oven, until the cake tests done with a toothpick. Cool in the pans for 10 minutes, then remove to a wire rack to cool completely.',
      authorName: 'shirleyo'
    },
    {
      title: 'Caramel Bars',
      description:
        'Yummy oat bars filled with a gooey layer of caramel, chocolate and nuts!',
      image:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F18081.jpg&w=272&h=272&c=sc&poi=face&q=85',
      cooking_duration: 35,
      ingredients:
        '32 individually wrapped caramels, unwrapped, 5 tablespoons heavy cream, 1 cup all-purpose flour, 1 cup rolled oats, 3/4 cup brown sugar, 1/2 teaspoon baking soda, 1/4 teaspoon salt, 3/4 cup butter, melted, 1/2 cup semisweet chocolate chips, 1/2 cup chopped walnuts',
      steps:
        'Step 1: Preheat oven to 350 degrees F (175 degrees C). In a medium saucepan over low heat, melt together the caramels and heavy cream, stirring occasionally until smooth. Step 2: In a medium bowl, stir together the flour, oats, brown sugar, baking soda and salt. Stir in the melted butter until well blended. Press Half of the mixture into the bottom of a 9x13 inch baking pan. Reserve the rest. Step 3: Bake the crust for 8 minutes in the preheated oven. Remove and sprinkle with chocolate chips and walnuts. Pour the caramel mixture over the top and then crumble the remaining crust mixture over everything. Step 4: Return to the oven and bake for an additional 12 minutes, or until the top is lightly toasted. Cut into squares while it is still warm.',
      authorName: 'Jordanna Novak'
    },
    {
      title: 'Sheet Pan Apple Crisp',
      description: 'This one iss great for feeding a crowd.',
      image:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4576318.jpg&w=272&h=272&c=sc&poi=face&q=85',
      cooking_duration: 65,
      ingredients:
        '12 apples, cored and cut into 8 wedges, 3/4 cup brown sugar, 2 teaspoons ground cinnamon, divided, 1 cup all-purpose flour, divided, 1/2 cup cold butter, 1 1/2 cups old-fashioned rolled oats, 1 cup chopped walnuts, 1/3 cup maple syrup, 1 teaspoon pumpkin pie spice, 1 teaspoon vanilla extract, 1/2 teaspoon salt ',
      steps:
        'Step 1: Preheat oven to 350 degrees F (175 degrees C). Grease a rimmed baking sheet. Step 2: Place apples wedges in a bowl. Sprinkle brown sugar and 1 teaspoon cinnamon over the apples and toss. Add 1/2 cup flour and mix well. Place apple mixture on the prepared baking sheet. Step 3: Place the remaining 1/2 cup flour in another bowl. Cut in butter with 2 knives or a pastry blender until it is the size of small peas. Add the remaining 1 teaspoon cinnamon, oats, walnuts, maple syrup, pumpkin pie spice, vanilla extract, and salt. Spoon mixture over the apples. Step 4: Bake in the preheated oven until fruit mixture is bubbling, 45 to 50 minutes.',
      authorName: 'Leslie Kelly'
    },
    {
      title: 'Triple the Ginger Cookies',
      description:
        'These are a real pain in the butt to make, but they are worth it. The best ginger cookies I have ever eaten. ',
      image:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F2743790.jpg&w=272&h=272&c=sc&poi=face&q=85',
      cooking_duration: 150,
      ingredients:
        '3/4 cup butter, 1 cup packed brown sugar, 1 egg, 1/4 cup molasses, 2 1/4 cups all-purpose flour, 2 teaspoons ground ginger, 2 teaspoons baking soda, 1/2 teaspoon salt, 1 1/2 tablespoons minced fresh ginger root, 1/2 cup chopped crystallized ginger',
      steps:
        'Step 1: In a large bowl, cream together the butter and brown sugar until smooth. Beat in the egg and molasses. Combine the flour, ground ginger, baking soda, and salt; stir into the molasses mixture using a wooden spoon. Mix in the fresh and crystallized gingers. Cover, and refrigerate dough for at least 2 hours, or overnight. Step 2: Preheat oven to 350 degrees F (175 degrees C). Shape dough into 1 inch balls, and place about 2 inches apart onto ungreased cookie sheet. Step 3: Bake for 10 minutes in the preheated oven, or until lightly browned. Cool on wire racks.',
      authorName: 'Laria Tabul'
    }

    // {
    //   title: '',
    //   description: '',
    //   image:
    //     '',
    //   cooking_duration: ,
    //   ingredients:
    //     '',
    //   steps:
    //     '',
    //   authorName: ''
    // },
  ]

  await Recipe.insertMany(recipes)
  console.log('Created some recipes!')
}

const run = async () => {
  await main()
  db.close()
}

run()
