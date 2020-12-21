import { Grid, Container } from "@material-ui/core";

import HeroTitle from "./HeroTitle/HeroTitle";
import HeroImage from "./HeroImage/HeroImage";

import landingDecoration1 from "../../assets/landingDecoration1.svg";

function Landing() {
  return (
    <>
      <img
        style={{
          width: "130px",
          float: "left",
          left: 0,
          zIndex: "2",
        }}
        src={landingDecoration1}
        alt="decoration 1"
      />
      <Container>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <HeroTitle />
          </Grid>
          <Grid item>
            <HeroImage />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Landing;
