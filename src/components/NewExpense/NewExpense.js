import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    // console.log(expenseData);
    props.onAddExpense(expenseData)
    setIsEditing(false);
  }

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  // const stopEditingHandler = (isEdit) => {
  //   setIsEditing(!isEdit)
  // }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }


  return (
    <div className="new-expense">
      {isEditing || <button onClick={startEditingHandler}>Add Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} isEdit={isEditing} onCancel={stopEditingHandler}></ExpenseForm>}
    </div>
  );
}

export default NewExpense;