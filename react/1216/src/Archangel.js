function Gundam(props) {
    return <h1>This is {props.k} : {props.model} Gundam</h1>
}


// function Archangel() {
//     const gundamList = [
//         "ZMGF-X10A Freedom Gundam",
//         "ZMGF-X109 Justice Gundam",
//         "Strike Gundam",
//         "ZMGF-X10A Freedom Gundam",
//         "ZMGF-X10A Freedom Gundam"
//     ];

//     return (
//         <>
//             <h1>Which Gundam lives in Archangel??</h1>
//             <ul>
//                 {gundamList.map((robot) => <Gundam model={robot}/>)};
//             </ul>
//         </>
//     )
// }

function Archangel() {
    const gundams = [
        { id: 1, model: "ZMGF-X10A Freedom Gundam" },
        { id: 2, model: "ZMGF-X109 Justice Gundam" },
        { id: 3, model: "Sword Strike Gundam" }
    ]

    return (
        <>
            <h1>Which Gundam lives in Archangel??</h1>
            <ul>
                {gundams.map((mobileSuite) => <Gundam k={mobileSuite.id} model={mobileSuite.model}/>)}
            </ul>
        </>
    )
}

export default Archangel;