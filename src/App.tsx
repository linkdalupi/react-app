import Select from 'react-select'

import ListGroup from "./components/ListGroup"
import React, { useState, useEffect } from "react";
import "./App.css"

function App() {
  const [apiResponse, setApiResponse] = useState("{}")
  const [submitted, setSubmitted] = useState(false)
  const [ingredientList, setIngredientList] = useState<string[]>([]);
  

  const handleSelectChange = (event: any) => {
    setIngredientList(event.map((selection: any) => {return selection.value}))
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
    console.log('/public/' + JSON.parse(apiResponse)[0].recipe.split('-')[0].trim() + '.jpg')
  }

  const options = [
    { value: 'eggs', label: 'Eggs' },
    { value: 'cheese', label: 'Cheese' },
    { value: 'spinach', label: 'Spinach' },
    { value: 'garlic_powder', label: 'Garlic Powder' },
    { value: 'butter', label: 'Butter' },
    { value: 'beef', label: 'Beef' },
    { value: 'rice', label: 'Rice' },
    { value: 'guacamole', label: 'Guacamole' },
    { value: 'pita_bread', label: 'Pita Bread' },
    { value: 'lemon', label: 'Lemon' },
    { value: 'peppers', label: 'Peppers' },
    { value: 'pork', label: 'Pork' },
    { value: 'tomatoh_sauce', label: 'Tomatoh Sauce' },
    { value: 'noodles', label: 'Noodles' },
    { value: 'carrot', label: 'Carrot' },
    { value: 'onion', label: 'Onion' },
    { value: 'bread_crumbs', label: 'Bread crumbs' },
    { value: 'olive_oil', label: 'Olive Oil' },
    { value: 'flour', label: 'Flour' },
    { value: 'potatoh', label: 'Potatoh' },
    { value: 'paprika', label: 'Paprika' },
    { value: 'pizza_dough', label: 'Pizza Dough' },
    { value: 'yeast', label: 'Yeast' },
    { value: 'milk', label: 'Milk'},
    { value: 'chicken', label: 'Chicken'},
  ]
    
  return (<form onSubmit={handleSubmit}>
    <div className="App">
      <header className="App-header">
        <Select options={options} isMulti={true} onChange={handleSelectChange}/>
        <div>
          <input className="ingredient" type="submit" value="Find recipes"/>
        </div>
      </header>
    </div>
    <div>{submitted && (<ListGroup items={submitted ? apiResponse: "{}"}/>)}</div>
    <div>{JSON.parse(apiResponse).length > 0 && <img src={'/public/' + JSON.parse(apiResponse)[0].recipe.split('-')[0].trim() + '.jpg'}/>}</div>
   
    </form>)
}

export default App;