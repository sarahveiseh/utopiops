import Router from "./Router";
import { useDispatch } from "react-redux";
import { getUsers } from "./store/reducers/users/usersActions";
import { useEffect } from "react";

import "./styles/pages-styles.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //get users list on app start
    dispatch(getUsers());
  }, [dispatch]);

  return <Router />;
};

export default App;
