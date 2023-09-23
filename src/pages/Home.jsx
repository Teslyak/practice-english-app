import { Container } from '@mui/material';
import { AddWordForm } from 'components/AddWordForm/AddWordForm';
import { WordsContext } from 'components/App';
import Filter from 'components/Filter/Filter';
import { WordsList } from 'components/WordsList/WordsList';
import { useLocalStorage } from 'hooks/useLocalStorage';
import React, { useMemo, useState } from 'react';

const Home = () => {
  const [words, setWords] = useLocalStorage('words', []);
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
    <>
      <Container maxWidth="xl">
        <WordsContext.Provider value={{ handelEditWord }}>
          <AddWordForm addNewWord={addWord} />
          <Filter value={filter} handleChange={handleChange} />
          <WordsList words={getFilterWords} onDeleteWord={handleDeleteWord} />
        </WordsContext.Provider>
      </Container>
    </>
  );
};

export default Home;
