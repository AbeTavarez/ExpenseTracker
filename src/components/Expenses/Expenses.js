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

      {items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default Expenses;
