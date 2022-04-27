import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [displayForm, setDisplayForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const displayFormStateHandler = () => {
    setDisplayForm((prevState) => !prevState);
  };

  return (
    <div className="new-expense">
      {!displayForm && (
        <button onClick={displayFormStateHandler}>Add New Expense</button>
      )}

      {displayForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={displayFormStateHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
