import React from "react"
import TestComponent from "../testComponent"
class App extends React.Component{
    state={count: 0}
    add(){
        this.setState({count: ++this.state.count})
    }
    render(){
        return <div>
            {this.state.count}
            <button onClick={()=>{this.add()}}>\</button>
            <TestComponent />
        </div>
    }
}

export default App