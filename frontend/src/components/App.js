import React, { Component } from "react";
import { render } from "react-dom";
import { Route, Switch, Router } from 'react-router-dom';
// import SideBar from './Sidebar/Sidebar';
import Login from './Login/Login';
import Admin from './Admin/Admin';
import Offers from './Offers/Offers';
import Header from './Header/Header';
import { history } from '../helpers';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <React.Fragment>
                {/* <SideBar pageWrapId={"page-wrap"} outerContainerId={"SideBarContainer"} /> */}
                <Header />
                <Router history={history}>
                    <div id="page-wrap">
                        <Switch>
                            <Route exact path="/" component={Login} />
                            <Route exact path="/offers" component={Offers} />
                            <Route exact path="/uiadmin" component={Admin} />
                        </Switch>
                    </div>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);