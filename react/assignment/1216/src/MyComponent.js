import React from "react";

// class Gundam extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { model: props.model }
//     }

//     render() {
//         return <h1>This is {this.state.model} Gundam</h1>
//     }
// }
class Archangel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // gundamList: [
            //     "ZMGF-X10A Freedom Gundam",
            //     "ZMGF-X109 Justice Gundam",
            //     "Strike Gundam",
            //     "ZMGF-X10A Freedom Gundam",
            //     "ZMGF-X10A Freedom Gundam"
            // ],
            gundams: [
                { id: 1, model: "ZMGF-X10A Freedom Gundam" },
                { id: 2, model: "ZMGF-X109 Justice Gundam" },
                { id: 3, model: "Sword Strike Gundam" }
            ]
        }
    };

    render() {
        return (
            <>
                <h1>Which Gundam lives in Archangel??</h1>
                <ul>
                    {this.state.gundams.map((mobileSuite) => <h1>This is {mobileSuite.id} : {mobileSuite.model} Gundam</h1>)}
                </ul>
            </>
        )
    };
};

class Football extends React.Component {
    constructor(props) {
        super(props);
    };

    shoot = (arg, event) => {
        alert(arg + "\nevent is " + event.type)
    };

    render() {
        return <button type="button" onMouseMove={(event) => this.shoot('A tremendous Goal from Son!~!', event)}>Take the Freakin shot!!!</button>
    };
};

class Goal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isGoal: props.isGoal }
    };

    MadeGoal = () => {
        return <h2>Fantastic Goal from Son!!!!!!!!!!!!</h2>
    }
    MissGoal = () => {
        return <h2>Ronaldo misses the Goal</h2>
    }
    changeGoalState() {
        this.state.isGoal ? this.setState({isGoal : false}) : this.setState({isGoal : true})
    }

    render() {
        return (
            <>
                {this.state.isGoal ? <this.MadeGoal /> : <this.MissGoal />}
                <button type="button" onMouseOut={() => this.changeGoalState()}>Take the shot!!!</button>
            </>
        ) //삼항연산자
    };
};

class Fate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {characters: props.characters}
    };

    render() {
        return (
            <>
                <h1>Fate Characters</h1>
                {
                    this.state.characters.length > 0 && 
                    <h2>
                        {this.state.characters.length} characters in Fate Stay Night Animation
                    </h2>
                }
            </>
        )
    };
};
// import React from 'react';

export { Gundam, Archangel, Football, Goal, Fate };
