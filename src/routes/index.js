import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ContactsList from "../pages/contactsList";
import Contact from "../pages/contact";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={ContactsList} />
            <Route path="/contact" exact={true} component={Contact} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
