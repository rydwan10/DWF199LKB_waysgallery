import { Grid } from "@material-ui/core";
import detailShot from "../../../assets/shots/detailShot.png";
import makeStyles from "./style";
function Highlight() {
  const classes = makeStyles();
  return (
    <Grid>
      <div className={classes.cyanBox}></div>
      <img
        className={classes.highlightImage}
        src={detailShot}
        alt="profile shot"
      />
    </Grid>
  );
}

export default Highlight;
