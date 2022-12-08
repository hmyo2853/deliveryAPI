import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface ExistIcon {
  logoImg: boolean;
  existIcon: boolean;
  path: string;
}

const Header = ({ logoImg, existIcon, path }: PropsWithChildren<ExistIcon>) => {
  return (
    <div className={styles.Header}>
      {existIcon ? (
        <Link to={path} relative="path">
          <FontAwesomeIcon icon={faArrowLeft} size="2x" />
          {logoImg ? (
            <img src="/src/assets/deliveryAPI-logo.png" alt="logo" />
          ) : null}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
