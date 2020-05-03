import React from "react";
import { Route, Switch } from "react-router-dom";

const PostsListContainer = React.lazy(() =>
  import("../Containers/Posts/PostList/PostsListContainer")
);
const PostViewContainer = React.lazy(() =>
  import("../Containers/Posts/PostView/PostViewContainer")
);

const UserViewContainer = React.lazy(() =>
  import("../Containers/Users/UserView/UserViewContainer")
);
const index = () => {
  return (
    <Switch>
      <Route exact path="/" component={PostsListContainer} />
      <Route exact path="/user/:userId" component={UserViewContainer} />
      <Route exact path="/post/:postId" component={PostViewContainer} />
    </Switch>
  );
};

export default index;
