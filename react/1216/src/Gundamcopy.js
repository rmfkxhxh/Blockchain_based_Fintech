function Gundam(props) {
    const dic = props.gInfo
    return (
        <div>
            {
                Object.values(dic).map((e, i) => {
                    return (<div>{i} {e}</div>)
                })
            }
        </div>
    )
}
function Archangel() {
    const gundamInfo = {
        camp: "Earth",
        model: "X10A",
        engine: "Atomic",
        year: "Cosmic 70",
        pilot: "Kira Yamato"
    }
    return (
        <>
            <h1>mapping function</h1>
            <Gundam gInfo={gundamInfo} />
        </>
    )
}

// render() {
//     const myArray = [];
//     return <>
//         {myArray.map(item => {
//             return (<Element>
//                 {item}
//             </Element>);
//         })}
//     </>
// }



export default Archangel;