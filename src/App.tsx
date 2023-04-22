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
          <label className="ingredient">eggs</label>
          <input type="checkbox" id="eggs" onChange={handleChange}/>
          <label className="ingredient">cheese</label>
          <input type="checkbox" id="cheese" onChange={handleChange}/>
          <label className="ingredient">spinach</label>
          <input type="checkbox" id="spinach" onChange={handleChange}/>
          <label className="ingredient">garlic powder</label>
          <input type="checkbox" id="garlic_powder" onChange={handleChange}/>
          <label className="ingredient">butter</label>
          <input type="checkbox" id="butter" onChange={handleChange}/>
          <label className="ingredient">beef</label>
          <input type="checkbox" id="beef" onChange={handleChange}/>
          <label className="ingredient">rice</label>
          <input type="checkbox" id="rice" onChange={handleChange}/>
          <label className="ingredient">guacamole</label>
          <input type="checkbox" id="guacamole" onChange={handleChange}/>
          <label className="ingredient">pita bread</label>
          <input type="checkbox" id="pita_bread" onChange={handleChange}/>
          <label className="ingredient">lemon</label>
          <input type="checkbox" id="lemon" onChange={handleChange}/>
          <label className="ingredient">peppers</label>
          <input type="checkbox" id="peppers" onChange={handleChange}/>
          <label className="ingredient">pork</label>
          <input type="checkbox" id="pork" onChange={handleChange}/>
          <label className="ingredient">tomatoh sauce</label>
          <input type="checkbox" id="tomatoh_sauce" onChange={handleChange}/>
          <label className="ingredient">noodles</label>
          <input type="checkbox" id="noodles" onChange={handleChange}/>
          <label className="ingredient">chicken</label>
          <input type="checkbox" id="chicken" onChange={handleChange}/>
          <label className="ingredient">carrot</label>
          <input type="checkbox" id="carrot" onChange={handleChange}/>
          <label className="ingredient">onion</label>
          <input type="checkbox" id="onion" onChange={handleChange}/>
          <label className="ingredient">bread crumbs</label>
          <input type="checkbox" id="bread_crumbs" onChange={handleChange}/>
          <label className="ingredient">olive oil</label>
          <input type="checkbox" id="olive_oil" onChange={handleChange}/>
          <label className="ingredient">flour</label>
          <input type="checkbox" id="flour" onChange={handleChange}/>
          <label className="ingredient">milk</label>
          <input type="checkbox" id="milk" onChange={handleChange}/>
          <label className="ingredient">potatoh</label>
          <input type="checkbox" id="potatoh" onChange={handleChange}/>
          <label className="ingredient">paprika</label>
          <input type="checkbox" id="paprika" onChange={handleChange}/>
          <label className="ingredient">pizza dough</label>
          <input type="checkbox" id="pizza_dough" onChange={handleChange}/>
          <label className="ingredient">yeast</label>
          <input type="checkbox" id="yeast" onChange={handleChange}/>



          <input className="ingredient" type="submit" value="Find recipes"/>
        
        </div>
      </header>
    </div>
    <div>{submitted && (<ListGroup items={submitted ? apiResponse: "{}"}/>)}</div>
    </form>)
}

export default App;