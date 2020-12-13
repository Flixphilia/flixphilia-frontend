import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CastWrapper from './castWrapper';
import Container from '@material-ui/core/Container';
import Genre from './genre';
import Heading from './heading';
import Info from './info';
import Overview from './overview';
import Poster from './poster';
import SeasonButtonWrapper from './seasonButtonWrapper';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useParams } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
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
  const { series, season } = useParams();

  const [currentSeries] = useLocalStorage('currentSeries', {});
  const [currentSeason, setCurrentSeason] = useLocalStorage('currentSeason', 1);

  const onCurrentSeasonChange = (newSeason) => {
    if (newSeason === currentSeason) return;
    setCurrentSeason(newSeason);
    history.replace(`/series/${series}/${newSeason}`);
  };

  return (
    <Container className={classes.root}>
      <Box display="flex" justifyContent="flex-start">
        <Poster />

        <Box className={classes.dataBox}>
          <Heading />
          <Info />
          {currentSeries.seasons.map(({ season_number }) => (
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
              history.push(`/quiz/${series}/${season}`);
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
