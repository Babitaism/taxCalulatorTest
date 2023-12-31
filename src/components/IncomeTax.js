import "../css/app.css";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Radio from "./Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { oldRegimeInputFactors } from "../utils/oldregimeFactors";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import OldRegimeCalulator from "../utils/oldRegimeCalulator";
import NewRegimeCalulator from "../utils/newRegimeCalculator";
import Modal from './Modal'
import PositionedSnackbar from "./Snackbar";

function IncomeTax() {
  const [num, setNum] = React.useState(0);
  const [tax, setTax] = React.useState(false);
  const [eightyC, setEightyC] = React.useState("");
  const [eightyCCD, setEightyCCD] = React.useState("");
  const [ltaBilledValue, setLtaBilledValue] = React.useState("");
  const [ltaBilled, setLtaBilled] = React.useState(false);
  const [citymsg, setCitymsg] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal} = state;
  const infoRef = React.useRef({});

  const test = (arg) =>{
    setOpen(arg)
  }

  let key = 0;
  let allFields = [];

  for (let i in oldRegimeInputFactors) {
    let field = oldRegimeInputFactors[i];
    if (field.htmlTAg === "input" && (field.key !== "ltaBilled" || ltaBilled)) {
      allFields.push(
        <TextField
          onBlur={(e) => onBlurField(field.key, e.target.value)}
          type={field.type}
          key={key++}
          label={field.text}
          onChange={(e) => gatherInfo(field.key, e.target.value, field.max)}
          className="custom-text-field"
        />
      );

      if (field.key === "80C") {
        allFields.push(
          <pre className="error" key="80c">
            {eightyC}
          </pre>
        );
      }

      if (field.key === "80CCD") {
        allFields.push(
          <pre className="error" key="80ccd">
            {eightyCCD}
          </pre>
        );
      }

      if (field.key === "ltaBilled") {
        allFields.push(
          <pre className="error" key="ltaBilled">
            {ltaBilledValue}
          </pre>
        );
      }
    }
  }

  const onBlurField = (key, value) => {
    if (key === "ltaReceived" && value !== "") {
      setLtaBilled(true);
    }
    if (key === "ltaReceived" && value === "") {
      setLtaBilled(false);
    }
  };

  const gatherInfo = (key, value, max) => {
    if (key === "80C" && value > max) {
      setEightyC(`Max value allowed: ${max}`);
      value = max;
    }

    if(key === 'city' && value !== ''){
      setCitymsg('')
    }

    if (key === "80C" && value < max) {
      setEightyC("");
      value = max;
    }

    if (key === "80CCD" && value > max) {
      setEightyCCD(`Max value allowed: ${max}`);
      value = max;
    }

    if (key === "80CCD" && value < max) {
      setEightyCCD("");
      value = max;
    }

    if (
      key === "ltaBilled" &&
      parseInt(infoRef.current.ltaReceived) < parseInt(value)
    ) {
      let max = infoRef.current.ltaReceived;
      setLtaBilledValue(
        `You cannot exceed LTA Billed Value more than LTA Received and that is ${max}`
      );
      value = max;
    }

    if (
      key === "ltaBilled" &&
      parseInt(infoRef.current.ltaReceived) > parseInt(value)
    ) {
      let max = infoRef.current.ltaReceived;
      setLtaBilledValue("");
      value = max;
    }

    infoRef.current[key] = value;
    console.log("num", infoRef);
  };

  const calculateTax = () => {
    if (!['Non Metro', 'Metro'].includes(infoRef.current.city)) {
      setCitymsg("You have not choosen city, and choosing city is mandatory");
      return
    }

    let oldRegimeObj = new OldRegimeCalulator(infoRef.current);
    let finalTax = oldRegimeObj.calculateTax();
    setNum(finalTax);
    setTax(true);
    setOpen(true)
  };

  const calculateTaxNewRegime = () => {
    let newRegimeObj = new NewRegimeCalulator(infoRef.current);
    let finalTax = newRegimeObj.calculateIncomeTax();
    setNum(finalTax);
    setTax(true);
    setOpen(true)
  };

  const printRadio = () => {
    let radioButtons = [];
    for (let i in oldRegimeInputFactors) {
      let field = oldRegimeInputFactors[i];
      if (field.htmlTAg === "radio") {
        for (let j in field.values) {
          radioButtons.push(
            <Radio label={field.values[j]} key={field.values[j]} />
          );
        }
      }
    }
    return (
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={infoRef.current.key}
        onChange={(e) => gatherInfo("city", e.target.value)}
      >
        {radioButtons}
        { citymsg.length !== 0 && <pre className="error">{citymsg}</pre>}
      </RadioGroup>
    );
  };

  return (
    <div className="all-fields">
      {allFields}
      {printRadio()}
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          onClick={() => {
            calculateTax();
          }}
        >
         Calculate As Per Old Regime
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            calculateTaxNewRegime();
          }}
        >
          Calculate As Per New Regime
        </Button>
      </Stack>
      <br></br>
      <PositionedSnackbar  message = {num} open={open} test={test}/>
       {/* <Modal open={open} message={num} test={test} /> */}
    </div>
  );
}

export default IncomeTax;
