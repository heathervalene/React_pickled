import { NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav-wrapper">
            <nav>
                <div className="nav-wrapper">
                    <img src="https://i.imgur.com/QHU4WFM.png" className="brand-logo left" alt="Pickled Logo" />
                    <NavLink to="/about" className="nav-item right">About</NavLink>
                    <NavLink to ="/" className="nav-item right">Recipes</NavLink>
                    <NavLink to ="/new"className="nav-item right">Submit your Recipe</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Nav;