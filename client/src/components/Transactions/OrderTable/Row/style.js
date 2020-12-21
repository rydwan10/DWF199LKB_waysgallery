import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    "& > *": {
      //   borderBottom: "unset",
    },
    "&:nth-of-type(odd)": {
      backgroundColor: "white",
    },
    "&:nth-of-type(even)": {
      //   backgroundColor: "#C7C7C7",
    },
  },
  tableHeading: {
    backgroundColor: "#E5E5E5",
  },
  tableCell: {
    color: "black",
    fontSize: "1rem",
    fontFamily: "Nunito",
  },
  menuItem: {
    fontWeight: "bold",
    fontFamily: "Nunito",
  },

  greenText: {
    color: "#08F387",
  },
  redText: {
    color: "red",
  },
  yellowText: {
    color: "#FFDF00",
  },
  blueText: {
    color: "#00C8FF",
  },
}));
