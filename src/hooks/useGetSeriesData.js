import { useEffect, useState } from 'react';
import instance from '../utils/axios';

const useGetSeasonData = (query) => {
  const [currentSeries, setSeriesData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    instance({
      url: `/series/${query}`,
      method: 'GET',
    })
      .then((response) => {
        if (mounted) {
          setSeriesData(response.data);
          setLoading(false);
          console.log('Successful Request!');
        }
      })
      .catch((error) => {
        console.log(error);
      });

    return () => (mounted = false);
    // eslint-disable-next-line
  }, []);

  return [currentSeries, loading];
};

export default useGetSeasonData;
