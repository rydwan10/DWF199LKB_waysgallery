import { Link } from "react-router-dom";
import { useState } from "react";

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
import rydwan from "../../assets/dw-profile-picture.png";
import logout from "../../assets/icons/logout.svg";
import orderIcon from "../../assets/icons/orderIcon.svg";
import profileIcon from "../../assets/icons/profileIcon.svg";

import MenuItem from "@material-ui/core/MenuItem";

import Loading from "../Loading/Loading";

import makeStyles from "./style";

function Navbar() {
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
                <Button
                  variant="contained"
                  size="medium"
                  className={classes.uploadButton}
                >
                  Upload
                </Button>
              </Grid>
              <Grid item>
                <Avatar
                  onClick={handleClick}
                  className={classes.bgAvatar}
                  src={rydwan}
                />
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
        <Link className={classes.link} to="/profile">
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

        <Link className={classes.link} to="/pay">
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
