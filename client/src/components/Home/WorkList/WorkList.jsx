// import { Grid } from "@material-ui/core";
import List from "./List/List";
const WorkList = ({ posts }) => {
  return (
    <div style={{ margin: "0 auto", height: "120vh" }}>
      <List posts={posts} />
    </div>
  );
};

export default WorkList;
