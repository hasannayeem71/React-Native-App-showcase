import React from "react";
import assets from "../assets";
import styles from "../styles/Global";
const Download = ({ codeLink }) => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center `}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText} `}>
            Download the Source Code
          </h1>
          <p className={`${styles.pText} ${styles.blackText} `}>
            Get the full source code on gitHub
          </p>
        </div>
        <button
          onClick={() => window.open(codeLink, "_blank")}
          className={styles.btnPrimary}
        >
          Source Code
        </button>
        <div className={styles.flexCenter}>
          <img
            src={assets.scene}
            alt="Download_png"
            className={styles.fullImg}
          />
        </div>
      </div>
    </div>
  );
};

export default Download;
