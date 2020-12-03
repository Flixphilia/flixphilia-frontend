import Box from '@material-ui/core/Box';
import useGetSeasonQuiz from '../../hooks/useGetSeasonQuiz';
import { useParams } from 'react-router-dom';
import QuizCard from './quizCard';
import useCountRenders from '../../hooks/useCountRenders';
import { Grid } from '@material-ui/core';

const QuizPage = () => {
  const { series, season } = useParams();
  const quizData = useGetSeasonQuiz(series, season);

  console.log('Quiz Page', useCountRenders());

  return (
    <Grid container color="white" direction="row">
      {quizData &&
        quizData.map((quiz) => (
          <Grid item>
            <QuizCard key={quiz._id} quizData={quiz} />
          </Grid>
        ))}
      {/* <pre>{quizData && JSON.stringify(quizData, null, 2)}</pre> */}
    </Grid>
  );
};

export default QuizPage;
