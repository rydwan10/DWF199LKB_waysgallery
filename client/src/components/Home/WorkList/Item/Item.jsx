import { Card, CardMedia, CardActionArea, makeStyles } from "@material-ui/core";

import { Link } from "react-router-dom";

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
      <Link to={`/post/${data.id}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`http://localhost:5000/uploads/${data.photos[0].image}`}
          />
        </CardActionArea>
      </Link>
    </Card>
  );
}

export default Item;
