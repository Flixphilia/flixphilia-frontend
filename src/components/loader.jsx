import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = () => {
  return (
    <Backdrop open={true}>
      <CircularProgress color="primary" size={50} />
    </Backdrop>
  );
};

export default Loader;
