import { Container, Grid } from "@material-ui/core";
import Description from "./Description/Description";
import ProjectImage from "./ProjectImage/ProjectImage";

import { useEffect, useState } from "react";
import { API } from "../../config/api";
import { useParams } from "react-router-dom";

import Loading from "../Loading/Loading";
function ViewProject() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id: orderId } = useParams();
  const getMyOrder = async () => {
    try {
      setLoading(true);
      const response = await API(`/project/${orderId}`);
      if (response.status === 200) {
        setData(response.data.data.project);
        setLoading(false);
      }
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    getMyOrder();
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <div>
      <Container style={{ marginTop: "1rem" }} maxWidth="lg">
        <Grid container justify="center" spacing={3}>
          <Grid item xs={12} sm={6}>
            <ProjectImage photos={data.photos} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Description description={data.description} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ViewProject;
