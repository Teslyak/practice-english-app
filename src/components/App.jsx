import Home from 'pages/Home';
import { Quiz } from 'pages/Quiz';
import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { useState, useMemo } from 'react';

export const WordsContext = createContext(null);

export const App = () => {
  const [words, setWords] = useLocalStorage('words', []);

  const [filter, setFilter] = useState('');

  const addWord = newWord => {
    setWords([...words, newWord]);
  };

  const handleDeleteWord = id => {
    setWords(words.filter(word => word.id !== id));
  };

  const handleChangeFilter = evt => {
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
    <WordsContext.Provider
      value={{
        handelEditWord,
        getFilterWords,
        handleChangeFilter,
        handleDeleteWord,
        addWord,
        words,
        filter,
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="quiz" element={<Quiz />} />
        </Route>
      </Routes>
    </WordsContext.Provider>
  );
};
