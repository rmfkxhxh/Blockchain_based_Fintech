// import {useRef} from "react"
function Goal(props) {
    // let isGoal = useRef(props.isGoal);
    let isGoal = props.isGoal;
    // if(isGoal) {
    //     return <MadeGoal />;
    // }
    
    // return (
    //     <MissGoal />
    //     );
    return (
        <>
            {isGoal ? <MadeGoal/> : <MissGoal/>}
        </> //삼항연산자
    )
}
const MissGoal = () => {
    return <h2>Ronaldo misses the Goal </h2>
}
const MadeGoal = () => {
    return <h2>Fantastic Goal from Son!!!!!!!!!!!!</h2>
}
export default Goal;