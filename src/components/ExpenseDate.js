const ExpenseDate = props => {
  const date= props.date.toLocaleString('en-US', {month: 'long'});
  const day = props.date.toLocaleString('en-US', {day: '2-digit'});
  const year = props.date.getFullYear();

  return(
     <div style={{display: 'flex'}}>
         <div>{date}/</div>
         <div>{day}/</div>
         <div>{year}</div>
      </div>
  )
}

export default ExpenseDate