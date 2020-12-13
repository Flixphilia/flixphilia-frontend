import instance from '../utils/axios';
import { useEffect, useState } from 'react';

const useGetSeasonQuiz = (series, season) => {
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    instance({
      url: `/quiz/${series}/${season}`,
      method: 'GET',
    })
      .then((response) => {
        if (mounted) {
          setQuizData(response.data);
          setLoading(false);
          console.log('Successful Request!');
        }
      })
      .catch((error) => {
        console.log('Error in getting quiz data', error);
      });

    return () => (mounted = false);

    //eslint-disable-next-line
  }, []);

  return [quizData, loading];
};

export default useGetSeasonQuiz;
