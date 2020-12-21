import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    "& .MuiInputBase-input": {
      color: "black !important",
      backgroundColor: "transparent",
      fontSize: "1.2rem",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "2px solid #2FC4B2",
    },
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "2px solid #2FC4B2",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "2px solid #26942b",
      width: "340px",
    },
    "& .MuiInputLabel-root": {
      display: "block",
      color: "white",
      fontWeight: "500",
    },
    "& .MuiInput-underline:before": {
      borderBottom: `2px solid black`,
      width: "0",
    },
  },
  inputField: {
    backgroundColor: "#E7E7E7 !important",
    borderRadius: "6px",
    border: "1px solid white",
    marginBottom: "6px",
  },
  formWrapper: {
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    marginTop: "1.2rem",
  },
  form: {
    width: "70%",
  },
  loginTitle: {
    color: "#000000",
    fontFamily: "Nunito",
    fontWeight: "bold",
    marginBottom: "2rem",
  },

  cancelButton: {
    width: "100%",
    backgroundColor: "#e7e7e7",
    color: "black",
    textTransform: "capitalize",
    fontWeight: "bold",
    fontFamily: "Nunito",
    fontSize: "18px",
    marginTop: "2.3rem",
    marginRight: "24px",
  },
  biddingButton: {
    width: "100%",
    backgroundColor: "#2FC4B2",
    color: "white",
    textTransform: "capitalize",
    fontWeight: "bold",
    fontFamily: "Nunito",
    fontSize: "18px",
    marginTop: "2.3rem",
  },
  [theme.breakpoints.down("sm")]: {
    root: {
      "& .MuiInputBase-input": {
        color: "white",
        backgroundColor: "transparent",
      },
      "& .MuiInput-underline:after": {
        borderBottom: "2px solid #26942b",
        width: "560px",
      },
      "& .MuiInputLabel-root": {
        display: "block",
        color: "white",
        fontWeight: "500",
      },
      "& .MuiInput-underline:before": {
        borderBottom: `2px solid black`,
        width: "0",
      },
    },
  },
  [theme.breakpoints.down("xs")]: {
    root: {
      "& .MuiInputBase-input": {
        color: "white",
        backgroundColor: "transparent",
      },
      "& .MuiInput-underline:after": {
        borderBottom: "2px solid #26942b",
        width: "250px",
      },
      "& .MuiInputLabel-root": {
        display: "block",
        color: "white",
        fontWeight: "500",
      },
      "& .MuiInput-underline:before": {
        borderBottom: `2px solid black`,
        width: "0",
      },
    },
  },
}));
