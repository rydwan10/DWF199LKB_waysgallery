import List from "./List/List";
const WorkList = ({ user }) => {
  return (
    <div style={{ margin: "0 auto", height: "120vh" }}>
      <List user={user} />
    </div>
  );
};

export default WorkList;
