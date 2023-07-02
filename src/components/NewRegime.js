import React from "react";
import {  Link } from "react-router-dom";
import "../css/app.css"

function NewRegime(){

function inputTable(){
    return (
        <div>
<form className="form" onSubmit={handleSubmit}>
  <label className="bsal" for="bsalary">Basic Salary:</label>
  <input type="number" id="bsalary" name="bsalary"></input><br></br><br></br>
  <label className = "hrarec" for="hrareceived">HRA Received:</label>
  <input type="number" id="hrareceived" name="hrareceived"></input><br></br><br></br>
  <label  className="arp" for="actualrentpaid">Actual Rent Paid:</label>
  <input type="number" id="actualrentpaid" name="actualrentpaid"></input><br></br><br></br>
  <label  className="city" for="city">City(Metro/Non-Metro):</label>
  <input type="text" id="city" name="city"></input><br></br><br></br>
  <label className="hraexam" for="hraexem">HRA Exemption:</label>
  <input  type="number" id="hraexem" name="hraexem"></input><br></br><br></br>
  <label className="lta"for="lta">LTA Claimed:</label>
  <input  type="number" id="lta" name="lta"></input><br></br><br></br>
  <label className="speall" for="specialallowance">Special Allowance:</label>
  <input  type="number" id="specialallowance" name="specialallowance"></input><br></br><br></br>
  <label  className="osi" for="othersourceincome">Other Source Income:</label>
  <input type="number" id="othersourceincome" name="othersourceincome"></input><br></br><br></br>
  <label  className="sd" for="standarddeduction">Standard Deduction:</label>
  <input type="number" id="standarddeduction" name="standarddeduction"></input><br></br><br></br>
  <label className="c80" for="80Cdeduction">80C Deduction:</label>
  <input  type="number" id="80Cdeduction" name="80Cdeduction"></input><br></br><br></br>
  <label className="cc80" for="80CCdeduction">80CC Deduction:</label>
  <input type="number" id="80CCdeduction" name="80CCdeduction"></input><br></br><br></br>
  <label  className="d80" for="80Ddeduction">80D Deduction:</label>
  <input type="number" id="80Ddeduction" name="80Ddeduction"></input><br></br><br></br>
  <label className="tta80" for="80TTAdeduction">80TTA Deduction:</label>
  <input type="number" id="80TTAdeduction" name="80TTAdeduction"></input><br></br><br></br>
  <input type="submit" value="Calculate Income Tax"></input>
</form>
</div>
)
}



function handleSubmit(){

}

return(
    <div>
{inputTable()}
<pre className="hi">For New Regime,click on below New Regime Tab</pre>
<Link className="link" style={{ textDecoration: "none" }} to="/newregime">
          New Regime
        </Link>
    </div>
)
}

export default NewRegime