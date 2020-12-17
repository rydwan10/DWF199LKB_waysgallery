import { Grid } from "@material-ui/core";
import profileShot from "../../../assets/shots/profileShot.png";
import makeStyles from "./style";
function Highlight() {
  const classes = makeStyles();
  return (
    <Grid>
      <div className={classes.cyanBox}></div>
      <img
        className={classes.highlightImage}
        src={profileShot}
        alt="profile shot"
      />
    </Grid>
  );
}

export default Highlight;
