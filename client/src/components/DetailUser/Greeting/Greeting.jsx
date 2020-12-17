import { Avatar, Grid, Button, Typography } from "@material-ui/core";
import makeStyle from "./style";
import dave from "../../../assets/dave-mustaine.png";

function Greeting() {
  const classes = makeStyle();
  return (
    <Grid container direction="column" justify="flex-start">
      <Grid item>
        <Avatar className={classes.bgAvatar} src={dave} />
        <Typography className={classes.nameText} variant="h5">
          Dave Mustaine
        </Typography>
      </Grid>
      <Grid
        style={
          {
            // maxHeight: "100%",
            // maxWidth: "40%",
            // overflowWrap: "break-word",
          }
        }
        item
      >
        <div
          style={{ display: "block", width: "300px", marginBottom: "1.33rem" }}
        >
          <span className={classes.greetingText}>Hey, Thanks for Looking</span>
        </div>
      </Grid>
      <Grid item>
        <Button variant="contained" className={classes.followButton}>
          Follow
        </Button>
        <Button variant="contained" className={classes.hireButton}>
          Hire
        </Button>
      </Grid>
    </Grid>
  );
}
export default Greeting;
