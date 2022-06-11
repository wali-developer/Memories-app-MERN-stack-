import { AppBar, Container, Grid, Grow, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Posts from "./components/posts/Posts";
import Form from "./components/form/Form";
import useStyles from "./styles";
import { getPosts } from "./actions/posts";

function App() {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit" className={classes.appBar}>
        <Typography variant="h2" align="center" className={classes.heading}>
          Memories
        </Typography>
        <img
          src="memories.png"
          alt="memory logo"
          height={60}
          className={classes.image}
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
