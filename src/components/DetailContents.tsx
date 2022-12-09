import { Invoice } from "../sweettracker";
import { PropsWithChildren } from "react";

const DetailContents = ({
  completeYN,
  complete,
  estimate,
  invoiceNo,
  itemName,
  trackingDetails,
}: PropsWithChildren<Invoice>) => {
  return (
    <div>
      <div className="trackingInvoice_wrap">
        <div className="trackingTitle">
          <span>{completeYN}</span>
          <span>{complete}</span>
          <span>{estimate}</span>
          <span>{invoiceNo}</span>
          <span>{itemName}</span>
        </div>
        <div>
          {trackingDetails.map((items, i) => (
            <div className="trackingDetails" key={i}>
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
