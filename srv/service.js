const cds = require('@sap/cds');

module.exports = cds.service.impl(function () {

  const {
    PurchaseRequisitions,
    PurchaseOrders,
    GoodsReceipts,
    Invoices,
    Payments,
    ProcessFlow
  } = this.entities;

  async function logFlow(entityType, entityID, fromStatus, toStatus, remarks) {
    await INSERT.into(ProcessFlow).entries({
      ID: cds.utils.uuid(),
      entityType,
      entityID,
      fromStatus,
      toStatus,
      remarks
    });
  }

  // PR Submit
  this.on('submitPR', async (req) => {
    await UPDATE(PurchaseRequisitions).set({ status: 'Submitted' }).where({ ID: req.data.ID });
    await logFlow("PR", req.data.ID, "Draft", "Submitted", "PR submitted");
    return { message: "PR Submitted" };
  });

  // PR Approve
  this.on('approvePR', async (req) => {
    await UPDATE(PurchaseRequisitions).set({ status: 'Approved' }).where({ ID: req.data.ID });
    await logFlow("PR", req.data.ID, "Submitted", "Approved", "PR approved");
    return { message: "PR Approved" };
  });

  // Convert to PO
  this.on('convertToPO', async (req) => {
    const po = {
      ID: cds.utils.uuid(),
      poNumber: "PO-" + Date.now(),
      status: "Open",
      pr_ID: req.data.ID,
      quantity: 10
    };

    await INSERT.into(PurchaseOrders).entries(po);
    await logFlow("PR", req.data.ID, "Approved", "Converted", "PR to PO");

    return po;
  });

  // Send PO
  this.on('sendPO', async (req) => {
    await UPDATE(PurchaseOrders).set({ status: 'Sent' }).where({ ID: req.data.ID });
    return { message: "PO Sent" };
  });

  // Goods Receipt
  this.on('createGR', async (req) => {
    const gr = {
      ID: cds.utils.uuid(),
      grNumber: "GR-" + Date.now(),
      status: "Completed",
      po_ID: req.data.po_ID
    };
    await INSERT.into(GoodsReceipts).entries(gr);
    return gr;
  });

  // Invoice
  this.on('createInvoice', async (req) => {
    const inv = {
      ID: cds.utils.uuid(),
      invoiceNumber: "INV-" + Date.now(),
      status: "Verified",
      po_ID: req.data.po_ID
    };
    await INSERT.into(Invoices).entries(inv);
    return inv;
  });

  // Payment
  this.on('processPayment', async (req) => {
    const pay = {
      ID: cds.utils.uuid(),
      paymentNumber: "PAY-" + Date.now(),
      status: "Completed",
      invoice_ID: req.data.invoice_ID
    };
    await INSERT.into(Payments).entries(pay);
    return pay;
  });

});