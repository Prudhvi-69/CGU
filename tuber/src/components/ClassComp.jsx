import { Component } from "react";
class Counter extends Component
{
    constructor()
    {
        super();  //creates state object inside Component class
        this.state = {
            count : 0
        }
    }
    componentDidMount(){
        alert("Component loaded into the DOM💥💥");
    }
    componentDidUpdate(){
        alert("Something updated in the Component🎀🎀🎀🎀")
    }
    componentWillUnmount(){
        alert("Component is about to be deleted from the DOM....🥹");
    }
    render(){
        return(
            <>
                <h1>{this.state.count}</h1>
               <button onClick={() => this.setState({count: this.state.count + 1})}>Click to Increase</button>
            </>
        )
    }
}
export default Counter;


