export interface CompanyList {
  Code: string;
  International: string;
  Name: string;
}

export interface Invoice {
  complete: boolean;
  completeYN: string;
  estimate: string;
  invoiceNo: string;
  itemName: string;
  lastDetail: [
    {
      kind: string;
    }
  ];
  trackingDetails: [
    {
      kind: string;
      manName: string;
      telno: string;
      telno2: string;
      timeString: string;
      where: string;
    }
  ];
}

export interface firebaseData {
  delivery: string;
}

export interface Supabase {
  delivery: string;
}
