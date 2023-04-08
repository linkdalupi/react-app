import ListGroup from "./components/ListGroup"
import React, { useState, useEffect } from "react";

function App() {
  let [apiResponse, setApiResponse] = useState("{}")
  let [submitted, setSubmitted] = useState(false)
    
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
    fetchData("tomato")
    event.preventDefault();  
  }

  return (<form onSubmit={handleSubmit}>
    <div className="App">
      <header className="App-header">
        <div>
          <label> rice</label>
          <input type="checkbox" id="ingredient2" name="ingredient2" value="tomato"/>
          <label> milk</label>
          <input type="checkbox" id="ingredient3" name="ingredient3" value="flour"/>
          <input type="submit" value="Submit"/>
        </div>
      </header>
    </div>
    <div><ListGroup items={submitted ? apiResponse: "{}"}/></div>
    </form>)
}

export default App;