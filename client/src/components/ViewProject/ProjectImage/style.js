import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  highlight: {
    width: "540px",
    borderRadius: "6px",
    overflow: "hidden",
    objectFit: "cover",
    display: "flex",
    justifyContent: "center",
    marginBottom: "1rem",
  },

  thumbnailWrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
  },
}));
