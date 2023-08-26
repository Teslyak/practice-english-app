import { TextField } from '@mui/material';
import React from 'react';

const Filter = ({ handleChange }) => {
  return (
    <div>
          <TextField id="outlined-basic" label="search" variant="outlined" onChange={handleChange}/>
    </div>
  )
}

export default Filter
