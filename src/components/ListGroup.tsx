import { MouseEvent } from "react"

interface MyProps {
    items: string[],
}
function ListGroup(props: MyProps) {
    
  let selectedIndex = 0
  const handleClick = (event: MouseEvent) => console.log(event)

  return (
    <>
        <h1>Recipes list</h1>
        {props.items.length === 0 && <p>No item found</p>}
        <ul className="list-group">    
          {props.items.map((item:any, index: any) => (    
            <li className={ selectedIndex === index ? 'list-group-item' : 'list-group-item'}
                key={item} 
                onClick={handleClick}>

                {item} 
            </li>
        ))}
        </ul>
    </>
  );
}

export default ListGroup;
