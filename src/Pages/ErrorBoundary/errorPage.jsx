import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: '90vh',
    width: '100%',
    display: 'grid',
    placeItems: 'center',
    color: 'white',
  },
});

const ErrorPage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography component="h4" variant="h4">
        Something went wrong!
      </Typography>
    </Container>
  );
};

export default ErrorPage;
