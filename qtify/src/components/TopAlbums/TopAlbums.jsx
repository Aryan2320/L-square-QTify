import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./TopAlbums.module.css";
import Carousel from "../Carousel/Carousel";

const TopAlbums = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(true);

  const fetchTopAlbums = async () => {
    try {
      const res = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/top"
      );
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTopAlbums();
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={styles.topWrapper}>
      <div className={styles.topHeader}>
        <h3>Top Albums</h3>
        <h3 className={styles.toggleText} onClick={handleToggle}>
          {toggle ? "Show all" : "Collapse"}
        </h3>
      </div>
      <div className={styles.topalbumWrapper}>
        {!toggle ? (
          <div className={styles.topAlbums}>
            {data.map((item) => (
              <Card data={item} type="album" key={item.id} />
            ))}
          </div>
        ) : (
          <Carousel
            data={data}
            renderCardComponent={(item) => <Card data={item} type="album" />}
          />
        )}
      </div>
    </div>
  );
};

export default TopAlbums;