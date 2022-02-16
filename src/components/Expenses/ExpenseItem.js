import ExpenseDate from './ExpenseDate';
import Card from '../layout/Card';
import '../../index.css';

const ExpenseItem = (props) => {
  return (
    <Card className="card">
      <h2>{props.title}</h2>
      <h3>{props.amount}</h3>
      <ExpenseDate date={props.date} />
    </Card>
  );
};

export default ExpenseItem;
