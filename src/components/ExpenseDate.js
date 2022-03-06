
function ExpenseDate(props)
{
    const month = props.date.toLocaleString('hr-HR', {month: 'long'});
    const year = props.date.toLocaleString('hr-HR', {year: 'numeric'});
    const day = props.date.toLocaleString('hr-HR', {day: 'numeric'});

    return
    (
        <div>
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
        </div>
    );
}

export default ExpenseDate;