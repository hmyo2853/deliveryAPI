export interface CompanyList {
  Code: string;
  International: string;
  Name: string;
}

export interface Invoice {
  complete: boolean;
  completeYN: string;
  estimate: string | null;
  invoiceNo: string;
  itemName: string;
  lastStateDetail: {
    kind: string;
  };
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
