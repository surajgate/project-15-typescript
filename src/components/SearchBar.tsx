import { Box, Card, Container, OutlinedInput, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterCocktails, setCocktails } from "../Store/Store";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setCocktails(data));
      });
  }, []);

  useEffect(() => {
    dispatch(filterCocktails(searchTerm));
  }, [searchTerm, dispatch]);

  return (
    <>
      <Container sx={{ p: 2, marginTop: 5, marginBottom: 5, width: "100%" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Card
            sx={{
              p: 3,
              maxWidth: "70%",
            }}
          >
            <Box sx={{}}>
              <Typography
                letterSpacing={5}
                variant="h4"
                gutterBottom
                fontSize={16}
                color={"#005a00"}
                fontWeight={"bold"}
                sx={{ p: 1 }}
              >
                Search Your Favourite Cocktail !
              </Typography>
              <OutlinedInput
                autoFocus
                value={searchTerm}
                sx={{
                  "& fieldset": { border: "none" },
                  border: "1px solid #484850",
                  width: "100%",
                  height: "2rem",
                  borderColor: "black",
                }}
                onChange={(e) => setSearchTerm(e.target.value)}
              ></OutlinedInput>
            </Box>
          </Card>
        </Box>
      </Container>
    </>
  );
};
export default SearchBar;
