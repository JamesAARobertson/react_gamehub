function ListGroup() {
  let items = ["London", "New York", "Paris", "Tokyo", "San Francisco"];
  items = [];



  return (
    <>
      <h1>List</h1>
      { items.length === 0 && <p>No item found.</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
