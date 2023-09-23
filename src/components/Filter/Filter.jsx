import { TextField } from '@mui/material';
import { useContext } from 'react';
import { WordsContext } from 'components/App';

const Filter = () => {
  const { filter, handleChangeFilter } = useContext(WordsContext);
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="search"
        variant="outlined"
        onChange={handleChangeFilter}
        value={filter}
      />
    </div>
  );
};

export default Filter;
