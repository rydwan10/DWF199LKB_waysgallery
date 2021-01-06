import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  thumbnailWrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
  },

  highlightContainer: {
    width: "540px",
    height: "430px",
    margin: "0 auto",
  },
  highlight: {
    height: "75%",
    width: "100%",
    objectFit: "contain",
  },
}));
