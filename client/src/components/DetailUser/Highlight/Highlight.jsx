import { Grid } from "@material-ui/core";
import makeStyles from "./style";
function Highlight({ user }) {
  const { posts } = user;

  const classes = makeStyles();
  return (
    <Grid>
      <div className={classes.cyanBox}></div>
      {posts.length > 0 ? (
        <img
          className={classes.highlightImage}
          src={`http://localhost:5000/uploads/${posts[0].photos[0].image}`}
          alt="profile shot"
        />
      ) : (
        <img
          className={classes.highlightImage}
          src={`http://localhost:5000/uploads/NoPost.png`}
          alt="profile shot"
        />
      )}
    </Grid>
  );
}

export default Highlight;
