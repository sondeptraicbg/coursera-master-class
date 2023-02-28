import Menu from "components/menu";
import Lottie from "lottie-react";
import styles from "./_.module.scss";

import logo from "constants/logo.json";

const Layout = (children) => {
  return (
    <div className="main">
      <header className={`${styles.header} flex`}>
        <div className="flex-1">
          <Menu />
        </div>
        <div className="flex flex-1 flex-col items-center">
          {/* <Lottie
            animationData={logo}
            style={{ maxWidth: "5rem", minWidth: "2rem" }}
            loop={false}
          /> */}
          <p>Learning English</p>
        </div>
        <div className="flex-1 "></div>
      </header>
      {children}
    </div>
  );
};

export default Layout;
