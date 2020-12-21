import { Container, Grid } from "@material-ui/core";
import Form from "./Form/Form";

function Hired() {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container justify="center" spacing={3}>
          <Grid item xs={12} sm={12}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Hired;
