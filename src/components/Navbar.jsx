import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to='/'>Sweet Tooth Dessert</Link>
      <Link to='/new'>Add a new Recipes</Link>
    </div>
  )
}
