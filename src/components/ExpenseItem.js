
const ExpenseItem = ({title, amount, date}) => {

  return (
    <div>
      <h1>Expense</h1>
      <h2>{title}</h2>
      <h3>{amount}</h3>
      <h4>{date.toLocaleString('en-US', {month: 'long'})}</h4>
    </div>
  )
};

export default ExpenseItem;