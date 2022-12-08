import Header from "./Header";
import styles from "./DetailContents.module.css";
import { PropsWithChildren } from "react";
import { Invoice } from "../sweettracker";

const DetailContents = ({
  completeYN,
  complete,
  estimate,
  invoiceNo,
  itemName,
  trackingDetails,
}: PropsWithChildren<Invoice>) => {
  return (
    <div className={styles.DetailContents}>
      <Header logoImg={false} path={"/"} existIcon={true} />
      <div className="trackingInvoice_wrap">
        <div className="trackingTitle">
          <span>{completeYN}</span>
          <span>{complete}</span>
          <span>{estimate}</span>
          <span>{invoiceNo}</span>
          <span>{itemName}</span>
        </div>
        <div>
          {trackingDetails.map((items) => (
            <div className="trackingDetails">
              <div>{items.kind}</div>
              <div>{items.manName}</div>
              <div>{items.telno}</div>
              <div>{items.telno2}</div>
              <div>{items.where}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailContents;
