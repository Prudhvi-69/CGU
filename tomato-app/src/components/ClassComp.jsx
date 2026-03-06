import { Component } from "react";
class Checks extends Component
{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }
    componentDidMount(){
        alert("Component Mounted💥💥💥💥💥💥💥💥💥💥💥💥");
    }
    componentDidUpdate(){
        alert("Component Updated🎀🎀🎀🎀🎀🎀🎀🎀🎀🎀🎀");
    }
    componentWillUnmount(){
        const confirmation = window.confirm("Are you sure you want to unmount the component? This action cannot be undone.");
    }
    render(){
        return(
            <>
            <h1>This is the content inside H1 but inside the Class not function</h1>
            <button onClick={() => this.setState({count: this.state.count + 1})}>Count: {this.state.count}</button>
            </>
        )    
    }
}
export default Checks;


