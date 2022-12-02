import "./App.css";
import { CompanyList, Delivery } from "./sweettracker";
import { useQuery } from "react-query";

function App() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = `http://info.sweettracker.co.kr/api/v1/companylist?t_key=${API_KEY}`;

  /** api company list 데이터 받아오기 */
  const fetchCompany = async (): Promise<CompanyList[] | void> => {
    return fetch(URL).then(async (_res) => {
      if (!_res.ok)
        throw new Error(`HTTP Error : status code is ${_res.status}`);
      const _json = await _res.json();
      const _company = _json.Company as CompanyList[];
      return _company;
    });
  };

  const { data, isLoading, isError } = useQuery("delivery", fetchCompany);

  if (isLoading) return <h2>Loading...</h2>;
  return (
    <div className="App">
      <h1>내가 편하게 조회하고 싶어서 만든 택배 송장 조회 페이지</h1>
      <select>
        {data?.map((_data, i) => (
          <option key={i} value={_data.Name}>
            [{_data.International}], {_data.Code}, {_data.Name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
