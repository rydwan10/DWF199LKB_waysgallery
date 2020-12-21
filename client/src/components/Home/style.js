import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    "& .MuiInputBase-input": {
      color: "white",
      backgroundColor: "transparent",
      fontSize: "1.3rem",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "2px solid #26942b",
      width: "100%",
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
}));
