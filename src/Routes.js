import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Account from "./Pages/Account/Account";
import Main from "./Pages/Main/Main";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
<<<<<<< HEAD
import Cart from "./Pages/Cart/Cart";
=======
import ProductSection from "./Pages/ProductDetails/ProductSection";
>>>>>>> master
import ProductList from "./Pages/ProductList/ProductList";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Account" component={Account} />
          <Route exact path="/Main" component={Main} />
          <Route exact path="/ProductDetails" component={ProductDetails} />
<<<<<<< HEAD
          <Route exact path="/Cart" component={Cart} />
=======
          <Route exact path="/ProductSection" component={ProductSection} />
>>>>>>> master
          <Route exact path="/ProductList" component={ProductList} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
