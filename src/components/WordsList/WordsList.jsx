import { useContext } from 'react';
import { WordsContext } from 'components/App';
import { WordsListItem } from './WordsListItem';

export const WordsList = () => {
  const { getFilterWords, handleDeleteWord } = useContext(WordsContext);
  return (
    <ul>
      {getFilterWords.map(word => (
        <WordsListItem
          key={word.id}
          id={word.id}
          enWord={word.enWord}
          ukWord={word.ukWord}
          onDeleteWord={() => handleDeleteWord(word.id)}
        />
      ))}
    </ul>
  );
};
