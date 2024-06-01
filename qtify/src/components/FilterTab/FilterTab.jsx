import React, { useState } from "react";
import {Tabs,Tab,Box}  from "@mui/material";
import styles from "./FilterTab.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

const allSongsTabs = ["All", "Rock", "Pop", "Jazz", "Blues"];

const FilterTab = ({ songsData }) => {
  const [value, setValue] = useState(0);

  const _handleTabs = (e, val) => {
    setValue(val);
  };

  function TabPanel(props) {
    const { children, value, index } = props;
    return <div>{value === index && <>{children}</>}</div>;
  }

  

  const filteredData = (tabIndex) => {
    if (tabIndex === 0) {
      return songsData;
    } else {
      const tabLabel = ["Rock", "Pop", "Jazz", "Blues"];
      const selectedGenre = tabLabel[tabIndex - 1];
      return songsData.filter(
        (item) => item.genre.key === selectedGenre.toLowerCase()
      );
    }
  };

  

  return (
    <div className={styles.filtertabsWrapper}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={_handleTabs}
            aria-label="basic tabs"
            id="filter-tabs"
          >
            {allSongsTabs.map((each) => (
              <Tab label={each} key={each} sx={{ color: "white" }} />
            ))}
          </Tabs>
        </Box>

        {allSongsTabs.map((_, index) => (
          <TabPanel key={index} value={value} index={index}>
            <div className={styles.songsWrapper}>
              <Carousel
                data={filteredData(index)}
                renderCardComponent={(item) => (
                  <Card data={item} type="songs" />
                )}
              />
            </div>
          </TabPanel>
        ))}
      </Box>
    </div>
  );
};

export default FilterTab;