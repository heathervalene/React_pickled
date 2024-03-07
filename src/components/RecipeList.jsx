import { Link} from "react-router-dom";

const RecipeList = ({ recipes }) => {
    return (
      <div className='container recipe-container'>
        {recipes.map((recipe, index) => (
          <div key={index} className='card recipe-card green lighten-4'>
            <div className="card-content recipe-content">
              <span className="card-title">{recipe.title}</span>
              <div className="card-image">
                <img src={recipe.imageUrl} className="responsive-img centered-image" alt={recipe.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default RecipeList;