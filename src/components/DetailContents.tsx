import Header from "./Header";
import styles from "./DetailContents.module.css";

export default (): JSX.Element => {
  return (
    <div className={styles.DetailContents}>
      <Header path={"/"} existIcon={true} children={"상세 페이지 입니다."} />
      <span>배송 진행 사항</span>
    </div>
  );
};
