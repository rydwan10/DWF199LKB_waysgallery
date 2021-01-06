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
    color: "#2FC4B2",
    cursor: "pointer",
  },

  imagePreviewContainer: {
    marginTop: "1.3rem",
    overflow: "hidden",
    objectFit: "cover",
  },

  thumbnailPreviewContainer: {
    marginTop: "1rem",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "200px",
  },

  thumbnailPreview: {
    borderRadius: "6px",
    width: "145px",
    margin: ".5rem",
    cursor: "pointer",
    objectFit: "cover",
  },

  imagePreview: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
  },

  highlightContainer: {
    width: "540px",
    height: "500px",
    margin: "0 auto",
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
