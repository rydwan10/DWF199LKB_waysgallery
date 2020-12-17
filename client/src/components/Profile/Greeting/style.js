import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  editProfileButton: {
    background: "#2FC4B2",
    color: "white",
    textTransform: "capitalize",
    fontFamily: "Nunito",
    fontSize: "1rem",
    marginRight: "1rem",
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
  },
}));
