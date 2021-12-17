import React from 'react';

class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = { show: true };
    }

    deleteHandler = () => {
        if (this.state.show) {
            this.setState({ show: false })
        }
        if (!this.state.show) {
            this.setState({ show: true })
        }
    }

    render() {
        let myheader;
        if (this.state.show) {
            myheader = <Child />
        }

        return (
            <div>
                {myheader}
                <button type='button' onClick={this.deleteHandler}>Delete Handler</button>
            </div>
        )
    }
}

class Child extends React.Component {
    componentWillUnmount() {
        alert("The component named Header is about to be unmounted")
    }
    render() {
        return (
            <h1>HEllO WORLD~~~~~~</h1>
        )
    }
}

export default Container;