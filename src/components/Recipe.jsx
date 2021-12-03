import { useEffect, useState } from 'react'
import { useParams, Link} from 'react-router-dom'

export default function Recipe(props) {
  const [recipe, setRecipe] = useState({})
  const params = useParams()

  useEffect(() => {
    const foundRecipe = props.recipes.find(recipe => {
      return recipe.id === params.id
    })
    setRecipe(foundRecipe)
  }, [params.id, props.recipe])


  return (
    <div className="one_recipe">
      {recipe && recipe.fields &&
        <>
          <h2>{recipe.fields.title}</h2>
          <h4>Ingredients: {recipe.fields.ingredients}</h4>
        <h4>Steps: {recipe.fields.steps}</h4>
        <h4><img src={recipe.fields.image} alt="delicious" width="300px" /></h4>
        <Link to={`/edit/${recipe.id}`}>Edit</Link>
        </>
      }
      
    </div>
  )
}
