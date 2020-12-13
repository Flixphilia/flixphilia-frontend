import Box from '@material-ui/core/Box';
import Platform from './platform';
import { makeStyles } from '@material-ui/core/styles';
import useLocalStorage from '../../hooks/useLocalStorage';

const posterStyles = makeStyles({
  poster: {
    maxWidth: 200,
    borderRadius: '16px',
    minHeight: 300,
    maxHeight: 300,
  },
});

const Poster = () => {
  const classes = posterStyles();
  const [currentSeries] = useLocalStorage('currentSeries', {});
  const [currentSeason] = useLocalStorage('currentSeason', 1);
  const { name, seasons, specials } = currentSeries;
  let season = specials ? currentSeason : currentSeason - 1;
  const { poster_path } = seasons[season];

  return (
    <Box>
      <img src={poster_path} alt={name} className={classes.poster} />
      <Platform />
    </Box>
  );
};

export default Poster;
