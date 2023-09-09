import React from 'react';
import { WordsListItem } from './WordsListItem';

export const WordsList = ({ words, onDeleteWord }) => {
  return (
    <ul>
      {words.map(word => (
        <WordsListItem
          key={word.id}
          id={word.id}
          enWord={word.enWord}
          ukWord={word.ukWord}
          onDeleteWord={() => onDeleteWord(word.id)}
        />
      ))}
    </ul>
  );
};
