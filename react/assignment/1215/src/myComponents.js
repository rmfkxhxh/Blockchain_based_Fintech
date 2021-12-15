import React, { useState, useEffect } from 'react';



function Headercomp(props) {
    let [headerTitle, setHeaderTitle] = useState('This is my header from useState') 

    const ChangeHeaderTitle = () => {
        useEffect(() => {
            setTimeout(() => {
                setHeaderTitle(headerTitle = "3초가 지낫습니다 \nchanged HeaderTitle title!!!!!")
            }, 3000)
            // return <h2>state : {headerTitle}</h2>
        }, [])
        return ''
    }
    return (
        <div>
            <h1>HeaderComp</h1>
            <h2>props : {props.headerTitle}</h2>
            <h2>state : {headerTitle}</h2>
            <div id="div1"></div>
            <div id="div2"></div>
            {<ChangeHeaderTitle/>}
        </div>
    )
}

function Car(props) {
    return <h2>This is my {props.color} car~~~</h2>
}

function Garage() {
    return (
        <>
            <h1><br />Garage</h1>
            <h2>My Garage has a car inside.</h2>
            <Car color="white" />
        </>
    )
}
// function changeModel(props) {
//     (props.model === 'X10A' ? props.model = 'X109 Justice' : props.model= 'X10A') 
// }

function Gundam(props) {
    let [pilot, setPilot] = useState('Yamato')
    let [model, setModel] = useState('X10A')
    let change = true
    var changeModel = () => {
        if (!change) {
            // props.model='X10A'
            setPilot(pilot = 'Yamato')
            setModel(model = 'X10A')
            change = true
        }
        else {
            // props.model = 'X109 Justice'
            setPilot(pilot = 'Zala')
            setModel(model = 'X09A')
            change = false
        }
    }

    return (
        <div>
            <h1><br />Gundam</h1>
            <h2>{model}</h2>
            {/* <h1 id='md2'>{props.model2}</h1> */}
            <h2>The Camp is {props.camp}</h2>
            <h2>The engine is {props.engine}</h2>
            <h2>The pilot name is {pilot}</h2>
            <h2>{props.year} Space Century</h2>
            <h2>The Cargo is {props.cargo}</h2>
            <button type='button' onClick={changeModel}>click me to change model~!~!</button>
        </div>
    )
}

function Container(props) {
    let [show, setShow] = useState(true)



    function deleteHandler() {
        // alert("The myheader is about to be unmounted")
        // console.log('component will unmount')
        setShow(show = false)
    }
    function addHandler() {
        // alert("The myheader is about to be unmounted")
        // console.log('component will unmount')
        setShow(show = true)
    }
    function Checkmounted() {
        // It takes a function
        useEffect(() => {
            // This gets called after every render, by default
            // (the first one, and every one after that)
            console.log('alert from checkmounted: \nrender!');

            // If you want to implement componentWillUnmount,
            // return a function from here, and React will call
            // it prior to unmounting.
            return () => alert('alert from checkmounted: \nunmounting');
        }, []) //[dependencies to watch = leave blank to run once or you will get a stack overflow  ]);

        return ("")
    }
    function Checkmounted() {
       
        useEffect(() => {
    
            console.log('alert from checkmounted: \nrender!');


            return () => alert('alert from checkmounted: \nunmounting');
        }, [])

        return ("")
    }

    const Child = () => {
        return (
            <div>
                <h2>HEllO WORLD~~~~~~</h2>
                <button type='button' onClick={deleteHandler}>Delete Handler</button>
            </div>
        )
    }

    let myheader;
    if (show) {
        myheader = <Child />
    } else {
        myheader = <button type='button' onClick={addHandler}>Add Handler</button>
    }

    return (
        <div>
            <h1>componentWillUnmount</h1>
            {myheader}
            {show && <Checkmounted />}
        </div>
    )
}

export { Car, Garage, Gundam, Headercomp, Container };