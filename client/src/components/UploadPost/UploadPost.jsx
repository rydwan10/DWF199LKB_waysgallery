import { useState } from "react";
import { Container, Grid } from "@material-ui/core";
import Form from "./Form/Form";
import FilesUpload from "./FilesUpload/FilesUpload";
import Loading from "../Loading/Loading";

function UploadPost() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Container style={{ marginTop: "1rem" }} maxWidth="lg">
            <Grid container justify="center" spacing={3}>
              <Grid item xs={12} sm={6}>
                <FilesUpload files={files} setFiles={setFiles} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Form
                  files={files}
                  setFiles={setFiles}
                  setLoading={setLoading}
                />
              </Grid>
            </Grid>
          </Container>
        </div>
      )}
    </>
  );
}

export default UploadPost;
