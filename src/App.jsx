
import './App.css'
import { useState } from 'react';
import Recipe from './components/Recipe'
import RecipeList from './components/RecipeList'
import {Routes, Route} from "react-router-dom";
import recipesArray from '../data/recipes'
import About from './components/About'
import Nav from './components/Nav';
import AddRecipe from './components/AddRecipe';


function App() {

const [recipes, setRecipes] = useState(recipesArray)


  return (

      <div>
        <header>
          <Nav />
        </header>
        <main>
        <h1 className='header'>Pickled</h1>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/new' element={<AddRecipe />} />
        <Route path='/' element={<RecipeList recipes={recipes} />} />
        <Route path='/recipes/:index' element={<Recipe recipes={recipes} />}/>
        </Routes>
        </main>
        </div>
      
  )
}

export default App
