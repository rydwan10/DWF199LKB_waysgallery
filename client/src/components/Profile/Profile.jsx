import { Grid, Container } from "@material-ui/core";
import Greeting from "./Greeting/Greeting";
import Highlight from "./Highlight/Highlight";
import WorkList from "./WorkList/WorkList";
import { useEffect, useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { API } from "../../config/api";

function Profile() {
  const [state, dispatch] = useContext(AppContext);
  const [user, setUser] = useState([]);
  const getUserById = async () => {
    try {
      const response = await API("/user/" + state.user.id);
      if (response) {
        setUser(response.data.data.user);
        console.log(user);
      }
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    getUserById();
  }, []);
  return (
    <Container>
      <Grid container alignItems="center">
        <Grid
          item
          style={{
            overflowWrap: "break-word",
          }}
        >
          <Greeting />
        </Grid>
        <Grid item>
          <Highlight />
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item>
          <WorkList />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Profile;
