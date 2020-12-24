import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
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

  title: {
    color: "#03F387",
    fontWeight: "bold",
    marginBottom: "2rem",
  },
  tableHeading: {
    backgroundColor: "#E5E5E5",
    color: "black",
  },
  tableCell: {
    color: "black",
    fontWeight: "600",
    fontFamily: "Nunito",
    fontSize: "1rem",
  },
}));
