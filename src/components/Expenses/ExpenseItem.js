import ExpenseDate from './ExpenseDate';
import Card from '../layout/Card';
import '../../index.css';
import { useState } from 'react';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const handleClick = () => setTitle('updated');

  return (
    <Card className="card">
      <h1>Expense</h1>
      <h2>{title}</h2>
      <h3>{props.amount}</h3>
      <ExpenseDate date={props.date} />
      <button onClick={handleClick}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
