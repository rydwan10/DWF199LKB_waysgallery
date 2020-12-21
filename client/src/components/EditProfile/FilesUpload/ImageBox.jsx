import Image from "./Image";
import NoFile from "../../../assets/img/NoFile.png";
function ImageBox({ files }) {
  console.log(files);
  return (
    <div
      style={{
        display: "grid",
        minWidth: "40%",
        gridTemplateColumns: "1fr 1fr 1fr 1fr ",
        gap: "1rem",
        marginTop: "1rem",
      }}
    >
      {files.length ? (
        files.map((file) => <Image file={file} />)
      ) : (
        <>
          <div>
            <img src={NoFile} alt="No File..." height="80px" width="100px" />
          </div>
          <div>
            <img src={NoFile} alt="No File..." height="80px" width="100px" />
          </div>
          <div>
            <img src={NoFile} alt="No File..." height="80px" width="100px" />
          </div>
          <div>
            <img src={NoFile} alt="No File..." height="80px" width="100px" />
          </div>
        </>
      )}
    </div>
  );
}

export default ImageBox;
