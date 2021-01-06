import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { LOGOUT } from "../../constant/ActionTypes";
import {
  Container,
  Grid,
  Avatar,
  Menu,
  Typography,
  Button,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

// icons
import navIcon from "../../assets/navIcon.svg";
import logout from "../../assets/icons/logout.svg";
import orderIcon from "../../assets/icons/orderIcon.svg";
import profileIcon from "../../assets/icons/profileIcon.svg";

import MenuItem from "@material-ui/core/MenuItem";

import makeStyles from "./style";

function Navbar() {
  const [state, dispatch] = useContext(AppContext);
  // console.log(state);
  const StyledMenu = withStyles({
    paper: {
      backgroundColor: "#ffffff",
      boxShadow: "1px 3px 6px 0px #888888",
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      {...props}
    />
  ));

  const classes = makeStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    dispatch({
      type: LOGOUT,
    });
  };

  return (
    <nav className={classes.navbar}>
      <Container>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Link to="/">
              <img src={navIcon} alt="Navigation Bar Icon" height="60" />
            </Link>
          </Grid>
          <Grid
            style={{ width: "25%" }}
            item
            container
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <div>
                <Typography
                  style={{
                    color: "white",
                    fontFamily: "Nunito",
                    fontSize: "1.2rem",
                  }}
                ></Typography>
              </div>
            </Grid>
            <Grid item container alignItems="center" justify="flex-end">
              <Grid item>
                <Link style={{ textDecoration: "none" }} to="/add-post">
                  <Button
                    variant="contained"
                    size="medium"
                    className={classes.uploadButton}
                  >
                    Upload
                  </Button>
                </Link>
              </Grid>
              <Grid item>
                {state.user ? (
                  <Avatar
                    onClick={handleClick}
                    className={classes.bgAvatar}
                    src={`http://localhost:5000/uploads/${state.user.avatar}`}
                  />
                ) : (
                  <Avatar
                    onClick={handleClick}
                    className={classes.bgAvatar}
                    src={`http://localhost:5000/uploads/avatar.jpg`}
                  />
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <StyledMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link className={classes.link} to={`/user/${state.user.id}`}>
          <MenuItem
            style={{
              color: "#000000",
              fontFamily: "Nunito",
              fontWeight: "bold",
            }}
            onClick={handleClose}
          >
            <img
              style={{ marginRight: "12px" }}
              src={profileIcon}
              alt="icon"
              width="25px"
            />
            Profile
          </MenuItem>
        </Link>

        <Link className={classes.link} to="/transactions">
          <MenuItem
            style={{
              color: "#000000",
              fontFamily: "Nunito",
              fontWeight: "bold",
            }}
            onClick={handleClose}
          >
            <img
              style={{ marginRight: "12px" }}
              src={orderIcon}
              alt="icon"
              width="25px"
            />
            Order
          </MenuItem>
        </Link>

        <MenuItem
          style={{
            color: "#000000",
            fontFamily: "Nunito",
            fontWeight: "bold",
            borderTop: "1px solid #A8A8A8",
          }}
          onClick={handleLogout}
        >
          <img
            style={{ marginRight: "12px", color: "red !important" }}
            src={logout}
            alt="icon"
            width="25px"
          />
          Logout
        </MenuItem>
      </StyledMenu>
    </nav>
  );
}

export default Navbar;
