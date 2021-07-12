import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
