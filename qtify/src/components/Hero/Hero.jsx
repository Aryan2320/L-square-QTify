import React from "react";
import styles from "./Hero.module.css";
import hero from "../../assets/hero_headphones.png";

function Hero(){
    return(
<div className={styles.hero}>
    <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>over thousands podcast episode</h1>
    </div>
    <div>
        <img src={hero}
        width={212}
        alt="headphones"
        />
    </div>
</div>
    );
}
export default Hero;