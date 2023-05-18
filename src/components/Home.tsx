import { LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Cocktails from "./Cocktails";
import SearchBar from "./SearchBar";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

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
      <SearchBar />
      <Cocktails />
    </>
  );
};

export default Home;
