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
        <h4 className="center-align">Submit a Recipe</h4>
        <form className="col s12 " onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s12 ">
              <input
                type="text"
                placeholder="Recipe Title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            
            </div>
          </div>
  
          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="ingredients"
                placeholder="Enter Ingredients & Measurements"
                className="materialize-textarea"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                required
              ></textarea>
            </div>
          </div>
  
          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="instructions"
                placeholder="Enter Steps to Complete Recipe"
                className="materialize-textarea"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                required
              ></textarea>
            </div>
          </div>
  
          <div className="row">
            <div className="input-field col s12">
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
  
          <div className="row">
            <div className="input-field col s12">
              <button className="btn waves-effect waves-light green lighten-2" type="submit">
                Submit Recipe
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  };
  
  export default AddRecipe;
