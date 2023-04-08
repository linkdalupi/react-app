import ListGroup from "./components/ListGroup"
import React, { useState, useEffect } from "react";

function App() {
  const [apiResponse, setApiResponse] = useState("{}")
  const [submitted, setSubmitted] = useState(false)
  const [ingredient, setIngredient] = useState("");

  const handleChange = (event: any) => {
    setIngredient(event.target.id);
  }

  async function fetchData(ingredient: string) {
    const response = await fetch(
      "https://19o9wqa834.execute-api.us-west-1.amazonaws.com/?ingredient="+ingredient,
      { method: "GET" }
    );
    const recipe = await response.text();
    setApiResponse(recipe);
  }
  
  function handleSubmit(event: any) {
    setSubmitted(true)
    fetchData(ingredient)
    event.preventDefault();  
  }

  return (<form onSubmit={handleSubmit}>
    <div className="App">
      <header className="App-header">
        <div>
          <label> rice</label>
          <input type="checkbox" id="tomato" name="tomato" value="tomato" onChange={handleChange}/>
          <label> milk</label>
          <input type="checkbox" id="flour" name="flour" value="flour" onChange={handleChange}/>
          <input type="submit" value="Submit"/>
        </div>
      </header>
    </div>
    <div><ListGroup items={submitted ? apiResponse: "{}"}/></div>
    </form>)
}

export default App;