import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { MouseEvent, useState } from "react";
import { useNavigate } from "react-router";
// import drinks from "../data";
import SingleCocktail from "./SingleCocktail";
import { useSelector } from "react-redux";
import { filterCocktails } from "../Store/Store";

type Drinks = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strAlcoholic: string;
  strGlass: string;
  strCategory: string;
};

const Cocktails = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");

  const handleClick = (e: MouseEvent) => {
    // setShowComponent(true);
    // navigate(`/single`)
    e.preventDefault();
  };

  var filter = useSelector((state: any) => state.filteredCocktails);
  console.log(filter);
  console.log(typeof filter);

  return (
    <>
      <Container>
        {/* <Box sx={{ display: "flex" }}> */}
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {filter.map((drink: any) => {
            // const {
            //   idDrink,
            //   strDrink,
            //   strDrinkThumb,
            //   strAlcoholic,
            //   strGlass,
            //   strCategory,
            // }: Drinks = drink;

            return (
              // <Container>
              //   <Box>
              //     <Box>
              <Grid item xs={2} sm={4} md={4}>
                <Card
                  key={drink.idDrink}
                  sx={{
                    p: 0.5,
                    alignItems: "center",
                    alignContent: "center",
                  }}
                >
                  <CardMedia
                    sx={{ width: "20rem" }}
                    component="img"
                    src={drink.strDrinkThumb}
                  ></CardMedia>
                  <Typography variant="h4">{drink.strDrink}</Typography>
                  <Typography paragraph>{drink.strGlass}</Typography>

                  <Typography paragraph>{drink.strCategory}</Typography>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                    variant="contained"
                      sx={{ "&:hover": { backgroundColor: "#339933" } ,backgroundColor: "#339933", color : 'white', m : 2 }}
                      onClick={() => {
                        navigate(`/single/${drink.idDrink}`);
                      }}
                    >
                      Details
                    </Button>
                  </Box>
                </Card>
              </Grid>
              //     </Box>
              //   </Box>
              // </Container>
            );
          })}
        </Grid>
        {/* </Box> */}
      </Container>
    </>
  );
};

export default Cocktails;
