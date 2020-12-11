// import TypeForm from 'react-typeform';
import useLocalStorage from '../../hooks/useLocalStorage';
import QuizCard from './quizCard';
import { useState } from 'react';
import TypeForm from './typeForm';

const TypeformQuiz = ({ quizData }) => {
  const [completed, setCompleted] = useState(false);
  const [quizAnswer] = useLocalStorage('quizAnswer', []);

  const handleSubmit = () => {
    console.log('Quiz submitted');
    setCompleted(true);
  };
  return (
    <>
      {quizData.length && (
        <TypeForm onSubmit={handleSubmit}>
          {quizData.map((quiz) => (
            <QuizCard key={quiz._id} quizData={quiz} />
          ))}
        </TypeForm>
      )}
      {completed && <pre>{JSON.stringify(quizAnswer, null, 2)}</pre>}
    </>
  );
};

export default TypeformQuiz;
