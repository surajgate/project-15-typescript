import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import drinks from "../data";
import SingleCocktail from "./SingleCocktail";

type Drinks = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strAlcoholic: string;
  strGlass: string;
  strCategory: string;
};

const Cocktails = () => {
  return (
    <>
      <Container>
        <Box sx={{ display: "flex" }}>
          {drinks.map((drink) => {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strAlcoholic,
              strGlass,
              strCategory,
            }: Drinks = drink;

            return (
              <Container>
                <Box>
                  <Box>
                    <Card key={idDrink} sx={{ p: 0.5, alignItems : 'center', alignContent : 'center' }}>
                      <CardMedia
                        sx={{ width: "20rem" }}
                        component="img"
                        src={strDrinkThumb}
                      ></CardMedia>
                      <Typography variant="h4">{strDrink}</Typography>
                      <Typography paragraph>{strGlass}</Typography>

                      <Typography paragraph>{strCategory}</Typography>
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Button>Details</Button>
                      </Box>
                    </Card>
                  </Box>
                </Box>
              </Container>
            );
          })}
        </Box>
      </Container>
    </>
  );
};

export default Cocktails;
