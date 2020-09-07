import React, { Component } from "react";
import { render } from "react-dom";
import Login from './Login/Login';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <React.Fragment>
                <div>Hello There!</div>
                <Login />
            </React.Fragment>
        );
    }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);