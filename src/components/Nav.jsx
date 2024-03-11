import { NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav-wrapper">
            <nav>
                <div className="nav-wrapper">
                    <div className="brand-logo left">Pickled</div>
                    <NavLink to="/about" className="right">About</NavLink>
                    <NavLink to ="/" className="right">Recipes</NavLink>
                    <NavLink to ="/recipes/new"className="right">Submit your Recipe</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Nav;