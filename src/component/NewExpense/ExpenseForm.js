import './ExpenseForm.css';
import {useState} from "react";

const ExpenseForm = () => {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })
    console.log(userInput)

    const titleChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        })
    }

    const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        })
    }

    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        })
    }

    return(
        <div class="App">
            <div class="new-expense">
                <form>
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label>Title</label>
                            <input type="text" onChange={titleChangeHandler} />
                        </div>
                        <div className="new-expense__control">
                            <label>Amount</label>
                            <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                        </div>
                        <div className="new-expense__control">
                            <label>Date</label>
                            <input type="date" min="2023-01-18" max="2025-12-31" onChange={dateChangeHandler}/>
                        </div>
                    </div>
                    <div className="new-expense__actions">
                        <button type="submit">Add Expense</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ExpenseForm