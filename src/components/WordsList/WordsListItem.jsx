import React from 'react';

export const WordsListItem = ({ enWord, ukWord, onDeleteWord }) => {
  return (
    <li>
      <p>
        {enWord}: {ukWord}
      </p>
      <button onClick={onDeleteWord}>Delete</button>
    </li>
  );
};
