import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Grid,
  makeStyles,
} from "@material-ui/core";

function Item({ data }) {
  const useStyles = makeStyles({
    root: {
      width: 225,
      overflow: "hidden",
      display: "inline-block",
    },
    media: {
      height: 225,
    },
  });

  const classes = useStyles();

  return (
    <Card
      style={{
        background: "#363954",
        color: "white",
        borderRadius: "6px",
        margin: ".8rem",
      }}
      className={classes.root}
    >
      <CardActionArea onClick={() => alert("clicked")}>
        <CardMedia className={classes.media} image={data.attachment} />
        {/* <CardContent>
          </CardContent> */}
      </CardActionArea>
    </Card>
  );
}

export default Item;
