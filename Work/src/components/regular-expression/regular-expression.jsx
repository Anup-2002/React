import { useState } from "react";

export function ExpressionDemo() {


    const [regex] = useState(/(?=.*[A-Z])\w{4,15}/);
    const [passx] = useState("Abcde123");

    return (
        <>

            <div className="container-fluid fs-4 p-4 text-center
            ">Password Test: {passx}</div>
            <div className="container-fluid fs-4 p-4 text-center
            ">Password Test Result: {passx.match(regex) ? "Valid" : "Invalid"}</div>
        </>
    );
}   