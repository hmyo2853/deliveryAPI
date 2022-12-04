import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface ExistIcon {
  existIcon: boolean;
  children: string;
  path: string;
}

const Header = ({
  existIcon,
  children,
  path,
}: PropsWithChildren<ExistIcon>) => {
  return (
    <div className={styles.Header}>
      {existIcon ? (
        <Link to={path} relative="path">
          <FontAwesomeIcon icon={faArrowLeft} size="2x" />
        </Link>
      ) : null}
      <span>{children}</span>
    </div>
  );
};

export default Header;
