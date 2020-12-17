import { Container, Avatar, Grid, Typography, Button } from "@material-ui/core";
import makeStyles from "./style";
import dave from "../../assets/dave-mustaine.png";

function PostDetail() {
  const classes = makeStyles();
  return (
    <div
      style={{
        width: "60%",
        height: "600px",
        display: "block",
        margin: "2rem auto 0 auto",
        border: "1px solid red",
      }}
    >
      <Grid
        container
        justify="space-between"
        alignItems="center"
        direction="row"
      >
        <Grid item>
          <Grid container alignItems="center">
            <Grid item style={{ marginRight: "1rem" }}>
              <Avatar src={dave} className={classes.bgAvatar} />
            </Grid>
            <Grid item>
              <Typography variant="h5" className={classes.postTitle}>
                Robo-x Landing Page
              </Typography>
              <Typography variant="body1" className={classes.userName}>
                Dave Mustaine
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container>
            <Grid item>
              <Button className={classes.followButton}>Follow</Button>
            </Grid>
            <Grid item>
              <Button className={classes.hireButton}>Hire</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default PostDetail;
