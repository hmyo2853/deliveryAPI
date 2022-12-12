import DetailContents from "../components/DetailContents";
import Header from "../components/Header";
import { useLocation, useParams } from "react-router-dom";
import { Invoice } from "../sweettracker";
import Home from "./Home";

interface RouteState {
  state: Invoice;
}

const Detail = () => {
  const state = (useLocation() as RouteState).state;
  // /detail로 강제 이동하거나 state값이 없을때 home으로 보내기
  if (state === null) {
    return <Home />;
  }
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
        lastStateDetail={state.lastStateDetail}
      />
    </div>
  );
};

export default Detail;
