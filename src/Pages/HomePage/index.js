import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles/';

const homeStyles = makeStyles({
  image: {
    width: 400,
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'white',
    borderRadius: '16px',
  },
});

const HomePage = () => {
  const classes = homeStyles();
  return (
    <Container>
      <Box>
        <img
          src="https://pure-lake-91665.herokuapp.com/api/homepage/random"
          alt="Home"
          className={classes.image}
        />
      </Box>
    </Container>
  );
};

export default HomePage;
