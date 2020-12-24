import UploadPlaceholder from "../../../assets/img/UploadPlaceholder.png";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import ImageBox from "./ImageBox";
import { Button } from "@material-ui/core";
import { API } from "../../../config/api";

import { useContext, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import {
  SET_MODAL,
  USER_LOADED,
  AUTH_ERROR,
} from "../../../constant/ActionTypes";

import Modal from "../../Modal/Modal";

function File() {
  const [files, setFiles] = useState([]);
  const [state, dispatch] = useContext(AppContext);

  const loadUser = async () => {
    try {
      const response = await API("/check-auth");
      dispatch({
        type: USER_LOADED,
        payload: {
          user: response.data.data,
        },
      });
    } catch (err) {
      console.log(err);
      if (err) {
        return dispatch({
          type: AUTH_ERROR,
        });
      }
    }
  };
  const handleUploadArts = async () => {
    if (files.length <= 0) {
      dispatch({
        type: SET_MODAL,
        payload: {
          isOpen: true,
          message: "Choose art to upload!",
        },
      });
    } else {
      try {
        const body = new FormData();

        body.append("userId", state.user.id);

        for (const file of files) {
          body.append("images", file);
        }

        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
        const response = await API.post("/upload-arts", body, config);
        if (response.status === 201) {
          dispatch({
            type: SET_MODAL,
            payload: {
              isOpen: true,
              message: "Arts Uploaded!",
            },
          });
          setFiles([]);
          loadUser();
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
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    // Fix later
    setFiles([...files, ...acceptedFiles]);
    // eslint-disable-next-line
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <>
      <Modal />
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <>
            <img
              src={UploadPlaceholder}
              alt="upload placeholder"
              width="565px"
              htmlFor="single-file-upload"
            />
            <input
              onChangeCapture={(e) => {
                setFiles((prevState, props) => [
                  ...prevState,
                  { file: e.target.files[0] },
                ]);

                // setFiles([...files, { file: e.target.files[0] }]);
              }}
              accept="image/*"
              style={{ display: "none" }}
              id="single-file-upload"
              multiple
              type="file"
            />
          </>
        )}
      </div>
      <ImageBox files={files} />
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <Button
          variant="contained"
          style={{
            color: "white",
            background: "#2FC4B2",
            fontFamily: "Nunito",
            textTransform: "capitalize",
            fontWeight: "700",
            fontSize: "1.1rem",
          }}
          onClick={handleUploadArts}
        >
          Upload Arts
        </Button>
      </div>
    </>
  );
}

export default File;
