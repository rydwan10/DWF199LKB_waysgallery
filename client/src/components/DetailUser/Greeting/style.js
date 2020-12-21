import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  hireButton: {
    background: "#2FC4B2",
    color: "white",
    fontWeight: "bold",
    textTransform: "capitalize",
    fontFamily: "Nunito",
    fontSize: "1rem",
    marginRight: "1rem",
    minWidth: "100px",
  },
  followButton: {
    background: "#E7E7E7",
    color: "black",
    fontWeight: "bold",
    textTransform: "capitalize",
    fontFamily: "Nunito",
    fontSize: "1rem",
    marginRight: "1rem",
    minWidth: "100px",
  },
  bgAvatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginBottom: "24px",
  },
  nameText: {
    fontWeight: "bold",
    fontFamily: "Nunito",
    marginBottom: "24px",
  },
  greetingText: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    marginBottom: "3rem",
    fontSize: "2.4rem",
  },
}));
