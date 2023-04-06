import ListGroup from "./components/ListGroup"

function App() {
  let items: string[] = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris',
  ]

  return <div><ListGroup items={items}/></div>;
}


export default App;