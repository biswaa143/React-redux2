import { useSelector, useDispatch } from "react-redux/es/exports";
import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    // dispatch({ type: "increment" });
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    // dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    // dispatch({ type: "increase", amount: 2 });
    dispatch(counterActions.increase(2));
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: "toggle" });
    dispatch(counterActions.togglecounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase by 2</button>
        <button onClick={incrementHandler}>Incement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
