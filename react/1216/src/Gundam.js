import React from 'react';

class Gundam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            camp: "Earth",
            model: "X10A",
            engine: "Atomic",
            year: "Cosmic 70",
            pilot: "Yamato"
        }
    }
    
    changeModel = () => {
        if (this.state.model == 'X10A') {
            this.setState({ model: 'X109 Justice' });
        }
        if (this.state.model == 'X109 Justice') {
            this.setState({ model: 'X10A' });
        }
    }


    render() {
        return (
            <div>
                <h1>{this.state.model}</h1>
                <h1>{this.props.model}</h1>
                <h2>The Camp is {this.state.camp}</h2>
                <h2>The engine is {this.state.engine}</h2>
                <h2>The pilot name is {this.state.pilot}</h2>
                <h2>{this.state.year} Space Century</h2>
                <h2>The Cargo is {this.props.cargo}</h2>
                <button type='button' onClick={this.changeModel}>click me~!~!</button>
            </div>

        )
    }
}

export default Gundam