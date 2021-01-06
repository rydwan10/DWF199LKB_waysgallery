import { useContext, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import { SET_MODAL } from "../../../constant/ActionTypes";
import { useParams, useHistory } from "react-router-dom";
import {
  Grid,
  Button,
  TextField,
  Typography,
  InputLabel,
} from "@material-ui/core";
import Modal from "../../Modal/Modal";
import makeStyles from "./style";

// API
import { API } from "../../../config/api";

function Form() {
  const router = useHistory();
  const { id: orderTo } = useParams();
  //eslint-disable-next-line
  const [state, dispatch] = useContext(AppContext);
  const [input, setInput] = useState({
    title: "",
    description: "",
    startProject: "",
    endProject: "",
    price: "",
  });

  const {
    title,
    description,
    startProject: startDate,
    endProject: endDate,
    price,
  } = input;

  const handleBidding = async (e) => {
    e.preventDefault();

    if (
      input.title.trim() === "" ||
      input.description.trim() === "" ||
      input.startProject.trim() === "" ||
      input.endProject.trim() === "" ||
      input.price.trim() === ""
    ) {
      dispatch({
        type: SET_MODAL,
        payload: { isOpen: true, message: "All fields is required!" },
      });
    } else {
      try {
        const body = JSON.stringify({
          title,
          description,
          startDate,
          endDate,
          price,
          orderTo,
        });

        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const response = await API.post("/hire", body, config);
        if (response.status === 201) {
          dispatch({
            type: SET_MODAL,
            payload: {
              isOpen: true,
              message:
                "Your order is created! Please wait until the user accept it",
            },
          });
          setInput({
            title: "",
            description: "",
            startProject: "",
            endProject: "",
            price: "",
          });
        }
      } catch (err) {
        console.log(err.response);
        dispatch({
          type: SET_MODAL,
          payload: {
            isOpen: true,
            // message: err.response.data.error.message,
            message: "Something went wrong!",
          },
        });
      }
    }
  };

  const classes = makeStyles();

  return (
    <>
      <Modal />
      <div className={classes.formWrapper}>
        <form
          onSubmit={handleBidding}
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
        >
          <Typography className={classes.loginTitle} variant="h4">
            Hire This User
          </Typography>

          <Grid container spacing={5} alignItems="flex-end">
            <Grid style={{ width: "100%" }} item>
              <TextField
                className={classes.inputField}
                variant="outlined"
                size="small"
                type="text"
                value={input.title}
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
                value={input.description}
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

          <Grid
            container
            spacing={5}
            justify="space-between"
            alignItems="flex-end"
          >
            <Grid item>
              <InputLabel style={{ color: "grey", marginBottom: "6px" }}>
                Start Project
              </InputLabel>
              <TextField
                className={classes.inputField}
                variant="outlined"
                size="small"
                value={input.startProject}
                onChange={(e) =>
                  setInput({ ...input, startProject: e.target.value })
                }
                type="date"
              />
            </Grid>
            <Grid item>
              <InputLabel style={{ color: "grey", marginBottom: "6px" }}>
                End Project
              </InputLabel>

              <TextField
                className={classes.inputField}
                variant="outlined"
                size="small"
                value={input.endProject}
                onChange={(e) =>
                  setInput({ ...input, endProject: e.target.value })
                }
                type="date"
              />
            </Grid>
          </Grid>

          <Grid container spacing={5} alignItems="flex-end">
            <Grid style={{ width: "100%" }} item>
              <TextField
                className={classes.inputField}
                variant="outlined"
                size="small"
                type="text"
                value={input.price}
                onChange={(e) => setInput({ ...input, price: e.target.value })}
                style={{ width: "100%" }}
                placeholder="Price"
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
                Bidding
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
}

export default Form;
