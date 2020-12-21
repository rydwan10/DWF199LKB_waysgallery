import { Grid } from "@material-ui/core";

import Item from "../Item/Item";

function List({ posts }) {
  return (
    <>
      <Grid alignContent="center" spacing={3} container justify="center">
        {posts.map((data) => (
          <Item key={data.id} data={data} />
        ))}
      </Grid>
    </>
  );
}

export default List;
