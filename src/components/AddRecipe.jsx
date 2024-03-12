import { useNavigate } from "react-router-dom";
import { useState } from "react";
import emailjs from "emailjs-com";



emailjs.init('JaibVNv_h8LR8WUc4')

const AddRecipe = () => {
    const navigate = useNavigate();
  
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [email, setEmail] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      emailjs
        .send(
          'service_c3hfd64',
          'template_2uldv6p',
          {
            title,
            ingredients,
            instructions,
            from_email: email,
          },
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            navigate("/");
          },
          (err) => {
            console.log("FAILED...", err);
          }
        );
    };
  
    return (
      <div className="container">
        <h4>Submit a Recipe</h4>
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <label htmlFor="title">Recipe Title</label>
            </div>
          </div>
  
          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="ingredients"
                className="materialize-textarea"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                required
              ></textarea>
              <label htmlFor="ingredients">Ingredients</label>
            </div>
          </div>
  
          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="instructions"
                className="materialize-textarea"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                required
              ></textarea>
              <label htmlFor="instructions">Steps to Complete Recipe</label>
            </div>
          </div>
  
          <div className="row">
            <div className="input-field col s12">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="email">Your Email</label>
            </div>
          </div>
  
          <div className="row">
            <div className="input-field col s12">
              <button className="btn waves-effect waves-light" type="submit">
                Submit Recipe
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  };
  
  export default AddRecipe;
