import Menu from "components/menu";
import styles from "./_.module.scss";

const Layout = (children) => {
  return (
    <div className="main">
      <header className={`${styles.header} flex`}>
        <div className="flex-1">
          <Menu />
        </div>
        <div className="flex flex-1 flex-col items-center"></div>
        <div className="flex-1 "></div>
      </header>
      {children}
    </div>
  );
};

export default Layout;
