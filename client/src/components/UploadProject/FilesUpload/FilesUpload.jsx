import UploadPlaceholder from "../../../assets/img/UploadPlaceholder.png";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import ImageBox from "./ImageBox";

function File({ files, setFiles }) {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files

    // Fix later
    setFiles([...files, ...acceptedFiles]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  console.log(files);
  return (
    <>
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
              // className={classes.input}
              style={{ display: "none" }}
              id="single-file-upload"
              multiple
              type="file"
            />
          </>
        )}
      </div>
      <ImageBox files={files} />
    </>
  );
}

export default File;
