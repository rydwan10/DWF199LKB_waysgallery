import { useContext, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import { SET_MODAL } from "../../../constant/ActionTypes";

import { Grid, Button, TextField, Typography } from "@material-ui/core";
import Modal from "../../Modal/Modal";
import makeStyles from "./style";
import { useHistory } from "react-router-dom";

// API
import { API } from "../../../config/api";

function Form({ files, setFiles, setLoading }) {
  const router = useHistory();
  //eslint-disable-next-line
  const [state, dispatch] = useContext(AppContext);
  const [input, setInput] = useState({
    title: "",
    description: "",
  });

  const handleAddPost = async (e) => {
    e.preventDefault();
    if (
      input.title.trim() === "" ||
      input.description.trim() === "" ||
      files.length === 0
    ) {
      dispatch({
        type: SET_MODAL,
        payload: {
          isOpen: true,
          message:
            "All fields is required and at least you must post 1 picture",
        },
      });
    } else {
      try {
        setLoading(true);
        const { title, description } = input;
        const body = new FormData();

        body.append("title", title);
        body.append("description", description);

        for (const file of files) {
          body.append("images", file);
        }

        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
        const response = await API.post("/posts", body, config);
        if (response.status === 201) {
          dispatch({
            type: SET_MODAL,
            payload: {
              isOpen: true,
              message: "Post Added!",
            },
          });
          setFiles([]);
          setLoading(false);
        }
      } catch (err) {
        dispatch({
          type: SET_MODAL,
          payload: {
            isOpen: true,
            message: "Oppss.. something went wrong!",
          },
        });
        console.log(err.response);
      }
    }
  };

  const classes = makeStyles();

  return (
    <>
      <Modal />
      <div className={classes.formWrapper}>
        <form
          onSubmit={handleAddPost}
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
        >
          <Typography className={classes.loginTitle} variant="h4">
            Add New Post
          </Typography>

          <Grid container spacing={5} alignItems="flex-end">
            <Grid style={{ width: "100%" }} item>
              <TextField
                className={classes.inputField}
                variant="outlined"
                size="small"
                type="text"
                onChange={(e) => setInput({ ...input, title: e.target.value })}
                style={{ width: "100%" }}
                placeholder="Title"
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
                  setInput({ ...input, description: e.target.value })
                }
                style={{ width: "100%" }}
                type="text"
                multiline
                rows={6}
                placeholder="Description"
              />
            </Grid>
          </Grid>

          <Grid container justify="center">
            <Grid item>
              <Button
                type="button"
                onClick={() => router.push("/")}
                className={classes.cancelButton}
                size="medium"
                variant="contained"
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                type="submit"
                className={classes.biddingButton}
                size="medium"
                variant="contained"
              >
                Post
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
}

export default Form;
