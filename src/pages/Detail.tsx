import DetailContents from "../components/DetailContents";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import { Invoice } from "../sweettracker";

interface RouteState {
  state: Invoice;
}

const Detail = () => {
  const state = (useLocation() as RouteState).state;
  return (
    <div className="Detail">
      <Header path={"/"} existIcon={true} logoImg={true} />
      <DetailContents
        completeYN={state.completeYN}
        complete={state.complete}
        estimate={state.estimate}
        invoiceNo={state.invoiceNo}
        itemName={state.itemName}
        trackingDetails={state.trackingDetails}
      />
    </div>
  );
};

export default Detail;
