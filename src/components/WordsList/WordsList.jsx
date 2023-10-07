import { useContext } from 'react';
import { WordsContext } from 'components/App';
import { WordsListItem } from './WordsListItem';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectWords } from 'redux/selectors';

export const WordsList = () => {
  // const { getFilterWords, handleDeleteWord } = useContext(WordsContext);
  const words = useSelector(selectWords);
  return (
    <ul>
      {words.map(word => (
        <WordsListItem
          key={word.id}
          id={word.id}
          enWord={word.enWord}
          ukWord={word.ukWord}
          onDeleteWord={() => {}}
        />
      ))}
    </ul>
  );
};
