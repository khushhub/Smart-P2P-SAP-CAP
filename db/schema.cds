namespace p2p;

entity PurchaseRequisitions {
  key ID : UUID;
  prNumber : String;
  status : String;
  material : String;
  quantity : Integer;
}

entity PurchaseOrders {
  key ID : UUID;
  poNumber : String;
  status : String;
  pr_ID : UUID;
  quantity : Integer;
}

entity GoodsReceipts {
  key ID : UUID;
  grNumber : String;
  status : String;
  po_ID : UUID;
}

entity Invoices {
  key ID : UUID;
  invoiceNumber : String;
  status : String;
  po_ID : UUID;
}

entity Payments {
  key ID : UUID;
  paymentNumber : String;
  status : String;
  invoice_ID : UUID;
}

entity ProcessFlow {
  key ID : UUID;
  entityType : String;
  entityID : UUID;
  fromStatus : String;
  toStatus : String;
  remarks : String;
}