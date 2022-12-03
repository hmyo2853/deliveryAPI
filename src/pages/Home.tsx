import { CompanyList, Invoice } from "../sweettracker";
import { useQuery } from "react-query";

function Home() {
  const API_KEY = import.meta.env.VITE_API_KEY;
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

  /** invoice post 데이터 받아오기 */
  const fetchInvoice = async (): Promise<Invoice[] | void> => {
    return fetch(INVOICE_URL).then(async (_res) => {
      if (!_res.ok)
        throw new Error(`HTTP Error : status code is ${_res.status}`);
      const _json = await _res.json();
      console.log(_json);
    });
  };

  const { data, isLoading, isError, error } = useQuery("company", fetchCompany);
  // const { data, isLoading, isError } = useQuery("invoice", fetchInvoice);

  if (isLoading) return <h2>Loading...</h2>;

  if (isError)
    return <h2>${(error as Error).message} :: Unable to load data.</h2>;

  return (
    <div className="App">
      <h1>내가 편하게 조회하고 싶어서 만든 택배 송장 조회 페이지</h1>
      <select>
        {data?.map((_data, i) => (
          <option key={i} value={_data.Code}>
            {_data.Name}
          </option>
        ))}
      </select>
      <form>
        <input type={"text"}></input>
        <button>조회</button>
      </form>
    </div>
  );
}

export default Home;
