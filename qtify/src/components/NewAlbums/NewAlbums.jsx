import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./NewAlbums.module.css";
import Carousel from "../Carousel/Carousel";

const NewAlbums = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(true);

  const fetchNewAlbums = async () => {
    try {
      const res = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/new"
      );
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNewAlbums();
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div className={styles.newHeader}>
        <h3>New Albums</h3>
        <h3 className={styles.newToggletext} onClick={handleToggle}>
          {toggle ? "Show all" : "Collapse"}
        </h3>
      </div>
      <div className={styles.newalbumsWrapper}>
        {!toggle ? (
          <div className={styles.newAlbums}>
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

export default NewAlbums;