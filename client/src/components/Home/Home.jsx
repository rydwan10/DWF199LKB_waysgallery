import { useState, useEffect } from "react";
import { API } from "../../config/api";
import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
  Container,
  Typography,
  Grid,
} from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import WorkList from "./WorkList/WorkList";
import Loading from "../Loading/Loading";

function Home() {
  const [posts, setPosts] = useState(null);
  const [type, setType] = useState("today");
  const [loading, setLoading] = useState(true);

  const getPost = async () => {
    try {
      setLoading(true);
      const response = await API(`/posts`);
      if (response.status === 200) {
        setPosts(response.data.data.posts);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <Container style={{ marginTop: "2rem" }}>
      <div>
        <Grid container justify="space-between">
          <Grid item>
            <FormControl
              size="small"
              variant="outlined"
              style={{
                marginBottom: "1.2rem",
              }}
            >
              <Select
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                }}
                // className={classes.selectArtist}
                displayEmpty
              >
                <MenuItem value="today">Today</MenuItem>
                <MenuItem value="all">All</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              id="input-with-icon-textfield"
              placeholder="search"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlined />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </div>
      <Typography style={{ marginBottom: "1rem" }} variant="h5">
        Today's Post
      </Typography>

      {/* <Gallery onClick={(e) => alert(e.target.id)} photos={photoObj} /> */}
      <WorkList posts={posts} />
    </Container>
  );
}

export default Home;
