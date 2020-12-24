import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { AUTH_ERROR, USER_LOADED } from "./constant/ActionTypes";
import { API, setAuthToken } from "./config/api";

import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage";
import DetailUserPage from "./pages/DetailUserPage";
import PostDetailPage from "./pages/PostDetailPage";
import HomePage from "./pages/HomePage";
import HiredPage from "./pages/HiredPage";
import UploadPostPage from "./pages/UploadPostPage";
import UploadProjectPage from "./pages/UploadProjectPage";
import EditProfilePage from "./pages/EditProfilePage";
import TransactionPage from "./pages/TransactionPage";
import ViewProjectPage from "./pages/ViewProjectPage";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PreventToLoginRoute from "./components/PreventToLoginRoute/PreventToLoginRoute";
import NotFound from "./components/NotFound/NotFound";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const [state, dispatch] = useContext(AppContext);

  const loadUser = async () => {
    try {
      const response = await API("/check-auth");
      dispatch({
        type: USER_LOADED,
        payload: {
          user: response.data.data,
        },
      });
    } catch (err) {
      console.log(err);
      if (err) {
        return dispatch({
          type: AUTH_ERROR,
        });
      }
    }
  };
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      {state.isLogin ? <Navbar /> : null}

      <Switch>
        <PrivateRoute exact path="/" component={HomePage} />
        <PreventToLoginRoute exact path="/landing" component={LandingPage} />
        <PrivateRoute exact path="/user/:id" component={DetailUserPage} />
        <PrivateRoute exact path="/post/:id" component={PostDetailPage} />
        <PrivateRoute exact path="/hire/:id" component={HiredPage} />
        <PrivateRoute exact path="/add-post" component={UploadPostPage} />
        <PrivateRoute
          exact
          path="/upload-project/:id"
          component={UploadProjectPage}
        />
        <PrivateRoute exact path="/edit-profile" component={EditProfilePage} />
        <PrivateRoute exact path="/transactions" component={TransactionPage} />
        <PrivateRoute
          exact
          path="/view-project/:id"
          component={ViewProjectPage}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
