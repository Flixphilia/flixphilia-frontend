import instance from '../utils/axios';
const { useEffect, useState } = require('react');

const useGetSeasonQuiz = (series, season) => {
  // const [quizIsPresent, setQuizIsPresent] = useState(false);
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    instance({
      url: `/quiz/${series}/${season}`,
      method: 'GET',
    })
      .then((response) => {
        // let data = response.data;
        // if (data.length !== 0) {
        //   // setQuizIsPresent(true);

        //   setQuizData(data);
        // } else {
        //   // setQuizIsPresent(false);
        // }
        setQuizData(response.data);
        console.log('Successful Request!');
      })
      .catch((error) => {
        console.log('Error in getting quiz data', error);
      });

    return () => {
      console.log('useGetSeasonQuiz Unmounted');
    };
  }, []);

  return quizData;
};

export default useGetSeasonQuiz;
