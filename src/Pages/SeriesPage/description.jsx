import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import CastWrapper from './castWrapper';
import Container from '@material-ui/core/Container';
import Genre from './genre';
import Heading from './heading';
import Info from './info';
import Overview from './overview';
import Poster from './poster';
import SeasonButtonWrapper from './seasonButtonWrapper';
import { actions } from '../../context/reducer';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';

// import useCountRenders from '../../hooks/useCountRenders';

const descriptionStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    color: theme.palette.secondary.main,
  },
  dataBox: {
    marginLeft: 20,
    padding: 8,
  },
}));

const Description = () => {
  const history = useHistory();
  const classes = descriptionStyles();
  const [{ series, currentSeason }, dispatch] = useStateValue();

  const onCurrentSeasonChange = (newSeason) => {
    dispatch({
      type: actions.UPDATE_SEASON,
      season: newSeason,
    });
  };

  return (
    <Container className={classes.root}>
      <Box display="flex" justifyContent="flex-start">
        <Poster />

        <Box className={classes.dataBox}>
          <Heading />
          <Info />
          {series.seasons.map(({ season_number }) => (
            <SeasonButtonWrapper
              key={season_number}
              seasonNumber={season_number}
              onCurrentSeasonChange={onCurrentSeasonChange}
            />
          ))}
          <Genre />
          <Overview />
          <CastWrapper />
          <Button
            onClick={() => {
              history.push(`/quiz/${series.name}/${currentSeason}`);
            }}
          >
            Quiz
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Description;
