import Expenses from './components/Expenses'

function App() {
  const expenses = [
    {id: 1, title: 'Car insurance', ammount: 200, date: new Date()},
    {id: 2, title: 'Cellphone', ammount: 60, date: new Date()},
    {id: 3, title: 'Internet', ammount: 80, date: new Date()}
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
