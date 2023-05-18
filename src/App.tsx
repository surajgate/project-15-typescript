import React, { useState } from "react";
import {
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material";
import { BrowserRouter, Link } from "react-router-dom";
import Routing from "./Routing";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppBar sx={{ backgroundColor: "#feeee9" }} position="static">
          <Container
            sx={{ display: "flex", justifyContent: "space-between", p: 0.5 }}
          >
            <Container sx={{ display: "block", m: 2 }}>
              <Typography variant="h5" color="black">
                The Cocktail DB
              </Typography>
            </Container>

            <List sx={{ display: "flex" }}>
              <ListItem>
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  <Typography
                    variant="h6"
                    color="inherit"
                    sx={{ "&:hover": { color: "#339933" } }}
                  >
                    Home
                  </Typography>
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Typography
                    sx={{ "&:hover": { color: "#339933" } }}
                    variant="h6"
                    color="inherit"
                  >
                    About
                  </Typography>
                </Link>
              </ListItem>
            </List>
          </Container>
        </AppBar>

        <Routing />
      </BrowserRouter>
    </>
  );
};

export default App;
