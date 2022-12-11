import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import { blue } from "@mui/material/colors";

import { CompanyList, Invoice } from "../sweettracker";
import Header from "../components/Header";
import LoadingSkeleton from "../components/LoadingSkeleton";
// supabase API key 가져오기
import { supabase } from "../supabaseClient";

const Home: React.FC = () => {
  const [deliveryKey, setDeliveryKey] = useState<string>("");
  const [invoiceNum, setInvoiceNum] = useState<string>("");
  const [isCompanyOption, setCompanyOption] = useState<string>("");
  const [isSelectValue, setSelectValue] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);
  const navigate: NavigateFunction = useNavigate();

  /** supabase get api key */
  const getStaticProps = async () => {
    const TABLE_NAME = "delivery-api-key";
    const { data } = await supabase.from(TABLE_NAME).select("delivery");
    data?.map((items) => {
      setDeliveryKey(items.delivery);
    });
  };

  /** mui theme color customization */
  const theme = createTheme({
    palette: {
      primary: {
        main: blue["A700"],
      },
    },
  });

  /** invoice, company url */
  const INVOICE_URL = (
    deliveryKey: string,
    isCompanyOption: string,
    invoiceNum: string
  ) =>
    `http://info.sweettracker.co.kr/api/v1/trackingInfo?t_key=${deliveryKey}&t_code=${isCompanyOption}&t_invoice=${invoiceNum}`;
  const COMPANY_URL = (deliveryKey: string) =>
    `http://info.sweettracker.co.kr/api/v1/companylist?t_key=${deliveryKey}`;

  /** api company list 데이터 받아오기 */
  const fetchCompany = async (): Promise<CompanyList[] | void> => {
    if (!deliveryKey) return setDisabled(true);

    return fetch(COMPANY_URL(deliveryKey)).then(async (_res) => {
      if (!_res.ok)
        throw new Error(`HTTP Error : status code is ${_res.status}`);
      const _json = await _res.json();
      const _company = _json.Company as CompanyList[];
      setDisabled(false);
      return _company;
    });
  };

  /** 송장번호로 조회시 invoice 데이터 받아오기 */
  const fetchInvoice = async (): Promise<Invoice[] | void> => {
    return fetch(INVOICE_URL(deliveryKey, isCompanyOption, invoiceNum)).then(
      async (_res) => {
        // response error
        if (!_res.ok)
          throw new Error(`HTTP Error : status code is ${_res.status}`);
        const _json = await _res.json();
        // server data error
        if (_json.code == "104") {
          alert("운송장 번호와 택배사를 확인해주세요.");
          throw new Error(`>>>> HTTP 104 Error : ${_json.msg}`);
        } else if (_json.code == "105") {
          alert(
            "오늘 해당 운송장 조회 수가 초과되었습니다. 내일 다시 조회해주세요."
          );
          throw new Error(`>>>> HTTP 105 Error : ${_json.msg}`);
        }
        navigate("/detail", { state: _json });
      }
    );
  };

  /** 조회시 submit 동작 함수 */
  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInvoiceNum(event.target.value);
  };

  /** option 선택시 state로 company 값 저장 */
  const muiSelectOptChange = (e: SelectChangeEvent) => {
    setCompanyOption(e.target.value as string);
    setSelectValue(e.target.value as string);
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
  } = useQuery("invoice", fetchInvoice, {
    enabled: false,
    refetchOnWindowFocus: false, // window focus 설정
  });

  useEffect(() => {
    getStaticProps();
  }, []);

  // data를 가져올 때 모두 loading
  if (_comLoading) return <LoadingSkeleton />;

  // company data를 못불러올 경우
  if (_comIsError)
    return <h2>${(_comError as Error).message} :: Unable to load data.</h2>;

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header path={""} existIcon={false} logoImg={true} />
        <div className="home_wrap">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth disabled={disabled}>
              <InputLabel id="demo-simple-select-label">택배사 선택</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="택배사 선택"
                value={isSelectValue}
                onChange={muiSelectOptChange}
              >
                {_comData?.map((_data, i) => (
                  <MenuItem key={i} value={_data.Code}>
                    {_data.Name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <form className="home_submit" onSubmit={onSubmitForm}>
            <TextField
              id="outlined-basic"
              label="운송장번호"
              variant="outlined"
              onChange={onChangeInput}
              value={invoiceNum}
              type="number"
            />
            <Button
              onClick={fetchInvoice}
              variant="contained"
              size="large"
              disableElevation
            >
              조회하기
            </Button>
          </form>
          <div className="description">
            본 정보는 스마트택배에서 제공받는 정보로, 실제 배송상황과 다를 수
            있습니다.
          </div>
        </div>
      </div>
      {}
    </ThemeProvider>
  );
};

export default Home;
