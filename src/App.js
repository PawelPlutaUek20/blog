import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import UserDetailPage from "./components/UserDetailsPage";
import PostDetailPage from "./components/PostDetailsPage";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/user/:userId" exact component={UserDetailPage} />
        <Route path="/user/:userId/:postId" exact component={PostDetailPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
