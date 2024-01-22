// import Button from "./components/Button";
// import Alert from "./components/Alert";
// import { useState } from "react";
import ListGroup from "./components/ListGroup/ListGroup";

function App() {
  // const [alertVisible, setAlertVisible] = useState(false)
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const heading = "Cities";

  const handleSelectItem = (item: string) => {
    console.log(item)
  }


  return (
    <div>
      <ListGroup items={items} heading={heading} onSelectItem={handleSelectItem}></ListGroup>
      {/* { alertVisible && <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>}
      <Button color="primary" onClick={() => setAlertVisible(true)}>Press Me</Button> */}
    </div>
  );
}

export default App;
