import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  navbar: {
    padding: "1rem 0",
    background: "#ffffff",
    borderBottom: "1px solid #E1E1E1",
  },
  bgAvatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  link: {
    textDecoration: "none",
    fontFamily: "Nunito",
  },
  uploadButton: {
    background: "#2FC4B2",
    color: "white",
    textTransform: "capitalize",
    fontFamily: "Nunito",
    fontSize: "1rem",
    marginRight: "1rem",
  },
}));
