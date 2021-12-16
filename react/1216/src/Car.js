import React from 'react';

class Car extends React.Component {
    constructor() {
        super();
        this.state = {color: "red"};
    }

    render() { // return html
        // return <h1>This is my {this.state.color} Car~~~~</h1>;
        return <h1>This is my {this.props.color} Car~~~~ and I have another {this.props.otherColor} Car</h1>;
    }
}

export default Car;