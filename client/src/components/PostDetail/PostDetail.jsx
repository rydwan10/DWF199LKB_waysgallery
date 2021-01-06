import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import {
  Avatar,
  Grid,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import { API } from "../../config/api";
import { useHistory, Link } from "react-router-dom";

import Loading from "../Loading/Loading";
import NotFound from "../NotFound/NotFound";

import makeStyles from "./style";

function PostDetail() {
  // eslint-disable-next-line
  const router = useHistory();
  // eslint-disable-next-line
  const [state, dispatch] = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const { id: postId } = useParams();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);
  // eslint-disable-next-line
  const [highlight, setHighlight] = useState(null);
  const classes = makeStyles();

  const handleDelete = async () => {
    setOpen(false);
    try {
      setLoading(true);
      const response = await API.delete("/posts/" + postId);
      if (response.status === 200) {
        setPost(response.data.data.post);

        setLoading(false);
        router.push("/");
      }
    } catch (err) {
      if (err) {
        console.log(err);
        setLoading(false);
      }
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  function DeleteDialog() {
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Delete Confirmation?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure want to delete your post?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleDelete}
              color="secondary"
              autoFocus
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  const getPost = async () => {
    try {
      setLoading(true);
      const response = await API("/posts/" + postId);
      if (response.status === 200) {
        setPost(response.data.data.post);
        setHighlight({ photo: response.data.data.post.photos[0].image });

        setLoading(false);
      }
    } catch (err) {
      if (err) {
        console.log(err);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    getPost();
    // eslint-disable-next-line
  }, []);

  return loading ? (
    <Loading />
  ) : post == null ? (
    <NotFound />
  ) : (
    <div
      style={{
        width: "60%",
        height: "200vh",
        display: "block",
        margin: "2rem auto 0 auto",
      }}
    >
      <DeleteDialog />
      <Grid
        container
        justify="space-between"
        alignItems="center"
        direction="row"
      >
        <Grid item>
          <Grid container alignItems="center">
            <Grid item style={{ marginRight: "1rem" }}>
              <Avatar
                src={`http://localhost:5000/uploads/${post.user.avatar}`}
                className={classes.bgAvatar}
                style={{ cursor: "pointer" }}
                onClick={() => router.push(`/user/${post.user.id}`)}
              />
            </Grid>
            <Grid item>
              <Typography variant="h5" className={classes.postTitle}>
                {post.title}
              </Typography>
              <Typography
                onClick={() => router.push(`/user/${post.user.id}`)}
                variant="body1"
                className={classes.userName}
              >
                {post.user.fullName}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container>
            {post.user.id === state.user.id ? (
              <Button
                style={{
                  fontFamily: "Nunito",
                  textTransform: "capitalize",
                  color: "white",
                  background: "red",
                }}
                onClick={() => setOpen(true)}
                variant="contained"
              >
                Delete
              </Button>
            ) : (
              <>
                <Grid item>
                  <Button className={classes.followButton}>Follow</Button>
                </Grid>
                <Grid item>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/hire/${post.user.id}`}
                  >
                    <Button className={classes.hireButton}>Hire</Button>
                  </Link>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Grid>

      <div className={classes.imagePreviewContainer}>
        <div className={classes.highlightContainer}>
          <img
            className={classes.imagePreview}
            src={
              highlight
                ? `http://localhost:5000/uploads/${highlight.photo}`
                : null
            }
            alt={highlight ? highlight.photo : "null"}
          />
        </div>
      </div>

      <div className={classes.thumbnailPreviewContainer}>
        {post.photos.map((photo, index) => (
          <img
            key={index}
            className={classes.thumbnailPreview}
            src={`http://localhost:5000/uploads/${photo.image}`}
            alt="robox"
            onClick={() => setHighlight({ photo: photo.image })}
          />
        ))}
      </div>

      <div className={classes.postDescriptionContainer}>
        <span className={classes.greeting}>
          👋Say Hello <span className={classes.email}>{post.user.email}</span>
        </span>
        <br />
        <span className={classes.postDescription}>{post.description}</span>
      </div>
    </div>
  );
}

export default PostDetail;
