
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import './App.css';
import TopAlbums from "./components/TopAlbums/TopAlbums";
import NewAlbums from "./components/NewAlbums/NewAlbums";
 import Hero from "./components/Hero/Hero";
 import Songs from "./components/Songs/Songs";



function App() {
  return(
  <StyledEngineProvider injectFirst>
    <Navbar />
    <Hero/>
    <TopAlbums/>
    <NewAlbums/>
    <Songs/>
  </StyledEngineProvider>
      
   
  );
}

export default App;
