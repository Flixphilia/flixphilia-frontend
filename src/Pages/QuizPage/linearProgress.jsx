import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 40,
    borderRadius: 20,
    border: '1px solid #aaa',
  },
  colorPrimary: {
    backgroundColor: '#1c1c1c',
  },
  bar: {
    borderRadius: 20,
    backgroundImage: 'linear-gradient(left,#e35bf7,#ef141b)',
  },
}))(LinearProgress);

export default function LinearDeterminate() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(4);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          return 100;
        }
        return oldProgress + 0.1;
      });
    }, 60);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root}>
      <BorderLinearProgress variant="determinate" value={progress} />
    </div>
  );
}
