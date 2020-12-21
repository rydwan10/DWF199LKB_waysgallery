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

  imagePreviewContainer: {
    marginTop: "1.3rem",
    overflow: "hidden",
    objectFit: "cover",
  },

  imagePreview: {
    width: "100%",
  },

  thumbnailPreviewContainer: {
    marginTop: "1rem",
    overflow: "hidden",
    objectFit: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  thumbnailPreview: {
    borderRadius: "6px",
    width: "145px",
    margin: ".5rem",
  },

  greeting: {
    fontFamily: "Nunito",
    fontWeight: "800",
    fontSize: "1rem",
    display: "block",
  },

  email: {
    color: "#2FC4B2",
  },

  postDescriptionContainer: {
    marginTop: "3rem",
  },

  postDescription: {
    fontFamily: "Nunito",
    fontWeight: "600",
  },
}));
