import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import expensesData from './data';
import { useState } from 'react';

function App() {
  const [expenses, setExpense] = useState(expensesData);

  const addExpense = (expense) => {
    setExpense((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense onAddNewExpense={addExpense} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
