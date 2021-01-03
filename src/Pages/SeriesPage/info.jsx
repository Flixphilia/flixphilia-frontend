import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useLocalStorage from '../../hooks/useLocalStorage';

const infoStyles = makeStyles({
  root: {
    padding: '20px 0',
  },
  airDate: {
    fontSize: '16px',
    marginLeft: '10px',
  },
  episodeCount: {
    marginTop: '20px',
    fontSize: '16px',
  },
});

const Info = () => {
  const classes = infoStyles();
  const [currentSeries] = useLocalStorage('currentSeries', {});
  const [currentSeason] = useLocalStorage('currentSeason', 1);

  const {
    seasons,
    origin_country,
    ratings,
    language,
    specials,
  } = currentSeries;

  let season = specials ? currentSeason : currentSeason - 1;

  const { air_date, episode_count } = seasons[season];

  return (
    <Typography variant="body2" component="div" className={classes.root}>
      <Typography component="span" className={classes.episodeCount}>
        {`Episodes: ${episode_count}`}
      </Typography>

      <Typography component="span" className={classes.airDate}>
        {`Air Date:  ${air_date}`}
      </Typography>

      <Typography component="span" className={classes.airDate}>
        {`Origin Country:  ${origin_country}`}
      </Typography>

      <Typography component="span" className={classes.airDate}>
        {`Ratings:  ${ratings}`}
      </Typography>

      <Typography component="span" className={classes.airDate}>
        {`Lanugage(s):  ${language}`}
      </Typography>
    </Typography>
  );
};

export default Info;
