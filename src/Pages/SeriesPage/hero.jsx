import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles/';
import { useStateValue } from '../../context/StateProvider';

const heroStyles = makeStyles({
  root: {
    height: 'fit-content',
  },
  image: {
    width: '100%',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'white',
    borderRadius: '16px',
  },
});

const Hero = () => {
  const [{ series }] = useStateValue();

  const { name, imgUrl } = series;

  const classes = heroStyles();
  return (
    <Container className={classes.root}>
      <Box>
        <img src={imgUrl} alt={name} className={classes.image} />
      </Box>
    </Container>
  );
};

export default Hero;
