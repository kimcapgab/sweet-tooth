import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { postRecipe, putRecipe } from '../services'

export default function Form(props) {
  const [title, setTitle] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [steps, setSteps] = useState('')
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    if (props.recipes) {
      const foundRecipe = props.recipes.find(recipe => {
        return recipe.id === params.id
      })
      if (foundRecipe) {
        setTitle(foundRecipe.fields.title)
        setIngredients(foundRecipe.fields.ingredients)
        setSteps(foundRecipe.fields.steps)
      }
    }
  }, [params.id, props.recipe])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newRecipe = {
      title,
      ingredients,
      steps,
    }
    if (props.recipes) {
      const response = await putRecipe(newRecipe, params.id)
      props.setToggle(prevToggle => !prevToggle)
      if (response) {
        navigate(`/recipes/${params.id}`)
      }
    } else {
      const response = await postRecipe(newRecipe)
      props.setToggle(prevToggle => !prevToggle)
      if (response) {
        navigate('/')
      }
    }
  }
    

  return (
    <div className="formedit">
    <form onSubmit={handleSubmit}>
      <label>Title </label> <br />
      <input
        type="text"
        value={title}
        name="title"
        onChange={(e) => setTitle(e.target.value)}
      /> <br />
      <label>Ingredients </label> <br />
      <input
        type="text"
        value={ingredients}
        name="ingredients"
        onChange={(e) => setIngredients(e.target.value)}
      /> <br />
      <label>Steps </label> <br />
      <input
        type="text"
        value={steps}
        name="steps"
        onChange={(e) => setSteps(e.target.value)}
      /> <br />
      <button>Submit</button>
      </form>
      </div>
  )
}
