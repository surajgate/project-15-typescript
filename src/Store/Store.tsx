import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";



interface Cocktail {
  idDrink: string;
  strDrink: string;
  strGlass: string;
  strCategory: string;
  strDrinkThumb: string;
  strAlcoholic: string;
}

interface AppState {
  cocktails: Cocktail[];
  filterCocktails: Cocktail[];
}

const initialState: AppState = {
  cocktails: [],
  filterCocktails: [],
};

const cocktailSlice = createSlice({
  name: "cocktails",
  initialState,
  reducers: {
    setCocktails: (state, action: PayloadAction<Cocktail[]>) => {
      state.cocktails = action.payload
      state.filterCocktails = action.payload
      console.log(state.cocktails);
      
    },
    filterCocktails: (state, action: PayloadAction<string>) => {
      const searchTerm = action.payload.toLowerCase();
      state.filterCocktails = state.cocktails.filter((cocktail: any) =>
        cocktail.strDrink.toLowerCase().includes(searchTerm)
      );
    },
  },
});

export const { setCocktails, filterCocktails } = cocktailSlice.actions;

export const store = configureStore({
  reducer: cocktailSlice.reducer,
});
