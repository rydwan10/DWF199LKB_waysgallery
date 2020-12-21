import { Grid, Typography } from "@material-ui/core";

import Item from "../Item/Item";

function List({ user }) {
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
        {`${user.fullName}'s works`}
      </Typography>
      <Grid alignContent="center" spacing={3} container justify="center">
        {!user.arts.length
          ? "No works yet..."
          : user.arts.map((data) => <Item key={data.id} data={data} />)}
      </Grid>
    </>
  );
}

export default List;
