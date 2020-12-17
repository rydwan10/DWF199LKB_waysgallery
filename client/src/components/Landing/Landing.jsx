import { Grid, Container } from "@material-ui/core";

import HeroTitle from "./HeroTitle/HeroTitle";
import HeroImage from "./HeroImage/HeroImage";

function Landing() {
  return (
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
  );
}

export default Landing;
