import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useLocalStorage from '../../hooks/useLocalStorage';

const headingStyles = makeStyles({
  heading: {
    fontSize: '36px',
    height: 'fit-content',
    fontWeight: '800',
  },
  season: {
    marginLeft: '10px',
    fontSize: '18px',
    fontStyle: 'italic',
    fontWeight: '400',
  },
});

const Heading = () => {
  const classes = headingStyles();
  const [currentSeries] = useLocalStorage('currentSeries', {});
  const [currentSeason] = useLocalStorage('currentSeason', 1);
  const { name, seasons, specials } = currentSeries;
  let season = specials ? currentSeason : currentSeason - 1;

  return (
    <Typography variant="h1" className={classes.heading}>
      {name}
      <Typography component="span" className={classes.season}>
        {`Name from ${seasons[season].name}`}
      </Typography>
    </Typography>
  );
};

export default Heading;
