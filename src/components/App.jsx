import { useState, useMemo, createContext } from 'react';
import { AddWordForm } from './AddWordForm/AddWordForm';
import { Container } from '@mui/material';
import { WordsList } from './WordsList/WordsList';
import Filter from './Filter/Filter';

export const WordsContext = createContext(null);

export const App = () => {
  const [words, setWords] = useState([]);
  const [filter, setFilter] = useState('');

  const addWord = newWord => {
    setWords([...words, newWord]);
  };

  const handleDeleteWord = id => {
    setWords(words.filter(word => word.id !== id));
  };

  const handleChange = evt => {
    setFilter(evt.target.value);
  };

  const getFilterWords = useMemo(() => {
    const normalizedFilter = filter.toLowerCase().trim();
    return words.filter(word => {
      return word.ukWord
        .concat(word.enWord)
        .toLowerCase()
        .includes(normalizedFilter);
    });
  }, [filter, words]);

  const handelEditWord = editedWord => {
    setWords(prevState => {
      return prevState.map(word =>
        word.id === editedWord.id ? editedWord : word
      );
    });
  };

  return (
    <Container maxWidth="xl">
      <WordsContext.Provider value={{ handelEditWord }}>
        <AddWordForm addNewWord={addWord} />
        <Filter handleChange={handleChange} />
        <WordsList words={getFilterWords} onDeleteWord={handleDeleteWord} />
      </WordsContext.Provider>
    </Container>
  );
};
