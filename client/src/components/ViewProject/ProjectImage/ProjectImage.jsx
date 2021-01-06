import { useState, useEffect } from "react";
import makeStyles from "./style";

function ProjectImage({ photos }) {
  const classes = makeStyles();
  const [highlight, setHighlight] = useState(null);

  useEffect(() => {
    setHighlight({ photo: photos[0].image });
    // eslint-disable-next-line
  }, []);

  return photos ? (
    <>
      <div className={classes.highlight}>
        <div className={classes.imageHighlightWrapper}>
          <div className={classes.highlightContainer}>
            <img
              className={classes.highlight}
              src={
                highlight
                  ? `http://localhost:5000/uploads/${highlight.photo}`
                  : "null"
              }
              alt="highlight"
            />
          </div>
        </div>
      </div>
      <div className={classes.thumbnailWrapper}>
        {photos.map((photo) => {
          return (
            <div style={{ width: "130px", cursor: "pointer" }}>
              <img
                width="120px"
                src={`http://localhost:5000/uploads/${photo.image}`}
                alt="thumbnail"
                onClick={() => setHighlight({ photo: photo.image })}
              />
            </div>
          );
        })}
      </div>
    </>
  ) : null;
}

export default ProjectImage;
