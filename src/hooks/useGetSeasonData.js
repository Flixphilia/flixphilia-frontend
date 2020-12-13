import { useEffect, useState } from 'react';
import { series } from '../context/data';
import instance from '../utils/axios';

const useGetSeasonData = (query) => {
  const [currentSeries, setSeriesData] = useState(series);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSeriesData = async () => {
      await instance({
        url: `/series/${query}`,
        method: 'GET',
      })
        .then((response) => {
          console.log('Fetch API Works!');
          setSeriesData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    setLoading(false);

    getSeriesData();
    // eslint-disable-next-line
  }, []);

  return [currentSeries, loading];
};

export default useGetSeasonData;
