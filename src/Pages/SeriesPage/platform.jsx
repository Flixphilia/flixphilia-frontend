import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useLocalStorage from '../../hooks/useLocalStorage';

const platformStyles = makeStyles({
  root: {
    padding: 0,
    maxWidth: 200,
    minWidth: 200,
    marginTop: 20,
  },
  margin: {
    marginBottom: 10,
  },
  marginn: {
    marginTop: 10,
  },
  platformImg: {
    padding: `9px 18px`,
    width: 150,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
});

const Platform = () => {
  const classes = platformStyles();
  const [currentSeries] = useLocalStorage('currentSeries', {});
  const { platform } = currentSeries;

  return (
    <Box className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            variant="h6"
            component="h6"
            align="center"
            className={classes.margin}
          >
            Where To Watch
          </Typography>
          {platform.map(({ name, logo_path }, i) => (
            <CardMedia
              key={i}
              component="img"
              image={logo_path}
              alt={name}
              className={classes.platformImg}
            />
          ))}

          <Button
            variant="outlined"
            color="inherit"
            fullWidth
            className={classes.marginn}
          >
            Trailer
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Platform;
