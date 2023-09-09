import { useState, useMemo } from 'react';
import { AddWordForm } from './AddWordForm/AddWordForm';
import { Container } from '@mui/material';
import { WordsList } from './WordsList/WordsList';
import Filter from './Filter/Filter';

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

  return (
    <Container maxWidth="xl">
      <AddWordForm addNewWord={addWord} />
      <Filter handleChange={handleChange} />
      <WordsList words={getFilterWords} onDeleteWord={handleDeleteWord} />
    </Container>
  );
};
