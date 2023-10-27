import React from "react";
import { Link } from "react-scroll";
import styles from "./Home.module.css";
<link rel="styles" href="./Home.module.css"></link>
const Home = () => {
  return (
    <div name="Home" className={styles.home}>
      <div className={styles.titleContainer}>
        <p>
          Lineadatascan <br />
          <b>App Gestión</b>
        </p>
      </div>
      <div className={styles.ctaContainer}>
    
      <Link 
      to="contact"
      smooth
      duration={500}
      className={styles.callToAction}>
        ingresa aqui
      </Link>
   
    </div></div>
  );
};

export default Home;
