import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <div name="Services" className={styles.services}>
      <p>Nuestra empresa le ofrece esta app</p>
      <img
        className={styles.webImage}
        src={require("../assets/Lily.jpg")}
      ></img>
    </div>
  );
};

export default Services;
