#  Smart Procure-to-Pay (P2P) System with Workflow Tracking using SAP CAP

##  Overview
This project implements a **Smart Procure-to-Pay (P2P) System** using SAP CAP (Cloud Application Programming Model). It simulates the complete procurement lifecycle followed in SAP systems, from Purchase Requisition to Payment, with workflow tracking and status management.

---

##  Objectives
- Automate the end-to-end procurement lifecycle  
- Track each stage using workflow tracking  
- Simulate real SAP MM (Materials Management) processes  
- Provide backend + UI-based system  

---

##  P2P Workflow
```
Purchase Requisition → Approval → Purchase Order → Goods Receipt → Invoice → Payment
```

---

##  Features

###  End-to-End Process
- Create Purchase Requisition (PR)  
- Approve PR  
- Convert PR to Purchase Order (PO)  
- Process Goods Receipt (GR)  
- Generate Invoice  
- Process Payment  

---

###  Workflow Tracking (Unique Feature)
- Tracks status transitions  
- Maintains process history  
- Simulates real SAP workflow lifecycle  

---

###  Status Lifecycle
```
Draft → Submitted → Approved → Converted → Sent → Received → Verified → Paid
```

---

###  Simple UI (Fiori-like)
- Button-based interface  
- Simulates SAP user actions  
- Connected to backend APIs  

---

##  SAP Mapping

| Process | SAP Transaction Code |
|--------|----------------------|
| Vendor Creation | XK01 |
| Material Creation | MM01 |
| Purchase Requisition | ME51N |
| Purchase Order | ME21N |
| Goods Receipt | MIGO |
| Invoice Verification | MIRO |
| Payment | F110 |

---

##  Tech Stack
- SAP CAP (Node.js)  
- CDS (Core Data Services)  
- JavaScript  
- HTML (Frontend UI)  
- SQLite (Default CAP Database)  

---

##  Project Structure
```
p2p-sap-cap/
│
├── db/
│   └── schema.cds
│
├── srv/
│   └── service.js
│
├── app/
│   └── index.html
│
├── package.json
└── README.md
```

---

##  How to Run

### 1️ Install Dependencies
```bash
npm install
```

### 2️ Start Server
```bash
npm start
```

### 3️ Open Application
```
http://localhost:4004
```

---

##  Screenshots (Add for Submission)
- UI Interface (Buttons)  
- Terminal Running Server  
- API Response Output  
- Workflow Execution  

---

##  Unique Points
- SAP-based real-world project  
- Workflow tracking implementation  
- API-driven architecture  
- Simple UI for demonstration  
- End-to-end lifecycle coverage  

---

##  Future Improvements
- SAP Fiori UI Integration  
- Role-based approval system  
- Vendor & inventory management  
- Dashboard & analytics  

---

##  Conclusion
This project demonstrates a **Smart SAP-based Procure-to-Pay system** with workflow tracking and automation. It replicates enterprise-level SAP MM processes and enhances them with tracking and API-driven execution.

---

## Author
Khushi Kushwaha 
2305460
B.Tech CSE | SAP Project  
