import { FRIENDS, Mirzapur } from './data';
import React, { useEffect, useState } from 'react';

import Cast from './cast';
import Description from './description';
import Hero from './hero';
import { actions } from '../../utils/reducer';
import { useStateValue } from '../../utils/StateProvider';

// import axios from './axios';
// import styled from 'styled-components';

const seriesMap = {
  friends: FRIENDS,
  mirzapur: Mirzapur,
};

const SeriesPage = ({ match }) => {
  //eslint-disable-next-line
  const [{}, dispatch] = useStateValue();
  //eslint-disable-next-line
  const [currentSeries, setSeries] = useState(FRIENDS);
  const [currentSeason, setCurrentSeason] = useState(1);

  useEffect(() => {
    setSeries(seriesMap[match.params.series]);
    dispatch({
      type: actions.UPDATE_SERIES,
      series: seriesMap[match.params.series],
    });
    document.title = 'Flixphilia | ' + currentSeries.name;
    // const getSeriesData = async () => {
    //   axios
    //     .get(match.params.series)
    //     .then((response) => {
    //       response.json();
    //     })
    //     .then((response) => {
    //       console.log('Fetch API Works!');
    //       console.log(response);
    //       setSeries(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //};
    // getSeriesData();
  }, []);

  const specials = currentSeries.seasons.filter((season) => season.season_number === 0).length !== 0 ? true : false;

  return (
    <div className="container p-2 text-white">
      <Hero poster={currentSeries.imgUrl} alt={currentSeries.name} />
      <Description
        name={currentSeries.name}
        seasonName={currentSeries.seasons[specials ? currentSeason : currentSeason - 1].name}
        description={currentSeries.description}
        image={currentSeries.seasons[specials ? currentSeason : currentSeason - 1].poster_path}
        seasons={currentSeries.seasons}
        seasonNumber={currentSeason}
        onCurrentSeasonChange={setCurrentSeason}
        ratings={currentSeries.ratings}
        episodes={currentSeries.seasons[specials ? currentSeason : currentSeason - 1].episode_count}
        yearOfRelease={currentSeries.yearOfRelease}
      />
      <Cast cast={currentSeries.cast} />
    </div>
  );
};

export default SeriesPage;
