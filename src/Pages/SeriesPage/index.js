import { useEffect } from 'react';

import Description from './description';
import Hero from './hero';
import useGetSeriesData from '../../hooks/useGetSeriesData';
import { useHistory, useParams } from 'react-router-dom';
import Loader from '../../components/loader';
import useLocalStorage from '../../hooks/useLocalStorage';

const SeriesPage = () => {
  const { series } = useParams();
  const history = useHistory();
  const [seriesData, loading] = useGetSeriesData(series);

  //  eslint-disable-next-line
  const [currentSeries, setCurrentSeries] = useLocalStorage(
    'currentSeries',
    {}
  );
  //  eslint-disable-next-line
  const [currentSeason, setCurrentSeason] = useLocalStorage('currentSeason', 1);

  useEffect(() => {
    setCurrentSeries(seriesData);
    setCurrentSeason(1);
    console.log(seriesData, loading);
    history.replace(`/series/${series}/1`);
    document.title = 'Flixphilia | ' + seriesData.name;
    //  eslint-disable-next-line
  }, [seriesData]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Hero />
          <Description />
          {/* <pre className="text-white">{JSON.stringify(currentSeries, null, 2)}</pre> */}
        </>
      )}
    </>
  );
};

export default SeriesPage;

// <pre className="text-white">
//   {JSON.stringify(currentSeries, null, 2)}
// </pre>
