import Header from "./Header";
import styles from "./DetailContents.module.css";

export default (): JSX.Element => {
  return (
    <div className={styles.DetailContents}>
      <Header logoImg={false} path={"/"} existIcon={true} />
      <span>배송 진행 사항</span>
    </div>
  );
};
