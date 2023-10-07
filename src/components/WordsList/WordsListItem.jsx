import React, { useState, useContext } from 'react';
import { TextField } from '@mui/material';
import { WordsContext } from 'components/App';
import { useDispatch } from 'react-redux';
import { changeWord, deleteWord } from 'redux/wordSlice';

export const WordsListItem = ({ enWord, ukWord, onDeleteWord, id }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [edditedEnWord, setEdditedEnWord] = useState(enWord);
  const [edditedUkWord, setEdditedUkWord] = useState(ukWord);

  const dispatch = useDispatch();

  const { handelEditWord } = useContext(WordsContext);

  const handleEdit = () => {
    setIsEditMode(prev => !prev);
    if (edditedUkWord !== ukWord || edditedEnWord !== enWord) {
      dispatch(
        changeWord({ id, ukWord: edditedUkWord, enWord: edditedEnWord })
      );
    }
  };

  const editEnWord = evt => {
    setEdditedEnWord(evt.target.value);
  };
  const editUkWord = evt => {
    setEdditedUkWord(evt.target.value);
  };

  return (
    <li>
      <div style={{ display: 'flex' }}>
        <div style={{ margin: '6px 20px' }}>
          {isEditMode ? (
            <TextField
              variant="outlined"
              value={edditedEnWord}
              onChange={editEnWord}
            />
          ) : (
            <span>{enWord}</span>
          )}
        </div>
        :
        <div style={{ margin: '6px 20px' }}>
          {isEditMode ? (
            <TextField
              variant="outlined"
              value={edditedUkWord}
              onChange={editUkWord}
            />
          ) : (
            <span>{ukWord}</span>
          )}
        </div>
      </div>
      <button onClick={handleEdit}>{isEditMode ? 'Save' : 'Edit'}</button>
      <button onClick={() => dispatch(deleteWord(id))}>Delete</button>
    </li>
  );
};
