import { Fragment, useEffect, useState } from 'react';

import Description from './description';
import Hero from './hero';
import { actions } from '../../context/reducer';
import axios from '../../utils/axios';
import { useStateValue } from '../../context/StateProvider';

const SeriesPage = ({ match }) => {
  const [{ series }, dispatch] = useStateValue();
  const [currentSeries, setSeries] = useState(series);

  useEffect(() => {
    const getSeriesData = async () => {
      axios
        .get('/series/' + match.params.series)
        .then((response) => {
          console.log('Fetch API Works!');
          setSeries(response.data);
          // isLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getSeriesData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch({
      type: actions.UPDATE_SERIES,
      series: currentSeries,
    });
    // dispatch({
    //   type: actions.UPDATE_SEASON,
    //   currentSeason: 1,
    // });

    document.title = 'Flixphilia | ' + currentSeries.name;
  }, [currentSeries, dispatch]);

  return (
    <Fragment>
      <Hero />
      <Description />
      {/* <pre className="text-white">{JSON.stringify(currentSeries, null, 2)}</pre> */}
    </Fragment>
  );
};

export default SeriesPage;
