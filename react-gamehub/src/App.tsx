import { useState } from "react";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [person, setPerson]= useState({
    firstName: '',
    lastName: ''
  })
  const [loading, setLoading] = useState(false);

  return (
  <div>
  </div>
)}

export default App;
