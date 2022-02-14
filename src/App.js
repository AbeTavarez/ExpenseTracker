import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  const expenses = [
    { id: 1, title: 'Car insurance', ammount: 200, date: new Date() },
    { id: 2, title: 'Cellphone', ammount: 60, date: new Date() },
    { id: 3, title: 'Internet', ammount: 80, date: new Date() }
  ];

  const addExpense = (expense) => {
    console.log('from app.js');
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddNewExpense={addExpense} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
