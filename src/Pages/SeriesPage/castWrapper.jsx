import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useStateValue } from '../../context/StateProvider';

const castStyles = makeStyles({
  // root: {
  //   // margin: 40,
  //   padding: 0,
  //   width: 160,
  // },
  root: {
    marginTop: 20,
    display: 'flex',
    flexWrap: 'wrap',
    // justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'inherit',
  },
  gridList: {
    width: 650,
    height: 420,
  },
  castImg: {
    marginTop: -10,
    paddingBottom: 20,
    height: 180,
    width: 150,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    maxHeight: 240,
    maxWidth: 150,
  },
  castName: {
    marginTop: -18,
    fontSize: 15,
    overflow: 'hidden',
    // width: 'fit-content',
    // marginBottom: -9,
  },
  castMovieName: {
    fontSize: 12,
  },
  castDiv: {
    display: 'flex',
    // flexDirection: 'row',
  },
});

const CastWrapper = () => {
  const classes = castStyles();
  const [{ series }] = useStateValue();
  const { cast } = series;
  return (
    <div className={classes.root}>
      <GridList cellHeight={240} className={classes.gridList} cols={4}>
        {cast.map(({ image, character, name }, i) => {
          return (
            <Box key={i} className={classes.cardBox}>
              <Card className={classes.card}>
                <CardContent style={{ padding: 0 }}>
                  <img alt={name} src={image} className={classes.castImg} />
                  <Typography
                    className={classes.castName}
                    color="textPrimary"
                    component="p"
                  >
                    {name}
                  </Typography>
                  <Typography
                    className={classes.castMovieName}
                    color="textSecondary"
                    component="p"
                  >
                    {character}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          );
        })}
      </GridList>
    </div>
  );
};

export default CastWrapper;
