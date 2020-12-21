import makeStyles from "./style";

function ProjectImage({ photos }) {
  const classes = makeStyles();

  return photos ? (
    <>
      <div className={classes.highlight}>
        <img
          src={`http://localhost:5000/uploads/${photos[0].image}`}
          alt="highlight"
        />
      </div>
      <div className={classes.thumbnailWrapper}>
        {photos.map((photo) => {
          return (
            <div style={{ width: "130px" }}>
              <img
                width="120px"
                src={`http://localhost:5000/uploads/${photo.image}`}
                alt="thumbnail"
              />
            </div>
          );
        })}
      </div>
    </>
  ) : null;
}

export default ProjectImage;
