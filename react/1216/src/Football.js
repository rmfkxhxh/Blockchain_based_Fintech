// function Football() {
//     const shoot = () => {
//         alert("Great Shot with Son")
//     }
//     return (
//         <button onClick={shoot}>Take the shot! </button>
//     )
// }

// export default Football;
// function Football() {
//     const shoot = (arg) => {
//         alert(arg)
//     }
//     return (
//         <button onClick={() => shoot("Tremedous goal from SON!!!")}>Take the shot! </button>
//     )
// }

// export default Football;
function Football() {
    const shoot = (arg, event) => {
        alert(arg + " " + event.type);
    }
    return (
        // <button type="button" onMouseOut={(event) => shoot("this is mouseout", event)} onMouseOver={(event) => shoot("this is mouseover", event)} onClick={(event) => shoot("The tremendous Goal from Son!~!~", event)}>Take the Freakin shot!!!</button>
        <button type="button" onMouseMove={(event) => shoot("A tremendous Goal from Son!~!~", event)}>Take the Freakin shot!!!</button>
    )

}

export default Football;