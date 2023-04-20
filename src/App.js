import logo from './logo.svg';
import './App.css';
import ExpenseItem from "./component/ExpenseItem";


function App() {
  return (
      <div className="App">
          <div></div>
        <div>
            <ExpenseItem></ExpenseItem>
            <ExpenseItem></ExpenseItem>
        </div>
      </div>
  );
}

export default App;
