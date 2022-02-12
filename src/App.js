import ExpenseItem from './components/ExpenseItem'

function App() {
  const expenses = [
    {id: 1, title: 'Car insurance', ammount: 200, date: new Date()},
    {id: 2, title: 'Cellphone', ammount: 60, date: new Date()},
    {id: 3, title: 'Internet', ammount: 80, date: new Date()}
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
    </div>
  );
}

export default App;
