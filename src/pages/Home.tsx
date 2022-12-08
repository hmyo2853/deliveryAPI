import React, { useState } from "react";
import { CompanyList, Invoice } from "../sweettracker";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Detail from "./Detail";

const Home: React.FC = () => {
  const API_KEY = import.meta.env.VITE_SECRET_API_KEY;
  const [invoiceNum, setInvoiceNum] = useState<string>("");
  const [isMain, setIsMain] = useState<boolean>(true);

  /** invoice, company url */
  const INVOICE_URL = `http://info.sweettracker.co.kr/api/v1/trackingInfo?t_key=${API_KEY}&t_code=04&t_invoice=563295922011`;
  const COMPANY_URL = `http://info.sweettracker.co.kr/api/v1/companylist?t_key=${API_KEY}`;

  /** api company list 데이터 받아오기 */
  const fetchCompany = async (): Promise<CompanyList[] | void> => {
    return fetch(COMPANY_URL).then(async (_res) => {
      if (!_res.ok)
        throw new Error(`HTTP Error : status code is ${_res.status}`);
      const _json = await _res.json();
      const _company = _json.Company as CompanyList[];
      return _company;
    });
  };

  /** 송장번호로 조회시 invoice 데이터 받아오기 */
  const fetchInvoice = async (): Promise<Invoice[] | void> => {
    return fetch(INVOICE_URL).then(async (_res) => {
      if (!_res.ok)
        throw new Error(`HTTP Error : status code is ${_res.status}`);
      const _json = await _res.json();
      console.log(_json);
      console.log(`보낸 invoice Num : ${invoiceNum}`);
    });
  };

  /** 조회시 submit 동작 함수 */
  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInvoiceNum(event.target.value);
    console.log(invoiceNum);
  };

  const {
    data: _comData,
    isLoading: _comLoading,
    isError: _comIsError,
    error: _comError,
  } = useQuery("company", fetchCompany);

  const {
    data: _invData,
    isLoading: _invLoading,
    isError: _invIsError,
    error: _invError,
  } = useQuery("invoice", fetchInvoice, { enabled: false });

  // data를 가져올 때 모두 loading
  if (_comLoading) return <h2>Loading...</h2>;

  // company data를 못불러올 경우
  if (_comLoading)
    return <h2>${(_comError as Error).message} :: Unable to load data.</h2>;

  return isMain ? (
    <div className="App">
      <Header path={""} existIcon={false} logoImg={true} />
      <div>택배 송장 조회 페이지</div>
      <select>
        {_comData?.map((_data, i) => (
          <option key={i} value={_data.Code}>
            {_data.Name}
          </option>
        ))}
      </select>
      <form onSubmit={onSubmitForm}>
        <input
          value={invoiceNum}
          type={"text"}
          onChange={onChangeInput}
        ></input>
        <Button onClick={fetchInvoice} text={"조회하기"} />
      </form>
    </div>
  ) : (
    <Detail />
  );
};

export default Home;
