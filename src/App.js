import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL, config } from "./services"
import { Route, Routes } from 'react-router-dom'
import Recipes from './components/Recipes';
import Navbar from './components/Navbar';
import Recipe from './components/Recipe';
import Form from './components/Form';


function App() {
  const [recipes, setRecipes] = useState([])
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const getRecipes = async () => {
      const response = await axios.get(BASE_URL, config)
      setRecipes(response.data.records)
      console.log(response.data.records)
    }
    getRecipes()
  }, [toggle])

  return (
    <div className="App">
      <Navbar />
      <Routes >
        <Route className='all_routes'
          path='/'
          element={<Recipes recipes={recipes} />} />
        <Route path='/new' element={<Form setToggle={setToggle} />} />
        <Route path='/recipes/:id' element={<Recipe recipes={recipes} />} />
        <Route path='/edit/:id' element={<Form setToggle={setToggle} recipes={recipes} />} />
      </Routes>
    </div>
  );
}

export default App;
