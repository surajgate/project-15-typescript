import React, {useEffect, useState} from "react";
import { Box, Card, Container, OutlinedInput, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { filterCocktails, setCocktails } from "../Store/Store";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const SearchBar = () => {

const [searchTerm, setSearchTerm] = useState('');

const dispatch = useDispatch();
useEffect(() => {
    dispatch(filterCocktails(searchTerm))
}, [searchTerm, dispatch])

const [data, setData] = useState();

useEffect(() => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      
      dispatch(setCocktails(data));
    //   console.log(data);
      
    });
}, []);

  return (
    <>
      <Container sx={{ p: 2, marginTop : 5, marginBottom : 5 }}>
        <Card sx={{ display: "flex", justifyContent: "center", p: 2 }}>
          <Box sx={{ alignItems: "center" }}>
            <Typography variant="h4" gutterBottom>
              Search Your Favourite Cocktail !
            </Typography>
            <OutlinedInput value = {searchTerm} sx={{ width: "100%" }} onChange={(e)=>setSearchTerm(e.target.value)}></OutlinedInput>
          </Box>
        </Card>
      </Container>
    </>
  );
};
export default SearchBar;

