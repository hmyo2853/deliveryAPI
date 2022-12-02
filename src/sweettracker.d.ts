export interface CompanyList {
  Code: string;
  International: string;
  Name: string;
}

export interface Invoice {
  adUrl: string;
  complete: boolean;
  invoiceNo: string;
  itemImage: string;
  itemName: string;
  level: number;
  receiverAddr: string;
  receiverName: string;
  recipient: string;
  result: string;
  senderName: string;
  trackingDetails: [
    {
      kind: string;
      level: number;
      manName: string;
      manPic: string;
      telno: string;
      telno2: string;
      timeString: string;
      where: string;
      code: null;
      remark: null;
    }
  ];
  orderNumber: null;
  estimate: string;
  productInfo: null;
  zipCode: null;
  lastDetail: {
    kind: string;
    level: number;
    manName: string;
    manPic: string;
    telno: string;
    telno2: string;
    timeString: string;
    where: string;
    code: null;
    remark: null;
  };
  lastStateDetail: {
    kind: string;
    level: number;
    manName: string;
    manPic: string;
    telno: string;
    telno2: string;
    timeString: string;
    where: string;
    code: null;
    remark: null;
  };
  firstDetail: {
    kind: string;
    level: number;
    manName: string;
    manPic: string;
    telno: string;
    telno2: string;
    time: number;
    timeString: string;
    where: string;
    code: null;
    remark: null;
  };
  completeYN: string;
}
