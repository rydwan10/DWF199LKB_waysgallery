import { useContext, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import { SET_MODAL } from "../../../constant/ActionTypes";

import { Grid, Button, TextField, Typography } from "@material-ui/core";
import Modal from "../../Modal/Modal";
import makeStyles from "./style";

function Form({ handleSendProject }) {
  //eslint-disable-next-line
  const [state, dispatch] = useContext(AppContext);
  const [input, setInput] = useState({
    description: "",
  });

  const { description } = input;

  const handleSend = async (e) => {
    e.preventDefault();

    if (input.description.trim() === "") {
      dispatch({
        type: SET_MODAL,
        payload: {
          isOpen: true,
          message: "Please fill your project description",
        },
      });
    } else {
      handleSendProject(description);
    }
  };

  const classes = makeStyles();

  return (
    <>
      <Modal />
      <div className={classes.formWrapper}>
        <form
          onSubmit={handleSend}
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
        >
          <Typography className={classes.loginTitle} variant="h4">
            Upload Project
          </Typography>

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
                type="submit"
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
                Send Project
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
}

export default Form;
