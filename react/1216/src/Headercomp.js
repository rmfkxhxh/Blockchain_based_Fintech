import React from 'react';

class Headercomp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headertitle:"This is my page of header"};
        }

        // static getDerivedStateFromProps(props, state) {
        //     return ({headertitle: props.newTitle});
        //     // state.headertitle = props.newTitle
        //     // return (state.headertitle);
        // }


        componentDidMount() {
            setTimeout(()=>{
                this.setState({headertitle : "componentDidMount title!!!!!"})
            }, 5000)
        
        }

        changeHeaderTitle = () => {
            // this.setState({headertitle : "changeHeaderTitle title!!!!!"})
            setTimeout(()=>{
                        this.setState({headertitle : "changeHeaderTitle title!!!!!"})
                    }, 2000)
        }

        getSnapshotBeforeUpdate(prevProps, prevStates) {
            document.getElementById('div1').innerHTML = "Before update title is " + prevStates.headertitle + ", Before update newTitle is " + prevProps.newTitle
        }
        componentDidUpdate() {
            document.getElementById('div2').innerHTML = "The update title is " + this.state.headertitle
            
        }
    //     render() {
    //         return (<h1>{this.state.headertitle}</h1>)
    // }
        // rerender = () => {
        //     this.forceUpdate()
        //     this.setState = {headertitle: "forced title"}
        //     return (
        //         <div>
        //             <h1>{this.state.headertitle}</h1>
        //             <button type="button" onClick={this.changeHeaderTitle}>click to change</button>
        //             <button type="button" onClick={this.rerender}>click to forceupdate</button>
        //             {window.addEventListener('load', this.changeHeaderTitle)}
        //         </div>)
        // }
        // render() {
        //     return (
        //     <div>
        //         <h1>{this.state.headertitle}</h1>
        //         <button type="button" onClick={this.changeHeaderTitle}>click to change</button>
        //         {/* <button type="button" onClick={this.rerender}>click to forceupdate</button> */}
        //         {window.addEventListener('load', this.changeHeaderTitle)}
        //     </div>)
        // }
        render() {
            return (
            <div>
                <h1>{this.state.headertitle}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
            )
        }
        shouldComponentUpdate() {
        return true;
        }

}
export default Headercomp;