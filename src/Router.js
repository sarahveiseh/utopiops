import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/mainPage";
import PostPage from "./pages/PostPage/postPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/posts/:id" component={PostPage} />
    </BrowserRouter>
  );
};

export default Router;
