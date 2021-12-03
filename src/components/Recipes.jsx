import { Link } from "react-router-dom"

export default function Recipes(props) {
  return (
    <div className="all_recipes">
      <h1>Welcome to Sweet Tooth Dessert! Below are our favorite desserts we wanted to share with you.
        Click on the name to view the ingredients and steps. If you notice a mistake, you can click on
        the "Edit" button to correct. Feel free to add your own recipe above! </h1>
      {
        props.recipes.map(recipe => (
          <Link key={recipe.id} to={`/recipes/${recipe.id}`} >{recipe.fields.title }</Link>
        ))
      }
    </div>
  )
}
