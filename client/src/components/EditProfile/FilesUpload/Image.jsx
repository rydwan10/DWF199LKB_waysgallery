function Image({ file }) {
  return (
    <div
      style={{
        borderRadius: "6px",
        border: "2px dotted grey",
        width: "100px",
        height: "100px",
        overflow: "hidden",
      }}
    >
      <img
        width="100px"
        src={URL.createObjectURL(file)}
        alt="Placeholder Preview"
      />
    </div>
  );
}

export default Image;
