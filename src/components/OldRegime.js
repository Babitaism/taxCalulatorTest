import "../css/app.css";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Radio from "./Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { oldRegimeInputFactors } from "../utils/oldregimeFactors";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import OldRegimeCalulator from "../utils/oldRegimeCalulator";

function OldRegime() {
  const [num, setNum] = React.useState(0);
  const [tax, setTax] = React.useState(false);
  const infoRef = React.useRef({});

  let key = 0;
  let allFields = [];

  for (let i in oldRegimeInputFactors) {
    let field = oldRegimeInputFactors[i];
    if (field.htmlTAg === "input") {
      allFields.push(
        <TextField
          type={field.type}
          key={key++}
          label={field.text}
          onChange={(e) => gatherInfo(field.key, e.target.value)}
          className="custom-text-field"
        />
      );
    }
  }

  const gatherInfo = (key, value) => {
    infoRef.current[key] = value;
    console.log("num", infoRef);
  };

  const calculateTax = () => {
    let oldRegimeObj = new OldRegimeCalulator(infoRef.current);
    let finalTax = oldRegimeObj.calculateTax()

    console.log('ref', infoRef)
    console.log('finaltax', finalTax)
    setNum(finalTax)
    setTax(true)
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
          Calculate
        </Button>
      </Stack>
      {tax && <div>Total tax: {num}  </div>}

    </div>
  );
}

export default OldRegime;
