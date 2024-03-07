


const Recipes = ({ recipes }) => {
    return (
      <div className='container'>
        {recipes.map((recipe, index) => (
          <div key={index} className='card'>
            <div className="card-content">
            <span className="card-title">{recipe.title}</span>
            <div className="card-image">
              <img src={recipe.imageUrl} className="responsive-img" alt={recipe.title} />
            </div>
            <table className="striped">
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measurement</th>
              </tr>
            </thead>
            <tbody>
              {recipe.ingredients.map((ingredient, idx) => (
                <tr key={idx}>
                  <td>{ingredient.name}</td>
                  <td>{ingredient.measurements}</td>
                </tr>
              ))}
            </tbody>
          </table>
            <ol>
              {recipe.instructions.map((instruction, idx) => (
                <li key={idx}>
                  {instruction.step}: {instruction.text}
                </li>
              ))}
            </ol>
          </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Recipes;