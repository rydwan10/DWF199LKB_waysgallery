import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

import { Route, Redirect } from "react-router-dom";
import Loading from "../Loading/Loading";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // eslint-disable-next-line
  const [state, dispatch] = useContext(AppContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        state.isLoading ? (
          <Loading />
        ) : state.isLogin ? (
          <Component {...props} />
        ) : (
          <Redirect to="/landing" />
        )
      }
    />
  );
};

export default PrivateRoute;
