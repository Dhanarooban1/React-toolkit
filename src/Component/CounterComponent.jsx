import React from 'react';
import { minus,plus } from  '../Redux/slices/Counter'
import { useDispatch } from "react-redux";
import {useSelector} from "react-redux";

function CounterComponent() {
const dispatch = useDispatch();
const count = useSelector((store)=>store.countNumber)


  const increment = () => {
    dispatch(plus(1))
  };

  const decrement = () => {
    dispatch(minus(1))
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
}

export default CounterComponent;


