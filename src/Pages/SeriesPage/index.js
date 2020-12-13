import { useEffect } from 'react';

import Description from './description';
import Hero from './hero';
import { actions } from '../../context/reducer';
import { useStateValue } from '../../context/StateProvider';
import useGetSeasonData from '../../hooks/useGetSeasonData';
import { useParams } from 'react-router-dom';
import Loader from '../../components/loader';

const SeriesPage = () => {
  const { series, season } = useParams();
  //eslint-disable-next-line
  const [{}, dispatch] = useStateValue();
  // const [currentSeries, setSeries] = useState(series);

  console.log(series, season);

  const [currentSeries, loading] = useGetSeasonData(series, dispatch);

  useEffect(() => {
    // dispatch({
    //   type: actions.UPDATE_SERIES,
    //   series: currentSeries,
    // });
    dispatch({
      type: actions.UPDATE_SEASON,
      currentSeason: 1,
    });

    document.title = 'Flixphilia | ' + currentSeries.name;

    //eslint-disable-next-line
  }, [loading]);

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
