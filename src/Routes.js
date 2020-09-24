import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Account from "./Pages/Account/Account";
import Main from "./Pages/Main/Main";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import ProductSection from "./Pages/ProductDetails/ProductSection";
import ProductList from "./Pages/ProductList/ProductList";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Account" component={Account} />
          <Route exact path="/" component={Main} />
          <Route exact path="/ProductDetails/:id" component={ProductDetails} />
          <Route exact path="/ProductSection" component={ProductSection} />
          <Route exact path="/ProductList" component={ProductList} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
