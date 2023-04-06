import ListGroup from "./components/ListGroup"
import React, { useState, useEffect } from "react";

function App() {
  let [apiResponse, setApiResponse] = useState("{}")
    
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://19o9wqa834.execute-api.us-west-1.amazonaws.com/',
        {method: 'GET'}
      )
      const recipe = await response.text()
      setApiResponse(recipe)
    }
    fetchData()
  })
  
  function handleSubmit(event: any) {
    event.preventDefault();  
  }

  return <div><ListGroup items={apiResponse}/></div>;
}


export default App;