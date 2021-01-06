import { Typography, Button } from "@material-ui/core";

function Description({ description }) {
  return (
    <div
      style={{
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <div>
        <Typography variant="body1">{description}</Typography>
      </div>
      <div style={{ margin: "0 auto" }}>
        <Button
          style={{
            textTransform: "capitalize",
            background: "#2FC4B2",
            fontFamily: "Nunito",
          }}
          size="large"
          variant="contained"
          color="primary"
        >
          Download
        </Button>
      </div>
    </div>
  );
}

export default Description;
