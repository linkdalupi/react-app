import { MouseEvent } from "react"

interface MyProps {
    items: string,
}
function ListGroup(props: MyProps) {
    
  let selectedIndex = 0
  const handleClick = (event: MouseEvent) => console.log(event)
  let recipes = JSON.parse(props.items)
   
  return (
    <div>
        <h1>Recipes list</h1>
        {recipes.length === 0 && <p>No item found</p>}
        <ul className="list-group">    
          {recipes.length > 0 && recipes.map((item:any, index: any) => {
            return ( 
              <li className={'list-group-item'}
                  key={index} 
                  onClick={handleClick}>
                  {item.recipe} 
              </li>
          )})}
        </ul>
    </div>
  );
}

export default ListGroup;
