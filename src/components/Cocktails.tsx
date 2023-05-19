import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

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

  var filter = useSelector((state: any) => state.filteredCocktails);

  return (
    <>
      <Container>
        <Box
          sx={{
            display: { xs: "none", md: "flex", sm: "flex" },
            justifyContent: "center",
            m: 2,
          }}
        >
          <Typography
            letterSpacing={3}
            fontWeight={"bold"}
            variant="h4"
          >
            Cocktails{" "}
          </Typography>
        </Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {filter.map((drink: any) => {
            return (
              <Grid item xs={2} sm={4} md={4}>
                <Card
                  key={drink.idDrink}
                  sx={{
                    p: 0,
                    alignItems: "center",
                    alignContent: "center",
                    height : '100%'
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <CardMedia
                      sx={{ width: "100%", }}
                      component="img"
                      src={drink.strDrinkThumb}
                    ></CardMedia>
                  </Box>
                  <Box sx={{ p: 2 }}>
                    <Typography
                      letterSpacing={3}
                      fontWeight={"bold"}
                      variant="h4"
                    >
                      {drink.strDrink}
                    </Typography>
                    <Typography
                      letterSpacing={3}
                      fontWeight={"bold"}
                      paragraph
                      sx={{ marginTop: 2 }}
                    >
                      {drink.strGlass}
                    </Typography>

                    <Typography color={"grey"} letterSpacing={3} paragraph>
                      {drink.strCategory}
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        "&:hover": { backgroundColor: "#006600" },
                        backgroundColor: "#339933",
                        color: "white",
                        textTransform: "none",
                      }}
                      onClick={() => {
                        
                        navigate(`/single/${drink.idDrink}`);
                      }}
                    >
                      Details
                    </Button>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Cocktails;
