import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

const Expenses = ({ items }) => {
  const [selectedYear, setSelectedYear] = useState('2020');
  console.log(selectedYear);
  const handleFilterChange = (selectedYear) => setSelectedYear(selectedYear);

  return (
    <div>
      <ExpensesFilter
        selected={selectedYear}
        setSelectedYear={handleFilterChange}
      />
      <ExpenseItem
        title={items[0].title}
        amount={items[0].amount}
        date={items[0].date}
      />
      <ExpenseItem
        title={items[1].title}
        amount={items[1].amount}
        date={items[1].date}
      />
      <ExpenseItem
        title={items[2].title}
        amount={items[2].amount}
        date={items[2].date}
      />
    </div>
  );
};

export default Expenses;
