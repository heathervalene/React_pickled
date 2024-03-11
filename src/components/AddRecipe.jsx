import { useNavigate } from "react-router-dom";
import { useState } from "react";
import emailjs from "emailjs-com";

const AddRecipe = () => {

const navigate = useNavigate();

const [title, setTitle] = useState("");
const [ingredients, setIngredients] = useState("");
const [instructions, setInstructions] = useState("");
const [email, setEmail] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();

 emailjs.send(
    'service_c3hfd64',
    'template_2uldv6p',
    {
      title: title,
      ingredients: ingredients,
      instructions: instructions,
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
    },
  )
 


return (
 <div className="container">
      <h4>Submit a Recipe</h4>
      <form className="col s12" onSubmit={handleSubmit}>
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
        <div className="input-field col s12">
          <textarea
            id="steps"
            className="materialize-textarea"
            value={steps}
            onChange={(e) => setInstructions(e.target.value)}
            required
          ></textarea>
          <label htmlFor="steps">Steps to Complete Recipe</label>
        </div>

        <div className="input-field col s12">
          <button className="btn waves-effect waves-light" type="submit">
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};
}

export default AddRecipe;
