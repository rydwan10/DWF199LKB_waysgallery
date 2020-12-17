import { Grid, Typography } from "@material-ui/core";
import dummyData from "./dummyData";

import Item from "../Item/Item";

function List() {
  return (
    <>
      <Typography
        style={{
          fontFamily: "Nunito",
          fontWeight: "bold",
          marginBottom: "1rem",
          marginTop: "5rem",
        }}
        variant="h5"
      >
        Dave Mustaine's Works
      </Typography>
      <Grid alignContent="center" spacing={3} container justify="center">
        {dummyData.map((data) => (
          <Item key={data.id} data={data} />
        ))}
      </Grid>
    </>
  );
}

export default List;
