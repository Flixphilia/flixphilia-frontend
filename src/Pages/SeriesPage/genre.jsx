import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import useLocalStorage from '../../hooks/useLocalStorage';

const genreStyles = makeStyles({
  root: {
    padding: '20px 0',
  },
  genreChip: {
    color: 'white',
    borderColor: 'white',
    fontSize: '12px',
    margin: '4px',
  },
});

const Genre = () => {
  const classes = genreStyles();

  const [currentSeries] = useLocalStorage('currentSeries', {});

  const { genre } = currentSeries;
  return (
    <Box display="flex" className={classes.root}>
      {genre.map(({ name }, idx) => (
        <Chip
          key={idx}
          label={name}
          variant="outlined"
          className={classes.genreChip}
        />
      ))}
    </Box>
  );
};

export default Genre;
