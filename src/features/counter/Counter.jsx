import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './counterSlice';
import { useState } from 'react';

//component rerender when we useDispatch
const Counter = () => {
  // extract the state of a component from the redux store :
  const count = useSelector((state) => state.counter.count);
  //update the state of the component and return a new state.
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <input
        type='text'
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
        onKeyDown={(e) =>
          //here addValue gonna be action.payload in incrementByAmount function
          e.code === 'Enter'
            ? dispatch(incrementByAmount(addValue))
            : console.log(e.code)
        }
      />

      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add Amount
        </button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  );
};
export default Counter;
