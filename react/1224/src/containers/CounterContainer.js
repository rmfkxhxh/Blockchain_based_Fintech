import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease, setDiff } from "../modules/counter";

function CounterContainer() {
    // useSelector는 redux store에 state 조회하는 hook
    // state의 값은 store.getState() 함수를 호출 했을때 나타나는 결과물과 동일
    const { number, diff } = useSelector((state) => ({
        number: state.counter.number,
        diff: state.counter.diff
    }));

    //useDispatch는 redux store의 dispatch 를 함수에서 사용 할 수 있게 해주는 hook
    const dispatch = useDispatch();

    //each action dispatch
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = (diff) => dispatch(setDiff(diff)); //diff 안넣어줘도 되는지?

    return (
        <Counter 
            //state와
            number={number}
            diff={diff}
            //action을 dispatch하는 function들을 props로 넣어준다.
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    );
}
export default CounterContainer;