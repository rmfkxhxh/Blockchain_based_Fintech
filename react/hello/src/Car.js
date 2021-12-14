function Car(props) {
    return <h1>This is my {props.color} car~~~</h1>
}
function Garage(props) {
    return( 
        <>
            <h1>My Garage in the wish car</h1>
            <Car color="red" />
        </>
    )
}

export {Car, Garage};