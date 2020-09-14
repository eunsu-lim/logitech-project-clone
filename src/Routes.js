import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Account from "./Pages/Acoount/Account";
import Login from "./Pages/Login/Login";
import Main from "./Pages/Main/Main";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import ProductList from "./Pages/ProductList/ProductList";
import SignUp from "./Pages/SignUp";

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/Account" component={Account} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/Main" component={Main} />
                    <Route exact path="/ProductDetails" component={ProductDetails} />
                    <Route exact path="/ProductList" component={ProductList} />
                    <Route exact path="/SignUp" component={SignUp} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;
