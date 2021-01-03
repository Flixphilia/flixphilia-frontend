import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useLocalStorage from '../../hooks/useLocalStorage';

const overviewStyles = makeStyles({
  overview: {
    fontSize: '14px',
  },
});

const Overview = () => {
  const classes = overviewStyles();
  const [currentSeries] = useLocalStorage('currentSeries', {});
  const [currentSeason] = useLocalStorage('currentSeason', 1);
  const { description, seasons, specials } = currentSeries;

  let season = specials ? currentSeason : currentSeason - 1;
  const { overview } = seasons[season];

  return (
    <Typography
      component="span"
      style={{ paddingTop: '30px' }}
      className={classes.overview}
    >
      {overview === null ? description : overview}
    </Typography>
  );
};

export default Overview;
