import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useStateValue } from '../../context/StateProvider';

const overviewStyles = makeStyles({
  overview: {
    fontSize: '14px',
  },
});

const Overview = () => {
  const classes = overviewStyles();
  const [{ series, currentSeason }] = useStateValue();
  const { description, seasons, specials } = series;
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
