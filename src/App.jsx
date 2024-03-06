
import './App.css'
import Recipes from './components/Recipe'

function App() {

  const recipes = [
    { 
      title: 'Picked Red Onions',
      ingredients: [
       { name: 'Red onion' , measurements: '1 medium to large red onion'},
       { name: 'Garlic', measurements: '2-3 clove who garlic cloves'},
       {name: 'Whole black pepper', measurements: '5-6 whole black peppers'},
       {name: 'White vinegar', measurements: '1 cup'},
       {name: 'Water', measurements: '1 cup'},
       {name: 'Granulated white sugar', measurements: '1/3 cup'},
      ],
      instructions: [
        {
          step: '1',
          text: 'Slice the red onion into this strips (if you have a mandolin it makes it super easy!)'
        },
        {
          step: '2',
          text: 'Boil the water, vinegar, sugar until the sugar is dissolved'
        },
        { 
          step: '3',
          text: 'Stuff the red onion, garlic and pepper into the gar and pour in the liquid mixture'
        },
        {
          step: '4',
          text: 'Refridgerate for a few hours and enjoy!'
        }
      ]
    },
    { 
      title: 'Classic Dill Pickles',
      ingredients: [
       { name: 'Kirby or Persion pickes' , measurements: '3-5 depending on size'},
       { name: 'Garlic', measurements: '5-6 garlic cloves, halved'},
       {name: 'Fresh Dill', measurements: '10-15 sprigs'},
       {name: 'Red pepper flakes', measurements: '1/4 teaspoon'},
       {name: 'Coriander seeds', measurements: '2 tablespoons'},
       {name: 'Mustard seeds', measurements: '1 tablespoon'},
       {name: 'Kosher salt', measurements: '1 tablespoon'},
       {name: 'White vinegar', measurements: '1 cup'},
       {name: 'Water', measurements: '2 cups'},
       {name: 'Granulated white sugar', measurements: '3 tablespoons'},
      ],
      instructions: [
        {
          step: '1',
          text: 'Slice the cucumbers into spears or slices'
        },
        {
          step: '2',
          text: 'Boil the vinegar, sugar and salt until dissolved, take off heat and stir in 2 cups of cold water'
        },
        { 
          step: '3',
          text: 'Add all ingredients to the jars'
        },
        {
          step: '4',
          text: 'Refridgerate for 24 hours and enjoy!'
        }
      ]
    }
  ]

 

  return (

      <div>
        <h1 className='header'>I'm Pickled!</h1>
        <Recipes recipes={recipes} />
        </div>
      
  )
}

export default App
