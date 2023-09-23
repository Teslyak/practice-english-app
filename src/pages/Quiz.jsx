import { useEffect, useContext } from 'react';
import { WordsContext } from 'components/App';
import { useState } from 'react';

export const Quiz = () => {
  const getRandomIntegetFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const { words } = useContext(WordsContext);
  const [quizWords, setQuizWords] = useState(words);
  const [randomWord, setRandomWord] = useState(
    quizWords[getRandomIntegetFromInterval(0, quizWords.length - 1)]
  );
  const [correctAnswersAmount, setCorrectAnswersAmount] = useState(0);
  useEffect(() => {
    setRandomWord(
      quizWords[getRandomIntegetFromInterval(0, quizWords.length - 1)]
    );
  }, [quizWords]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const wordTranslate = evt.target.elements.word.value;
    if (
      wordTranslate.toLowerCase().trim() === randomWord.enWord.toLowerCase()
    ) {
      setCorrectAnswersAmount(prevState => prevState + 1);
    }
    setQuizWords(prevState => prevState.filter(el => el.id !== randomWord.id));
    evt.target.reset();
  };

  return (
    <>
      <p>
        {correctAnswersAmount}/{words.length}
      </p>
      {quizWords.length > 0 ? (
        <>
          <h1>{randomWord.ukWord}</h1>
          <form action="" onSubmit={handleSubmit}>
            <input type="text" name="word" id="" />
            <button type="submit">Check answer</button>
          </form>
        </>
      ) : (
        <h1>Finished</h1>
      )}
    </>
  );
};
