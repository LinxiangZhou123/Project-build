import React from "react";
import "./index.scss"
class TestComponent extends React.Component {
    componentDidMount(){
        console.log("componentDidMount")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    render(){
        return <div className="my-img">
            
        </div>
    }
}

export default TestComponent