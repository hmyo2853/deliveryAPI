import { Invoice } from "../sweettracker";
import { PropsWithChildren } from "react";
import styles from "./DetailContents.module.sass";
import { Divider, List, ListItem, ListItemText } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faTruck } from "@fortawesome/free-solid-svg-icons";

const DetailContents = ({
  complete,
  estimate,
  invoiceNo,
  itemName,
  lastDetail,
  trackingDetails,
}: PropsWithChildren<Invoice>) => {
  return (
    <div className={styles.DetailContents}>
      <List sx={{ width: "100%" }}>
        <ListItem>
          {estimate !== "" ? (
            <ListItemText
              primary={`송장번호 ${invoiceNo} | ${itemName}`}
              secondary={`도착 예정 시간 ${estimate}`}
            />
          ) : (
            <ListItemText
              primary={`송장번호 ${invoiceNo} | ${itemName}`}
              secondary={`${lastDetail[0].kind}`}
            />
          )}
        </ListItem>
      </List>
      <Divider />
      {complete ? <></> : null}
      {trackingDetails.map((items, i) => (
        <div className={styles.TrackingDetails} key={i}>
          <List sx={{ width: "100%" }}>
            <div className={styles.DetailTime}>{items.timeString}</div>
            <ListItem>
              {items.manName == "" ? (
                <>
                  <FontAwesomeIcon icon={faBox} size="2x" />
                  <ListItemText
                    primary={`[${items.kind}] ${items.where}`}
                    secondary={`${items.telno}`}
                  />
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faTruck} size="2x" />
                  <ListItemText
                    primary={`${items.kind} | ${items.where} | 배달기사 ${items.manName}`}
                    secondary={`${items.telno2}`}
                  />
                </>
              )}
            </ListItem>
          </List>
          <Divider />
        </div>
      ))}
      <div className="description">
        본 정보는 스마트택배에서 제공받는 정보로, 실제 배송상황과 다를 수
        있습니다.
      </div>
    </div>
  );
};

export default DetailContents;
