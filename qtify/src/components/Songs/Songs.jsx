import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// import FilterTab from "../FilterTab/FilterTab";
import FilterTab from "../FilterTab/FilterTab";
import styles from "./Songs.module.css";

const Songs = () => {
  const [songsData, setSongsData] = useState([]);

  const fetchSongs = async () => {
    try {
      const res = await axios.get("https://qtify-backend-labs.crio.do/songs");
      setSongsData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);
  return (
    <div className={styles.songsWrapper}>
      <div className={styles.horizontalBorder1}></div>
      <div>
        <h3 className={styles.tabsTitle}>Songs</h3>
      </div>
      <FilterTab songsData={songsData} />
      <div className={styles.horizontalBorder2}></div>
    </div>
  );
};

export default Songs;