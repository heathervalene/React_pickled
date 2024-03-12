import { NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav-wrapper">
            <nav>
                <div className="nav-wrapper">
                    <div className="brand-logo left">Pickled</div>
                    <NavLink to="/about" className="nav-item right">About</NavLink>
                    <NavLink to ="/" className="nav-item right">Recipes</NavLink>
                    <NavLink to ="/new"className="nav-item right">Submit your Recipe</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Nav;