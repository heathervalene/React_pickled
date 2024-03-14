
import { Link, useParams} from "react-router-dom";


const Recipe = ({ recipes }) => {

  const { index } = useParams();
  const recipeIndex = Number(index);
  const selectedRecipe = recipes[recipeIndex];

  if (!selectedRecipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className='container'>
      <div className='card recipe-card green lighten-2'>
        <div className="card-content  recipe-content">
          <span className="card-title">{selectedRecipe.title}</span>
          <div className="card-image">
            <img src={selectedRecipe.imageUrl} className="responsive-img centered-image" alt={selectedRecipe.title} />
          </div>
          <table className="striped">
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measurement</th>
              </tr>
            </thead>
            <tbody>
              {selectedRecipe.ingredients.map((ingredient, idx) => (
                <tr key={idx}>
                  <td>{ingredient.name}</td>
                  <td>{ingredient.measurements}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <ol>
            {selectedRecipe.instructions.map((instruction, idx) => (
              <li key={idx}>
                {instruction.step}: {instruction.text}
              </li>
            ))}
          </ol>
          <Link to="/">Back to Recipe List</Link>
        </div>
      </div>
    </div>
  );
};

export default Recipe;