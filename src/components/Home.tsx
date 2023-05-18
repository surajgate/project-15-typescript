import { Box, Card, Container, OutlinedInput, Typography } from '@mui/material'
import React from 'react'
import SearchBar from './SearchBar';
import Cocktails from './Cocktails';
import SingleCocktail from './SingleCocktail';

const Home = () => {
  return (
    <>
      <SearchBar/>
      <Cocktails/>
      {/* <SingleCocktail/> */}
    </>
  );
}

export default Home