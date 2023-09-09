import { TextField } from '@mui/material';
import React from 'react';

const Filter = ({ handleChange, value }) => {
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="search"
        variant="outlined"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default Filter;
