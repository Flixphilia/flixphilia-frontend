import useGetSeasonQuiz from '../../hooks/useGetSeasonQuiz';
import { useParams } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import QuizCard from './quizCard';
import { useState } from 'react';
import TypeForm from './typeForm';
import useCountRenders from '../../hooks/useCountRenders';
import Container from '@material-ui/core/Container';
import { useEffect } from 'react';
import Loader from '../../components/loader';

const QuizPage = () => {
  const { series, season } = useParams();
  const [quizData, loading] = useGetSeasonQuiz(series, season);
  //eslint-disable-next-line
  const [quizAnswer, setQuizAnswer] = useLocalStorage('quizAnswer', []);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setQuizAnswer(quizData);
    //eslint-disable-next-line
  }, [quizData]);

  console.log('Quiz Page', useCountRenders());

  const handleSubmit = () => {
    console.log('Quiz submitted');
    setCompleted(true);
  };

  return (
    <Container>
      {loading || completed ? (
        <Loader />
      ) : (
        <TypeForm onSubmit={handleSubmit} showReviewView={false}>
          {quizData.map((quiz, idx) => (
            <QuizCard key={idx} quizData={quiz} />
          ))}
        </TypeForm>
      )}
    </Container>
  );
};

export default QuizPage;
