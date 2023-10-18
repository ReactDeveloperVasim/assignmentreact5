import React, { useState } from "react";
import { Employee } from "./components/Employee";
import "./components/common.css";

function App() {
  const [empid, setEmpId] = useState("");
  const [email, setEmail] = useState(" ");
  const [company, setCompany] = useState(" ");

  return (
    <div className="main">
      <div className="child1">
        <input
          type="text"
          placeholder="Emp ID"
          onChange={(e) => setEmpId(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Company Name"
          onChange={(e) => setCompany(e.target.value)}
        />
        <br /> 
      </div>
      <div>
        {" "}
        <Employee empid={empid} email={email} company={company} />
      </div>
    </div>
  );
}

export default App;
