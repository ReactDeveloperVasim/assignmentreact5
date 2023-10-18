import React from "react";

export const Employee=({empid,email,company})=>{
    return(
        <div className="sub">
            <h1>Employee Details</h1>
            <h3>Employee Id : {empid}</h3>
            <h3>Employee Email : {email}</h3>
            <h3> Company Name : {company}</h3>
        </div>
    );
}