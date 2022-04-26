import { useEffect, useRef, useState } from "react";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const updateCount = useRef(0);
  const [enabled, setEnabled] = useState(true);

  console.log(updateCount.current);
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  useEffect(() => {
    updateCount.current += 1;
  }, [enabled]);
  useEffect(() => {
    updateCount.current += 1;
  }, [updateCount.current]);

  return (
    <div>
      <h2 onClick={() => setEnabled((current) => !current)}>
        Let's get started!
      </h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
