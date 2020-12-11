import useGetSeasonQuiz from '../../hooks/useGetSeasonQuiz';
import { useParams } from 'react-router-dom';

import useCountRenders from '../../hooks/useCountRenders';

import TypeformQuiz from './typeformQuiz';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useEffect } from 'react';

const QuizPage = () => {
  const { series, season } = useParams();
  const quizData = useGetSeasonQuiz(series, season);
  const [quizAnswer, setQuizAnswer] = useLocalStorage('quizAnswer', []);

  useEffect(() => {
    setQuizAnswer(quizData);
    //eslint-disable-next-line
  }, [quizData]);

  console.log('Quiz Page', useCountRenders());

  return <TypeformQuiz quizData={quizData} />;
};

export default QuizPage;
