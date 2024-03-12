import { Link} from "react-router-dom";

const RecipeList = ({ recipes }) => {
    return (
      <div className='container recipe-container'>
        {recipes.map((recipe, index) => (
          <div key={index} className='card recipe-card green lighten-2'>
            <div className="card-content recipe-content">
              <span className="card-title">{recipe.title}</span>
              <Link to={`/recipes/${index}`}>
              <div className="card-image">
                <img src={recipe.imageUrl} className="responsive-img centered-image" alt={recipe.title} />
              </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default RecipeList;