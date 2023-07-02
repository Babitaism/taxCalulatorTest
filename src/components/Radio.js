import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";

export default function RowRadioButtonsGroup(props) {
  return (
    <FormControl>
      <FormControlLabel
        value={props.label}
        control={<Radio />}
        label={props.label}
      />
    </FormControl>
  );
}
