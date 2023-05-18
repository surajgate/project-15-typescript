import { Box, Button, CardMedia, Container, Typography } from "@mui/material";
import React from "react";
import { Data } from "../data";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";

type Drinks = {
  strDrink: string;
  strDrinkThumb: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strIngredient1: string;
};

const SingleCocktail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  var filter = useSelector((state: any) => state.filteredCocktails);
  console.log(filter);

  var singleCocktail = filter.filter((filt: any) => {
    return id && filt.idDrink.toLowerCase().includes(id.toLowerCase());
  });

  const {
    strDrink,
    strDrinkThumb,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
    strIngredient1,
  }: Drinks = singleCocktail[0];

  return (
    <>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "center", m: 6 }}>
          <Button
            variant="contained"
            color={"success"}
            sx={{ width: "10rem", backgroundColor: "#339933" }}
            onClick={() => {
              navigate("/");
            }}
          >
            Back Home
          </Button>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box>
            <CardMedia
              component="img"
              src={strDrinkThumb}
              sx={{ width: "30rem", marginRight: "2rem" }}
            ></CardMedia>
          </Box>
          <Box sx={{ p: 2 }}>
            <Box sx={{ display: "flex", p: 0.5 }}>
              <Box
                sx={{ borderRadius: "1rem", backgroundColor: "#80c080", p: 1 }}
              >
                <Typography variant="h6">Name :</Typography>
              </Box>
              <Box sx={{ marginLeft: "1.22rem", marginTop: "5px" }}>
                <Typography paragraph>{strDrink}</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", p: 1 }}>
              <Box
                sx={{ borderRadius: "1rem", backgroundColor: "#80c080", p: 1 }}
              >
                <Typography variant="h6">Category :</Typography>
              </Box>
              <Box sx={{ marginLeft: "1.22rem", marginTop: "5px" }}>
                <Typography paragraph>{strCategory}</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", p: 1 }}>
              <Box
                sx={{ borderRadius: "1rem", backgroundColor: "#80c080", p: 1 }}
              >
                <Typography variant="h6">Info :</Typography>
              </Box>
              <Box sx={{ marginLeft: "1.22rem", marginTop: "5px" }}>
                <Typography paragraph>{strAlcoholic}</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", p: 1 }}>
              <Box
                sx={{ borderRadius: "1rem", backgroundColor: "#80c080", p: 1 }}
              >
                <Typography variant="h6">Glass :</Typography>
              </Box>
              <Box sx={{ marginLeft: "1.22rem", marginTop: "5px" }}>
                <Typography paragraph>{strGlass}</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", p: 1 }}>
              <Box
                sx={{
                  borderRadius: "1rem",
                  backgroundColor: "#80c080",
                  p: 1,
                  height: "2.5rem",
                }}
              >
                <Typography
                  sx={{
                    width: "7rem",
                  }}
                  variant="h6"
                >
                  Instructons :
                </Typography>
              </Box>
              <Box sx={{ marginLeft: "1.22rem", marginTop: "5px" }}>
                <Typography paragraph>{strInstructions}</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", p: 1 }}>
              <Box
                sx={{ borderRadius: "1rem", backgroundColor: "#80c080", p: 1 }}
              >
                <Typography variant="h6">Ingredients :</Typography>
              </Box>
              <Box sx={{ marginLeft: "1.22rem", marginTop: "5px" }}>
                <Typography paragraph>{strIngredient1}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default SingleCocktail;
