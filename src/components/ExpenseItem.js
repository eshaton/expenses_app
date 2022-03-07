import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props)
/*u ovu funkciju prosljeduju se properti iz skripte App.js, ovi ispod, react zna da se traze 3 vrijednosti iako
u nazivu funkcije trazimo samo jedan argument. atribut props vraca key:value vrijednosti
<ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>*/
{
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount} Kn</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
