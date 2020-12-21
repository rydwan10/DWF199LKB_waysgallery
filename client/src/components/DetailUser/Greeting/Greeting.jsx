import { Avatar, Grid, Button, Typography } from "@material-ui/core";
import makeStyle from "./style";
import { Link, useParams } from "react-router-dom";

function Greeting({ user, stateUserId }) {
  const classes = makeStyle();
  let { id } = useParams();

  return (
    <Grid container direction="column" justify="flex-start">
      <Grid item>
        <Avatar
          className={classes.bgAvatar}
          src={`http://localhost:5000/uploads/${user.avatar}`}
        />
        <Typography className={classes.nameText} variant="h5">
          {user.fullName}
        </Typography>
      </Grid>
      <Grid item>
        <div
          style={{ display: "block", width: "300px", marginBottom: "1.33rem" }}
        >
          <span className={classes.greetingText}>
            {user.greeting
              ? user.greeting
              : `Welcome to ${user.fullName}'s profile! `}
          </span>
        </div>
      </Grid>
      <Grid item>
        {user.id === stateUserId ? (
          <Link style={{ textDecoration: "none" }} to="/edit-profile">
            <Button variant="contained" className={classes.hireButton}>
              Edit
            </Button>
          </Link>
        ) : (
          <>
            <Button variant="contained" className={classes.followButton}>
              Follow
            </Button>
            <Link style={{ textDecoration: "none" }} to={`/hire/${id}`}>
              <Button variant="contained" className={classes.hireButton}>
                Hire
              </Button>
            </Link>
          </>
        )}
      </Grid>
    </Grid>
  );
}
export default Greeting;
