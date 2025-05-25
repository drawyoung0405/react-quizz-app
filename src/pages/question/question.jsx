import React from 'react'
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { decode } from 'html-entities';
import { useDispatch } from 'react-redux';
import { updateScore } from '../../redux/question.action';
import { useNavigate } from 'react-router-dom';
import { generateAnswer } from '../../utils/generateAnswer';
import { DIFFICULTY_TIME } from '../../configs';
import { formatTime } from '../../utils/formatTime';
function Question() {
  const navigate = useNavigate('./final-score');
  const dispatch = useDispatch()
  const { categoryId, type, difficulty, amount } = useSelector(state => state.dashboard);
  const score = useSelector(state => state.question.score);
  const [dataSource, setDataSource] = React.useState([]);
  const [questions, setQuestions] = React.useState([]);
  const [questionIndex, setQuestionIndex] = React.useState(0);
  const [countTime, setCountTime] = React.useState(0);

  // get question: https://opentdb.com/api.php?amount=2&category=11&difficulty=medium&type=multiple
  React.useEffect(() => {
    async function fetchQuestions() {
      const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${categoryId}&difficulty=${difficulty}&type=${type}`);
      const data = await response.json();
      console.log('data: ', data.results);
      const question = data.results;
      const answer = generateAnswer(question, questionIndex);
      setQuestions(answer);
      setDataSource(data.results);
      setCountTime(DIFFICULTY_TIME[difficulty])
    };
    // check if all values are set
    if (!amount || !categoryId || !difficulty || !type) return;
    fetchQuestions();
  }, [amount, categoryId, difficulty, type])

  //next question 
  React.useEffect(() => {
    if (questionIndex > 0) {
      const answer = generateAnswer(dataSource, questionIndex);
      console.log('answer', answer);
      setQuestions(answer);
    }
  }, [questionIndex])

  //Timer
  React.useEffect(() => {
    if (questions.length === 0) return;
    const timer = setInterval(() => {
      setCountTime(prevState => {
        if (prevState > 0) {
          return prevState - 1;
        }
        else {
          const answer = questions[Math.floor(Math.random() * 4)];
          handleAnswer(answer);
          return DIFFICULTY_TIME[difficulty];
        }
      })
    }, 1000)
    return () => clearInterval(timer);
  }, [questions])
  //TOD0: handle click answer
  function handleAnswer(answer) {
    const question = dataSource[questionIndex];
    const correct_answer = question.correct_answer;
    //increase score
    if (answer === correct_answer) {
      dispatch(updateScore(1));
    }
    if (questionIndex + 1 === dataSource.length) {
      navigate('/final-score');
      return
    }
    setQuestionIndex(prevState => prevState + 1);
  }

  return (
    <>
      <Typography variant="h2" noWrap component='h2' gutterBottom sx={{ textAlign: 'center', marginBottom: 5 }} >
        Question {questionIndex + 1}
      </Typography>
      <Typography noWrap gutterBottom sx={{ marginBottom: 5 }} >
        {decode(dataSource[questionIndex]?.question)}
      </Typography>
      {questions.map((item) => (
        <Box key={item} sx={{ marginBottom: 2 }}>
          <Button fullWidth variant="contained" onClick={() => handleAnswer(item)} >
            {decode(item)}
          </Button>
        </Box>
      ))}
      <Box sx={{ marginBottom: 2, display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5" noWrap component='div' gutterBottom sx={{ marginBottom: 5 }} >
          Score: {score}/{dataSource.length}
        </Typography>
        {countTime > 0 && (
          <Typography variant="h5" noWrap component='div' gutterBottom sx={{
            color: countTime <= 5 ? 'red' : 'black',
            marginBottom: 5
          }} >
            Timer: {formatTime(countTime)}
          </Typography>
        )}
      </Box>
    </>
  )
}
export default Question