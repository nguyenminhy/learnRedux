import {  useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/slines/counterSlice";
function ExampleCounter() {
    const dispatch = useDispatch()
    const count = useSelector(state => state.counter.value)
    return (
    <div>
        <h3>ExampleCounter</h3>

        <div>
            <button onClick={()=> dispatch(increment())}>Increase</button>
            <button onClick={()=> dispatch(decrement())}>Decrease</button>
        </div>
        <div>Count = {count}</div>
    </div>
    )
    
}

export default ExampleCounter;