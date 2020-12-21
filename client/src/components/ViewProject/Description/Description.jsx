import { Typography } from "@material-ui/core";

function Description({ description }) {
  return (
    <>
      <Typography variant="body1">{description}</Typography>
    </>
  );
}

export default Description;
