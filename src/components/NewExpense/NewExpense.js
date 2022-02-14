import ExpensedForm from './ExprenseForm';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpensedata) => {
    const expenseData = {
      ...enteredExpensedata,
      id: Math.random().toString()
    };
    props.onAddNewExpense(expenseData);
  };
  return (
    <div>
      <ExpensedForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
