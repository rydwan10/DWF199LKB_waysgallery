import { Grid, Container } from "@material-ui/core";
import Greeting from "./Greeting/Greeting";
import Highlight from "./Highlight/Highlight";
import WorkList from "./WorkList/WorkList";

function DetailUser() {
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

export default DetailUser;
