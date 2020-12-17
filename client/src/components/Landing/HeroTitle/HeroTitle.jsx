import { useState } from "react";

import {
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  DialogActions,
} from "@material-ui/core";
import cheesboard from "../../../assets/img/cheesboard.svg";

import makeStyles from "./style";
function HeroTitle() {
  const [openLoginDialog, setOpenLoginDialog] = useState(false);
  const [openRegisterDialog, setOpenRegisterDialog] = useState(false);
  const handleLoginDialogClose = () => {
    setOpenLoginDialog(false);
  };
  const handleRegisterDialogClose = () => {
    setOpenRegisterDialog(false);
  };
  const classes = makeStyles();

  // Login Dialog
  function LoginDialog() {
    return (
      <Dialog
        open={openLoginDialog}
        onClose={handleLoginDialogClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          <Typography className={classes.loginTitle}>Login</Typography>
        </DialogTitle>
        <DialogContent>
          <form className={classes.loginForm}>
            <TextField
              className={classes.inputField}
              id="name"
              placeholder="Email"
              type="email"
              fullWidth
              variant="outlined"
              size="small"
            />
            <TextField
              className={classes.inputField}
              id="password"
              placeholder="Password"
              type="password"
              fullWidth
              variant="outlined"
              size="small"
            />
            <DialogActions>
              <Button
                size="medium"
                className={classes.dialogButton}
                variant="contained"
              >
                Login
              </Button>
            </DialogActions>
          </form>
          <div className={classes.dontHaveAccount}>
            Don't have an account?&nbsp;
            <span
              className={classes.clickHere}
              onClick={() => {
                setOpenLoginDialog(false);
                setOpenRegisterDialog(true);
              }}
            >
              {" "}
              click here
            </span>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
  // End of Login Dialog

  // Register Dialog
  function RegisterDialog() {
    return (
      <Dialog
        open={openRegisterDialog}
        onClose={handleRegisterDialogClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          <Typography className={classes.loginTitle}>Register</Typography>
        </DialogTitle>
        <DialogContent>
          <form className={classes.loginForm}>
            <TextField
              className={classes.inputField}
              id="name"
              placeholder="Email"
              type="email"
              fullWidth
              variant="outlined"
              size="small"
            />
            <TextField
              className={classes.inputField}
              id="password"
              placeholder="Password"
              type="password"
              fullWidth
              variant="outlined"
              size="small"
            />
            <TextField
              className={classes.inputField}
              id="retype_password"
              placeholder="Retype Password"
              type="password"
              fullWidth
              variant="outlined"
              size="small"
            />
            <TextField
              className={classes.inputField}
              id="fullName"
              placeholder="Full Name"
              type="text"
              fullWidth
              variant="outlined"
              size="small"
            />
            <DialogActions>
              <Button
                size="medium"
                className={classes.dialogButton}
                variant="contained"
              >
                Register
              </Button>
            </DialogActions>
          </form>
          <div className={classes.dontHaveAccount}>
            Already have an account?&nbsp;
            <span
              className={classes.clickHere}
              onClick={() => {
                setOpenRegisterDialog(false);
                setOpenLoginDialog(true);
              }}
            >
              {" "}
              click here
            </span>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
  // End of Register Dialog

  return (
    <>
      <LoginDialog />
      <RegisterDialog />
      <Typography variant="h3" className={`${classes.heroTitle}`}>
        Ways <img src={cheesboard} alt="cheess board" />
      </Typography>
      <Typography variant="h3" className={`${classes.heroTitle2}`}>
        Gallery
      </Typography>

      <div>
        <div className={classes.subHeroWrapper}>
          <h2 className={classes.subHero1}>
            show your work to inspire everyone
          </h2>
          <p className={classes.subHero2}>
            Ways Exhibition is a website design creators gather to share their
            work with other creators
          </p>
        </div>
        <div>
          <Button
            onClick={() => setOpenRegisterDialog(true)}
            className={classes.joinButton}
            variant="contained"
          >
            Join Now
          </Button>
          <Button
            onClick={() => setOpenLoginDialog(true)}
            className={classes.loginButton}
            variant="contained"
          >
            Login
          </Button>
        </div>
      </div>
    </>
  );
}

export default HeroTitle;
