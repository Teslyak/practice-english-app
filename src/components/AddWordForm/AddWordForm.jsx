import styled from '@emotion/styled';
import { TextField, Button } from '@mui/material';
import { nanoid } from 'nanoid';
import { useReducer } from 'react';

const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
`;

const initialState = { ukWord: '', enWord: '' };

function reducer(state, action) {
  switch (action.type) {
    case 'setValue':
      return { ...state, [action.payload.name]: action.payload.value };
    case 'reset':
      return initialState;

    default:
      return state;
  }
}

export const AddWordForm = ({ addNewWord }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [ukWord, setUkWord] = useState('');
  // const [enWord, setEnWord] = useState('');

  const handleChange = evt => {
    dispatch({
      type: 'setValue',
      payload: { value: evt.target.value, name: evt.target.name },
    });
  };

  return (
    <Form
      onSubmit={evt => {
        evt.preventDefault();
        addNewWord({
          id: nanoid(5),
          ukWord: state.ukWord,
          enWord: state.enWord,
        });
        dispatch({ type: 'reset' });
      }}
    >
      <TextField
        onChange={handleChange}
        id="enWord"
        name="enWord"
        label="English Word"
        variant="standard"
        value={state.enWord}
      />
      <TextField
        onChange={handleChange}
        id="ukWord"
        name="ukWord"
        label="Ukrainian Word"
        variant="standard"
        value={state.ukWord}
      />
      <Button type="submit" variant="outlined">
        Add word
      </Button>
    </Form>
  );
};
