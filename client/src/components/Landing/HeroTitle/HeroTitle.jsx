import { useState, useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { LOGIN, REGISTER } from "../../../constant/ActionTypes";
import { useHistory } from "react-router-dom";

// API
import { API, setAuthToken } from "../../../config/api";

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
  // eslint-disable-next-line
  const [state, dispatch] = useContext(AppContext);
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
    const [input, setInput] = useState({
      email: "",
      password: "",
    });
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const router = useHistory();

    const { email, password } = input;

    const handleLogin = async (e) => {
      e.preventDefault();

      if (input.email.trim() === "" || input.password.trim() === "") {
        setError(true);
        setErrorMessage(`Email or password must not empty!`);
      } else {
        try {
          const body = JSON.stringify({ email, password });
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };

          const response = await API.post("/login", body, config).catch(
            (err) => {
              setError(true);
              setErrorMessage(`Email or password is invalid!`);
            }
          );

          setAuthToken(response.data.data.token);
          dispatch({
            type: LOGIN,
            payload: {
              user: response.data.data,
            },
          });
          router.push("/");
        } catch (err) {
          console.log(err.response);
        }
      }
    };

    return (
      <>
        <Dialog
          open={openLoginDialog}
          onClose={handleLoginDialogClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            <Typography className={classes.loginTitle}>Login</Typography>
          </DialogTitle>
          <DialogContent>
            {error ? (
              <div
                onClick={() => {
                  setError(false);
                  setErrorMessage(null);
                }}
                style={{
                  border: "2px solid red",
                  borderRadius: "6px",
                  margin: "0 auto .7rem auto",
                  width: "96%",
                  padding: "1rem 6px",
                  color: "red",
                  fontWeight: "700",
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <span>{errorMessage}</span>
              </div>
            ) : null}
            <form className={classes.loginForm} onSubmit={handleLogin}>
              <TextField
                className={classes.inputField}
                id="name"
                placeholder="Email"
                type="email"
                fullWidth
                variant="outlined"
                size="small"
                value={input.email}
                onChange={(e) => setInput({ ...input, email: e.target.value })}
              />
              <TextField
                className={classes.inputField}
                id="password"
                placeholder="Password"
                type="password"
                fullWidth
                variant="outlined"
                size="small"
                value={input.password}
                onChange={(e) =>
                  setInput({ ...input, password: e.target.value })
                }
              />
              <DialogActions>
                <Button
                  size="medium"
                  type="submit"
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
      </>
    );
  }
  // End of Login Dialog

  // Register Dialog
  function RegisterDialog() {
    const [input, setInput] = useState({
      email: "",
      password: "",
      retypePassword: "",
      fullName: "",
    });
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const { email, password, fullName } = input;

    const handleRegister = async (e) => {
      e.preventDefault();
      if (
        input.email.trim() === "" ||
        input.password.trim() === "" ||
        input.retypePassword.trim() === "" ||
        input.fullName.trim() === ""
      ) {
        setError(true);
        setErrorMessage(`All fields is required!`);
      } else if (input.password !== input.retypePassword) {
        setError(true);
        setErrorMessage(`Password and retype password doesn't match!`);
      } else if (input.password.length < 6 || input.retypePassword.length < 6) {
        setError(true);
        setErrorMessage(`Password must more than 6 characters!`);
      } else {
        try {
          const body = JSON.stringify({ email, password, fullName });
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
          const response = await API.post("/register", body, config);
          if (response.status === 201) {
            dispatch({
              type: REGISTER,
              payload: {
                user: response.data.data,
              },
            });
          }
        } catch (err) {
          if (err.response.status === 400) {
            setError(true);
            setErrorMessage(`${err.response.data.message}`);
          }
          console.log(err.response);
        }
      }
    };

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
          {error ? (
            <div
              onClick={() => {
                setError(false);
                setErrorMessage(null);
              }}
              style={{
                border: "2px solid red",
                borderRadius: "6px",
                margin: "0 auto .7rem auto",
                width: "96%",
                padding: "1rem 6px",
                color: "red",
                fontWeight: "700",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <span>{errorMessage}</span>
            </div>
          ) : null}
          <form onSubmit={handleRegister} className={classes.loginForm}>
            <TextField
              className={classes.inputField}
              id="name"
              placeholder="Email"
              type="email"
              fullWidth
              variant="outlined"
              size="small"
              value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
            />
            <TextField
              className={classes.inputField}
              id="password"
              placeholder="Password"
              type="password"
              fullWidth
              variant="outlined"
              size="small"
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
            <TextField
              className={classes.inputField}
              id="retype_password"
              placeholder="Retype Password"
              type="password"
              fullWidth
              variant="outlined"
              size="small"
              value={input.retypePassword}
              onChange={(e) =>
                setInput({ ...input, retypePassword: e.target.value })
              }
            />
            <TextField
              className={classes.inputField}
              id="fullName"
              placeholder="Full Name"
              type="text"
              fullWidth
              variant="outlined"
              size="small"
              value={input.fullName}
              onChange={(e) => setInput({ ...input, fullName: e.target.value })}
            />
            <DialogActions>
              <Button
                type="submit"
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
        Ways{" "}
        <img
          style={{ marginLeft: "-2rem", marginBottom: "-2rem" }}
          src={cheesboard}
          alt="cheess board"
        />
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
