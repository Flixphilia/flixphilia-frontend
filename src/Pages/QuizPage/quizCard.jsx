import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    margin: '20px auto',
  },
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    // margin: '10px auto',
    margin: '13px auto 10px',
    width: 250,
  },
  question: {
    color: theme.palette.primary.main,
    marginBottom: 10,
  },
}));

const QuizCard = ({ quizData }) => {
  const classes = useStyles();

  const [value, setValue] = useState('');

  //SnackBar Logic
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('Wrong Answer!');
  const [severity, setSeverity] = useState('error');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === quizData.correct_option) {
      setSeverity('success');
      setMessage('Correct Answer');
    } else {
      setSeverity('error');
      setMessage('Wrong Answer!');
    }
    setShow(true);
  };

  return (
    <Card className={classes.root}>
      <form onSubmit={handleSubmit}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel className={classes.question}>
            {quizData.question}
          </FormLabel>
          <RadioGroup
            aria-label="quiz"
            name="quiz"
            value={value}
            onChange={handleRadioChange}
          >
            <FormControlLabel
              value="option1"
              control={<Radio color="primary" disabled={show} />}
              label={quizData.option1}
            />
            <FormControlLabel
              value="option2"
              control={<Radio color="primary" disabled={show} />}
              label={quizData.option2}
            />
            <FormControlLabel
              value="option3"
              control={<Radio color="primary" disabled={show} />}
              label={quizData.option3}
            />
            <FormControlLabel
              value="option4"
              control={<Radio color="primary" disabled={show} />}
              label={quizData.option4}
            />
          </RadioGroup>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            disabled={show}
          >
            Check Answer
          </Button>
        </FormControl>
      </form>
      {show && <Alert severity={severity}>{message}</Alert>}
    </Card>
  );
};

export default QuizCard;
