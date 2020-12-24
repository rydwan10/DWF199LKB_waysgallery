import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../context/AppContext";
import {
  SET_MODAL,
  USER_LOADED,
  AUTH_ERROR,
} from "../../../constant/ActionTypes";

import { Grid, Button, TextField, Avatar } from "@material-ui/core";
import Modal from "../../Modal/Modal";
import makeStyles from "./style";
import UploadProfilePicturePlaceholder from "../../../assets/img/UploadProfilePicturePlaceholder.png";
// API
import { API } from "../../../config/api";

function Form() {
  //eslint-disable-next-line
  const [state, dispatch] = useContext(AppContext);
  const [profilePicturePreview, setProfilePicturePreview] = useState(null);
  const [input, setInput] = useState({
    greeting: state.user.greeting ? state.user.greeting : "",
    fullName: state.user.name,
    avatar: "",
  });
  const [fetch, setFetch] = useState(false);

  const loadUser = async () => {
    try {
      const response = await API("/check-auth");
      dispatch({
        type: USER_LOADED,
        payload: {
          user: response.data.data,
        },
      });
    } catch (err) {
      console.log(err);
      if (err) {
        return dispatch({
          type: AUTH_ERROR,
        });
      }
    }
  };
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, [fetch]);

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const { title, greeting, avatar } = input;
      const body = new FormData();

      body.append("title", title);
      body.append("greeting", greeting);
      body.append("avatar", avatar);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const response = await API.patch(`/users/${state.user.id}`, body, config);
      if (response.status === 200) {
        dispatch({
          type: SET_MODAL,
          payload: {
            isOpen: true,
            message: "Profile Updated!",
          },
        });
        setFetch((prev) => !prev);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const classes = makeStyles();

  return (
    <>
      <Modal />
      <div className={classes.formWrapper}>
        <form
          onSubmit={handleSave}
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
        >
          <Grid container spacing={5} alignItems="flex-end">
            <input
              onChange={(e) => {
                setProfilePicturePreview(
                  URL.createObjectURL(e.target.files[0])
                );
                setInput({ ...input, avatar: e.target.files[0] });
              }}
              accept="image/*"
              className={classes.input}
              style={{ display: "none" }}
              id="file-input-thumbnail"
              multiple
              type="file"
            />
            <div style={{ margin: "1rem auto" }}>
              <label
                htmlFor="file-input-thumbnail"
                className={classes.fileInputButton}
              >
                {profilePicturePreview ? (
                  <Avatar
                    style={{ width: "250px", height: "250px" }}
                    src={profilePicturePreview}
                  />
                ) : (
                  <img
                    src={UploadProfilePicturePlaceholder}
                    alt="select profile"
                  />
                )}
              </label>
            </div>
          </Grid>

          <Grid container spacing={5} alignItems="flex-end">
            <Grid style={{ width: "100%" }} item>
              <TextField
                className={classes.inputField}
                variant="outlined"
                size="small"
                type="text"
                onChange={(e) =>
                  setInput({ ...input, greeting: e.target.value })
                }
                style={{ width: "100%" }}
                placeholder="Greeting"
                value={input.greeting}
              />
            </Grid>
          </Grid>

          <Grid container spacing={5} alignItems="flex-end">
            <Grid style={{ width: "100%" }} item>
              <TextField
                className={classes.inputField}
                variant="outlined"
                size="small"
                onChange={(e) =>
                  setInput({ ...input, fullName: e.target.value })
                }
                style={{ width: "100%" }}
                type="text"
                value={input.fullName}
                placeholder="Full name"
              />
            </Grid>
          </Grid>

          <Grid container justify="center">
            <Grid item></Grid>
            <Grid item>
              <Button
                type="submit"
                className={classes.biddingButton}
                size="medium"
                variant="contained"
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
}

export default Form;
