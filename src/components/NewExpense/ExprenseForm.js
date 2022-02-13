import { useState } from 'react';

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: ''
  });

  const handleChange = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value
      };
    });
  };

  return (
    <form>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" onChange={handleChange} id="title" />
      </div>
      <div>
        <label htmlFor="title">Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          onChange={handleChange}
          id="amount"
        />
      </div>
      <div>
        <label htmlFor="title">Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-01-01"
          onChange={handleChange}
          id="date"
        />
      </div>

      <div>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
