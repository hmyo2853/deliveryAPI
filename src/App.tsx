import "./App.css";
import { useState } from "react";
import { Delivery } from "./sweettracker";
import { useQuery } from "react-query";

function App() {
  const API_KEY = import.meta.env.VITE_API_KEY;

  /** api 데이터 받아오기 */
  const getData = async (): Promise<void> => {
    // company 가져오기
    // const response = await fetch(
    //   `http://info.sweettracker.co.kr/api/v1/companylist?t_key=${API_KEY}`
    // );
    // const json = await response.json();
    // console.log(json.Company);
  };
  const { data, isLoading, isError } = useQuery("delivery", getData);

  return (
    <div className="App">
      <h1>내가 편하게 조회하고 싶어서 만든 조회 페이지</h1>
    </div>
  );
}

export default App;
