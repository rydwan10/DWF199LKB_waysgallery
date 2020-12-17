import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  bgAvatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },

  hireButton: {
    background: "#2FC4B2",
    color: "white",
    textTransform: "capitalize",
    fontFamily: "Nunito",
    fontSize: "1rem",
    marginRight: "1rem",
    padding: ".4rem 2rem",
    fontWeight: "700",
  },
  followButton: {
    background: "#E7E7E7",
    color: "black",
    textTransform: "capitalize",
    fontFamily: "Nunito",
    fontSize: "1rem",
    marginRight: "1rem",
    padding: ".4rem 2rem",
    fontWeight: "700",
  },

  postTitle: {
    fontFamily: "Nunito",
    fontWeight: "800",
  },

  userName: {
    fontFamily: "Nunito",
    fontSize: "1.2rem",
  },
}));
