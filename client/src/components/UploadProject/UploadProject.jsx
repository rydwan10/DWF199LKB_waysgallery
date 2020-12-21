import { Container, Grid } from "@material-ui/core";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../config/api";
import { AppContext } from "../../context/AppContext";
import { SET_MODAL } from "../../constant/ActionTypes";

import Form from "./Form/Form";
import FilesUpload from "./FilesUpload/FilesUpload";

function UploadProject() {
  const { id } = useParams();
  const [files, setFiles] = useState([]);
  // eslint-disable-next-line
  const [state, dispatch] = useContext(AppContext);

  const handleSendProject = async (data) => {
    if (files.length <= 0) {
      return dispatch({
        type: SET_MODAL,
        payload: {
          isOpen: true,
          message: "Please attach your project",
        },
      });
    }
    try {
      const body = new FormData();
      body.append("orderId", id);
      body.append("description", data);
      for (const file of files) {
        body.append("images", file);
      }

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const response = await API.post("/project", body, config);
      if (response.status === 201) {
        dispatch({
          type: SET_MODAL,
          payload: {
            isOpen: true,
            message: "Project has been sent!",
          },
        });
        setFiles([]);
      }
    } catch (err) {
      dispatch({
        type: SET_MODAL,
        payload: {
          isOpen: true,
          message: "Oppss.. something went wrong!",
        },
      });
      console.log(err.response);
    }
  };
  return (
    <div>
      <Container style={{ marginTop: "1rem" }} maxWidth="lg">
        <Grid container justify="center" spacing={3}>
          <Grid item xs={12} sm={6}>
            <FilesUpload files={files} setFiles={setFiles} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Form handleSendProject={handleSendProject} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default UploadProject;
