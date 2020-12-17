import { Avatar, Grid, Button, Typography } from "@material-ui/core";
import makeStyle from "./style";
import rydwan from "../../../assets/dw-profile-picture.png";

function Greeting() {
  const classes = makeStyle();
  return (
    <Grid container direction="column" justify="flex-start">
      <Grid item>
        <Avatar className={classes.bgAvatar} src={rydwan} />
        <Typography className={classes.nameText} variant="h5">
          Muhammad Rydwan
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.greetingText} variant="h3">
          Welcome To My Art
        </Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" className={classes.editProfileButton}>
          Edit Profile
        </Button>
      </Grid>
    </Grid>
  );
}
export default Greeting;
