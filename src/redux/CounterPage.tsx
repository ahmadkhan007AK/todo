// CounterPage.tsx

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";
import { RootState } from "./types"; // Import RootState interface

const CounterPage = () => {
  const count = useSelector((state: RootState) => state.counter.count); // Annotate state with RootState
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default CounterPage;
