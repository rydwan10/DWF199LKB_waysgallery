import { Grid, Container } from "@material-ui/core";
import { useEffect, useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { API } from "../../config/api";
import { useParams } from "react-router-dom";

import Greeting from "./Greeting/Greeting";
import Highlight from "./Highlight/Highlight";
import WorkList from "./WorkList/WorkList";
import Loading from "../Loading/Loading";
import NotFound from "../NotFound/NotFound";

function DetailUser() {
  let { id } = useParams();
  // eslint-disable-next-line
  const [state, dispatch] = useContext(AppContext);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const getUserById = async () => {
    try {
      const response = await API("/users/" + id);

      setUser(response.data.data.user);
      setLoading(false);
    } catch (err) {
      if (err) {
        if (err.response.status === 404) {
          console.log(err);
          setLoading(false);
          setUser(null);
        } else {
          console.log(err);
        }
      }
    }
  };

  useEffect(() => {
    getUserById();
    // eslint-disable-next-line
  }, []);

  return loading ? (
    <Loading />
  ) : user == null ? (
    <NotFound />
  ) : (
    <Container>
      <Grid container alignItems="center">
        <Grid
          item
          style={{
            overflowWrap: "break-word",
          }}
        >
          <Greeting user={user} stateUserId={state.user.id} />
        </Grid>
        <Grid item>
          <Highlight user={user} />
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item>
          <WorkList user={user} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default DetailUser;
