import Home from 'pages/Home';
import { Quiz } from 'pages/Quiz';
import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';

export const WordsContext = createContext(null);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="quiz" element={<Quiz />} />
      </Route>
    </Routes>
  );
};
