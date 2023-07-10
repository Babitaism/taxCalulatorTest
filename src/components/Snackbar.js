import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';

export default function PositionedSnackbar(props) {
  const [state, setState] = React.useState({
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal } = state;

  const handleClose = () => {
    props.test(false)
  }

  return (
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={props.open}
        onClose={handleClose}
        message= {props.message}
        key={vertical + horizontal}
      />
  );
}
