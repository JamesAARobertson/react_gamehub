import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 1.5, category: "Groceries" },
    { id: 2, description: "Brain", amount: 150, category: "Utility" },
    { id: 3, description: "Witches", amount: 20, category: "Occult" },
    { id: 4, description: "Dark Souls 2", amount: 50, category: "Recreation" },
  ]);
  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))}
      ></ExpenseList>
    </div>
  );
}

export default App;
