import React from 'react';

class Gundam extends React.Component {
    render() {
        return <h2>Freedom gundam lives there.</h2>
    }
}

class Arcangel extends React.Component {
    render() {
        return (<div>
            <h1>Who lives in Arcangel??????????</h1>
            <Gundam />
        </div>) 
    }
}

export default Arcangel;