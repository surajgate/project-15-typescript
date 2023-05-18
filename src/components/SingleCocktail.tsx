import { Box, Button, CardMedia, Container, LinearProgress, Typography } from "@mui/material";
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

  if(isLoading){
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
            <Box sx={{ p: 2, m: 4 }}>
              <Box sx={{ display: "flex", p: 1 }}>
                <Box
                  sx={{
                    borderRadius: "15%",
                    backgroundColor: "#d4e6a5",
                    p: 0.8,
                    height: "10%",
                    fontWeight: "bold",
                  }}
                >
                  {/* <Typography fontSize={18} variant="h6"> */}
                  Name :{/* </Typography> */}
                </Box>
                <Box sx={{ marginLeft: "1.22rem", marginTop: "5px" }}>
                  <Typography paragraph>{strDrink}</Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", p: 1 }}>
                <Box
                  sx={{
                    borderRadius: "15%",
                    backgroundColor: "#d4e6a5",
                    p: 0.8,
                    height: "10%",
                    fontWeight: "bold",
                  }}
                >
                  {/* <Typography fontSize={18} variant="h6"> */}
                  Category :{/* </Typography> */}
                </Box>
                <Box sx={{ marginLeft: "1.22rem", marginTop: "5px" }}>
                  <Typography paragraph>{strCategory}</Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", p: 1 }}>
                <Box
                  sx={{
                    borderRadius: "15%",
                    backgroundColor: "#d4e6a5",
                    p: 0.8,
                    height: "10%",
                    fontWeight: "bold",
                  }}
                >
                  {/* <Typography fontSize={18} variant="h6"> */}
                  Info :{/* </Typography> */}
                </Box>
                <Box sx={{ marginLeft: "1.22rem", marginTop: "5px" }}>
                  <Typography paragraph>{strAlcoholic}</Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", p: 1 }}>
                <Box
                  sx={{
                    borderRadius: "15%",
                    backgroundColor: "#d4e6a5",
                    p: 0.8,
                    height: "10%",
                    fontWeight: "bold",
                  }}
                >
                  {/* <Typography fontSize={18} variant="h6"> */}
                  Glass :{/* </Typography> */}
                </Box>
                <Box sx={{ marginLeft: "1.22rem", marginTop: "5px" }}>
                  <Typography paragraph>{strGlass}</Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", p: 1 }}>
                <Box
                  sx={{
                    borderRadius: "15%",
                    backgroundColor: "#d4e6a5",
                    p: 0.8,
                    height: "10%",
                    fontWeight: "bold",
                  }}
                >
                  {/* <Typography
                    fontSize={18}
                    sx={{
                      width: "7rem",
                    }}
                    variant="h6"
                  > */}
                  Instructions :{/* </Typography> */}
                </Box>
                <Box sx={{ marginLeft: "1.22rem", marginTop: "5px" }}>
                  <Typography paragraph>{strInstructions}</Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", p: 1 }}>
                <Box
                  sx={{
                    borderRadius: "15%",
                    backgroundColor: "#d4e6a5",
                    p: 0.8,
                    height: "10%",
                    fontWeight: "bold",
                  }}
                >
                  {/* <Typography fontSize={18} variant="h6"> */}
                  Ingredients :{/* </Typography> */}
                </Box>
                <Box sx={{ marginLeft: "1.22rem", marginTop: "5px" }}>
                  <Typography paragraph>
                    {strIngredient1}, {strIngredient2}, {strIngredient3}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default SingleCocktail;
