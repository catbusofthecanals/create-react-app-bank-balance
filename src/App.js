//importing the action creators from counterSlice.js
import {
  depositByAmount,
  withdrawByAmount,
  addInterest,
  addCharges,
} from "./features/counter/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import "./App.css";

function App() {
  //value of balance that can be manipulated by action creators
  const balance = useSelector((state) => state.counter.value);
  //initiaing the dispatch variable
  const dispatch = useDispatch();
  //function to dispatch depositbyAmount action on user input value
  const handleDeposit = (e) => {
    e.preventDefault();
    dispatch(depositByAmount(Number(userInput)));
    setUserInput(0);
  };
  //function to dispatch withdrawbyAmount action on user input value
  const handleWithdrawel = (e) => {
    e.preventDefault();
    dispatch(withdrawByAmount(Number(userInput)));
    setUserInput(0);
  };
  //function to dispatch addInterest action on user input value,
  const handleAddInterest = (e) => {
    e.preventDefault();
    dispatch(addInterest(balance));
    setUserInput(0);
  };
  //function to dispatch addCharges action on user input value
  const handleAddCharges = (e) => {
    e.preventDefault();
    dispatch(addCharges(Math.round(balance)));
    setUserInput(0);
  };

  const [userInput, setUserInput] = useState(0);

  return (
    <div>
      <div className="App">
        <h2>Balance: $</h2>
        <h1>{balance}</h1>
      </div>

      <form className="Form">
        <label>
          <input
            type="text"
            name="value"
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
          />
        </label>
        <br />
        {/*when clicked button will add user amount to current balance*/}
        <button className="Buttons" onClick={handleDeposit}>
          Deposit
        </button>
        <br />
        {/*when clicked button will subtract user amount from current balance*/}
        <button className="Buttons" onClick={handleWithdrawel}>
          Withdraw
        </button>
        <br />
        {/*when clicked button will multiply current balance by 5% */}
        <button className="Buttons" onClick={handleAddInterest}>
          Add Interest
        </button>
        <br />
        {/*when clicked button , will divide current balance by 15% */}
        <button className="Buttons" onClick={handleAddCharges}>
          Charges
        </button>
      </form>
    </div>
  );
}

export default App;
