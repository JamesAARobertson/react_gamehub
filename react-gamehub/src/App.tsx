import ListGroup from "./components/ListGroup";

function App() {
  let items = ["London", "New York", "Paris", "Tokyo", "San Francisco"];

  return (
    <div>
      <ListGroup items={items} heading={"Cities"}/>
    </div>
  );
}

export default App;
