import React from 'react'
import Expenses from "./components/Expenses/Expenses";

// import Ex from './components/ExpenseItem';

// import { ExpenseItem as Ex } from './components/ExpenseItem'

// import * as All from './components/ExpenseItem';
// <All.ExpenseItem></All.ExpenseItem>

// const Ex = All.ExpenseItem;


const App = () => {
  // const para = document.createElement('p');
  // para.textContent = 'This is also visible2';
  // document.getElementById('root').append(para)
  // 

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // return React.createElement('div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}></Expenses>
      {/* <ExpenseItem expense={expenses[0]}></ExpenseItem>
      <ExpenseItem expense={expenses[1]}></ExpenseItem>
      <ExpenseItem expense={expenses[2]}></ExpenseItem>
      <ExpenseItem expense={expenses[3]}></ExpenseItem> */}
    </div>
  );
}

export default App;
