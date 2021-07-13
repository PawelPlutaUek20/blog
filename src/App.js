import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import UserDetailPage from "./components/UserDetailsPage";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/user/:id" component={UserDetailPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
