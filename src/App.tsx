import ListGroup from "./components/ListGroup"
import React, { useState, useEffect } from "react";
import "./App.css"

function App() {
  const [apiResponse, setApiResponse] = useState("{}")
  const [submitted, setSubmitted] = useState(false)
  const [ingredientList, setIngredientList] = useState<string[]>([]);

  const handleChange = (event: any) => {
    if (event.target.checked) {
      const newIngredients = [...ingredientList, event.target.id]
      setIngredientList(newIngredients);
    } else {
      const index = ingredientList.indexOf(event.target.id);
      if (index > -1) { 
        ingredientList.splice(index, 1); 
      }
    }
  }
  
  function handleSubmit(event: any) {``
    setSubmitted(true)
    fetchData(ingredientList)
    event.preventDefault();  
  }

  async function fetchData(ingredientList: string[]) {
    const response = await fetch(
      "https://19o9wqa834.execute-api.us-west-1.amazonaws.com/?ingredients=" + 
      ingredientList.toString(),
      { method: "GET" }
    );
    const recipe = await response.text();
    setApiResponse(recipe);
  }

  return (<form onSubmit={handleSubmit}>
    <div className="App">
      <header className="App-header">
        <div>
          <label className="ingredient"> eggs</label>
          <input type="checkbox" id="eggs" value="eggs" onChange={handleChange}/>
          <label className="ingredient"> cheese</label>
          <input type="checkbox" id="cheese" value="cheese" onChange={handleChange}/>
          <label className="ingredient"> spinach</label>
          <input type="checkbox" id="spinach" value="spinach" onChange={handleChange}/>
          <label className="ingredient"> garlic powder</label>
          <input type="checkbox" id="garlic_powder" value="garlic powder" onChange={handleChange}/>
          <label className="ingredient"> butter</label>
          <input type="checkbox" id="butter" value="butter" onChange={handleChange}/>
          <label className="ingredient"> beef</label>
          <input type="checkbox" id="beef" value="beef" onChange={handleChange}/>
          <label className="ingredient"> rice</label>
          <input type="checkbox" id="rice" value="rice" onChange={handleChange}/>
          <label className="ingredient"> guacamole</label>
          <input type="checkbox" id="guacamole" value="guacamole" onChange={handleChange}/>
          <label className="ingredient"> pita bread</label>
          <input type="checkbox" id="pita_bread" value="pita bread" onChange={handleChange}/>
          <label className="ingredient"> lemon</label>
          <input type="checkbox" id="lemon" value="lemon" onChange={handleChange}/>

          <input className="ingredient" type="submit" value="Find recipes"/>
        
        </div>
      </header>
    </div>
    <div>{submitted && (<ListGroup items={submitted ? apiResponse: "{}"}/>)}</div>
    </form>)
}

export default App;