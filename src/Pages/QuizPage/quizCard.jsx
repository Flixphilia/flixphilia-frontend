import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { Divider, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    borderRadius: 20,
    margin: '60px auto 20px',
    backgroundColor: '#383737',
    padding: 16,
    // marginTop: 150,
  },
  // form: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  formControl: {
    // margin: theme.spacing(2),
    alignItems: 'center',
    width: '100%',
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'center',
    // padding: '0px auto',
  },
  option: {
    marginTop: 10,
    backgroundImage: 'linear-gradient(left,#e35bf7,#ef141b)',
    borderRadius: 20,
    width: '40%',
    margin: '0 auto',

    // color: '#474545',
  },
  questionNumber: {
    color: '#aaa',
    width: '100%',
    textAlign: 'center',
    fontSize: '16px',
    marginBottom: 2,
    // margin: '5px 0',
  },
  button: {
    // margin: '10px auto',
    margin: '13px auto 10px',
    width: 250,
  },
  question: {
    color: 'white',
    fontSize: 22,
    fontStyle: 'italic',
    margin: '10px 0 12px',
  },
  border: {
    height: '2px',
    backgroundColor: '#474545',
  },
}));

const QuizCard = ({ quizData }) => {
  const classes = useStyles();
  const [quizAnswer] = useLocalStorage('quizAnswer', []);
  const [value, setValue] = useState('');
  // console.log(quizAnswer, quizData);

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
      <Typography className={classes.questionNumber}>
        Question-{quizAnswer.findIndex((item) => item._id === quizData._id) + 1}
        /10
      </Typography>
      <Divider className={classes.border} />
      <form onSubmit={handleSubmit} className={classes.form}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel>
            <Typography className={classes.question}>
              {quizData.question}
            </Typography>
          </FormLabel>
          <RadioGroup
            aria-label="quiz"
            name="quiz"
            value={value}
            onChange={handleRadioChange}
            className={classes.radioGroup}
          >
            <FormControlLabel
              value="option1"
              control={<Radio disabled={show} />}
              label={quizData.option1}
              className={classes.option}
            />
            <FormControlLabel
              value="option2"
              control={<Radio disabled={show} />}
              label={quizData.option2}
              className={classes.option}
            />
            <FormControlLabel
              value="option3"
              control={<Radio disabled={show} />}
              label={quizData.option3}
              className={classes.option}
            />
            <FormControlLabel
              value="option4"
              control={<Radio disabled={show} />}
              label={quizData.option4}
              className={classes.option}
            />
          </RadioGroup>
          {/* <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            disabled={show}
          >
            Check Answer
          </Button> */}
        </FormControl>
      </form>
      {show && <Alert severity={severity}>{message}</Alert>}
      {/* <pre>
        "data"
        {JSON.stringify(quizAnswer.find((item) => item._id === quizData._id))}
      </pre> */}
    </Card>
  );
};

export default QuizCard;
