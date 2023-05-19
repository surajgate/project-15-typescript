import {
  Box,
  Button,
  CardMedia,
  Container,
  LinearProgress,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
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
  strIngredient2: string;
  strIngredient3: string;
};

const SingleCocktail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  var defaultId = id || "14610";

  var filter = useSelector((state: any) => state.filteredCocktails);
  console.log(filter);

  var singleCocktail = filter.filter((filt: any) => {
    return (
      defaultId && filt.idDrink.toLowerCase().includes(defaultId.toLowerCase())
    );
  });

  const {
    strDrink,
    strDrinkThumb,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
  }: Drinks = singleCocktail[0] || {
    strDrink: "A1",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
    strIngredient1: "Gin",
    strIngredient2: "Grand Marnier",
    strIngredient3: "Lemon Juice",
    strCategory: "Cocktail",
    strAlcoholic: "Alcoholic",
    strGlass: "Cocktail glass",
    strInstructions:
      "Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <>
        <LinearProgress color="success" />
      </>
    );
  }

  return (
    <>
      <Container>
        <Container sx={{ m: 6 }}>
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
          <Box sx={{ display: "flex", justifyContent: "center", m: 2, p: 2 }}>
            <Typography fontWeight={"bold"} variant="h5">
              {strDrink}
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "block", sm: "block", md: "flex" } }}>
            <Box>
              <CardMedia
                component="img"
                src={strDrinkThumb}
                sx={{ width: "30rem", marginRight: "2rem" }}
              ></CardMedia>
            </Box>
            <Box sx={{ m : 4, p : 2}}>
              <Box sx={{ display: "flex", p: 1 }}>
                <Typography paragraph sx={{ml : 1}}>
                  <Box
                    component="span"
                    sx={{
                      borderRadius: "8px",
                      backgroundColor: "#d4e6a5",
                      p: 0.8,
                      fontWeight: "bold",
                      mr: 1,
                    }}
                  >
                    Name :
                  </Box>
                  {strDrink}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", p: 1 }}>
                <Typography paragraph sx={{ml : 1}}>
                  <Box
                    component="span"
                    sx={{
                      borderRadius: "8px",
                      backgroundColor: "#d4e6a5",
                      p: 0.8,
                      fontWeight: "bold",
                      mr: 1,
                    }}
                  >
                    Category :
                  </Box>
                  {strCategory}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", p: 1 }}>
                <Typography paragraph sx={{ml : 1}}>
                  <Box
                    component="span"
                    sx={{
                      borderRadius: "8px",
                      backgroundColor: "#d4e6a5",
                      p: 0.8,
                      fontWeight: "bold",
                      mr: 1,
                    }}
                  >
                    Info :
                  </Box>
                  {strAlcoholic}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", p: 1 }}>
                <Typography paragraph sx={{ml : 1}}>
                  <Box
                    component="span"
                    sx={{
                      borderRadius: "8px",
                      backgroundColor: "#d4e6a5",
                      p: 0.8,
                      fontWeight: "bold",
                      mr: 1,
                    }}
                  >
                    Glass :
                  </Box>
                  {strGlass}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", p: 1 }}>
                <Typography paragraph sx={{ ml: 1 }}>
                  <Box
                    component="span"
                    sx={{
                      borderRadius: "8px",
                      backgroundColor: "#d4e6a5",
                      p: 0.8,
                      fontWeight: "bold",
                      mr: 1,
                      lineHeight: 1.8,
                    }}
                  >
                    Instructions :
                  </Box>
                  {strInstructions}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", p: 1 }}>
                <Typography paragraph sx={{ ml: 1 }}>
                  <Box
                    component="span"
                    sx={{
                      borderRadius: "8px",
                      backgroundColor: "#d4e6a5",
                      p: 0.8,
                      fontWeight: "bold",
                      mr: 1,
                    }}
                  >
                    Ingredients :
                  </Box>
                  {strIngredient1}, {strIngredient2}, {strIngredient3}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default SingleCocktail;
