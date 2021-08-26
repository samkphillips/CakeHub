import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/" className="navlinks">
          Home
        </NavLink>
        <NavLink to="/recipes" className="navlinks">
          Recipes
        </NavLink>
        <NavLink to="/submitrecipes" className="navlinks">
          Submit Recipes
        </NavLink>
      </nav>
    </header>
  )
}
