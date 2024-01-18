import ListGroup from "./components/ListGroup";

function App() {
  let items = ["London", "New York", "Paris", "Tokyo", "San Francisco"];

const handleSelectItem = (item: string) =>{
console.log(item)
}

  return (
    <div>
      <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}/>
    </div>
  );
}

export default App;
