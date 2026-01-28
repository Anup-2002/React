import {useState } from "react";

export function EMICalualator(){
    const [loanAmount,setLoanAmount]=useState(25000);
    const [years,setYears]=useState(1);
    const [Rate,setRate]=useState(10.45);
    function handleAmountChange(e){
        setLoanAmount(e.target.value);
        calculateEMI();
    }
    function handleYearsChange(e){
        setYears(e.target.value);
        calculateEMI();
    }
    function handleRateChange(e){
        setRate(e.target.value);
        calculateEMI();
    }
    function calculateEMI(){
        var p=parseFloat(loanAmount);
        var r=parseFloat(Rate)/12/100;
        var n=parseFloat(years)*12;
        var emi=(p*r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1);
        return emi.toFixed(2);
    }
    return(
        <div className="container-fluid" style={{height:"100vh"}}>
            <h2>EMI Calculator Component</h2>
            <div className="row">
                <div className="col-8">
                    <div className="row my-3">
                        <div className="d-flex justify-content-between">
                        <label className="form-label fw-bold">Loan Amount</label>
                        <input type="text" className="form-control w-25" value={`${loanAmount.toLocaleString('en-IN',{style:'currency',currency:'INR',minimumFractionDigits:0,maximumFractionDigits:0})}`} onChange={handleAmountChange} />
                        </div>
                        <div className="mt-2"> 
                            <div>
                            <input type="range" className="form-range" max="1000000" min="25000" step="1000" value={loanAmount} onChange={handleAmountChange} />
                            </div>
                            <div>
                                <span>&#8377;25000/-</span>
                                <span className="float-end">&#8377;1000000/-</span>
                            </div>
                        </div>
                    </div>
                    <div className="row my-3">
                        <label className="form-label fw-bold">Loan Tenure</label>
                        <div>
                            <input type="range" className="form-range" max="7" min="1" step="1" value={years} onChange={handleYearsChange} />
                        </div>
                        <div>
                            <span> 1 Years</span>
                            <span className="float-end"> 7 Years</span>
                        </div>
                    </div>      
                    <div className="row">
                        <label className="form-label fw-bold">Interest Rate</label>
                        <div>
                            <input type="range" className="form-range " max="20" min="1" step="0.1" value={Rate} onChange={handleRateChange} />

                        </div>
                        <div>
                            <span> 1%</span>
                            <span className="float-end"> 20%</span>
                        </div>
                    </div>    
                    <div>
                        <button className="btn btn-primary" onClick={calculateEMI}>Calculate EMI</button>    
                        <h3 className="mt-3">EMI Amount: &#8377; {calculateEMI()}</h3>
                    </div>   
                </div>
                <div className="col-4">
                    <div className="row">
                        <div className="card text-white bg-info mb-3">
                            <div className="card-header">Loan Amount</div>
                            <div className="card-body">
                                <h5 className="card-title">&#8377; {loanAmount}</h5>
                            </div>
                        </div>

                        <div className="card text-white bg-success mb-3">   
                            <div className="card-header">Interest Rate</div>
                            <div className="card-body"></div>
                                <h5 className="card-title">{Rate} %</h5>
                            </div>
                        </div>
                        <div className="card text-white bg-danger mb-3">
                            <div className="card-header">Loan Tenure</div>
                            <div className="card-body">
                                <h5 className="card-title">{years} Years</h5>
                            </div>
                        </div>
                        
                        <div className="card text-white bg-primary mb-3">
                                <div className="card-header">EMI Amount</div>
                                <div className="card-body">
                                    <h5 className="card-title">&#8377; {calculateEMI()}</h5>
                                </div>
                        </div>
                </div>

            </div>
        </div>
        
    );  
}