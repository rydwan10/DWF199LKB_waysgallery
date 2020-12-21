import { Container, Grid } from "@material-ui/core";
import Form from "./Form/Form";
import FilesUpload from "./FilesUpload/FilesUpload";

function EditProfile() {
  return (
    <div>
      <Container style={{ marginTop: "1rem" }} maxWidth="lg">
        <Grid container justify="center" spacing={3}>
          <Grid item xs={12} sm={6}>
            <FilesUpload />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default EditProfile;
