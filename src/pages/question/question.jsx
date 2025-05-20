import React from 'react'
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { decodeEntity } from 'html-entities';
import { useDispatch } from 'react-redux';
import { updateScore } from '../../redux/question.action';

function Question() {
  const dispatch = useDispatch()
  const { categoryId, type, difficulty, amount } = useSelector(state => state.dashboard);
  const score = useSelector(state => state.question.score);
  const [dataSource, setDataSource] = React.useState([]);
  const [questions, setQuestions] = React.useState([]);
  const [questionIndex, setQuestionIndex] = React.useState(0);

  // get question: https://opentdb.com/api.php?amount=2&category=11&difficulty=medium&type=multiple
  React.useEffect(() => {
    async function fetchQuestions() {
      const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${categoryId}&difficulty=${difficulty}&type=${type}`);
      const data = await response.json();
      const question = data.results[questionIndex];
      console.log('Question', question);
      const answers = [...question.incorrect_answers, question.correct_answer];
      setQuestions(answers);
      console.log('Data: ', data.results);
      setDataSource(data.results);
      console.log('Qdata', dataSource);
    };
    if (!amount || !categoryId || !difficulty || !type) return;
    fetchQuestions();
  }, [amount, categoryId, difficulty, type])

  //next question
  React.useEffect(() => {
    if(questionIndex > 0) {
      const question = dataSource[questionIndex];
      const answer = [...question.incorrect_answers, question.correct_answer];
      setQuestions(answer);
      setDataSource(dataSource.results);
    }
  })
  //TOD0: handle click answer
  function handleAnswer(answer) {
    const question = dataSource[questionIndex];
    const correct_answer = question.correct_answer
    if (answer === correct_answer) {
      dispatch(updateScore(1));
    }
    setQuestionIndex(prevState => prevState + 1);

  }

  return (
    <>
      <Typography variant="h2" noWrap component='h2' gutterBottom sx={{ textAlign: 'center', marginBottom: 5 }} >
        Question {questionIndex + 1}
      </Typography>
      <Typography noWrap gutterBottom sx={{ marginBottom: 5 }} >
        {decodeEntity(dataSource[questionIndex]?.question)}
      </Typography>
      {questions.map((item) => (
        <>
          <Box key={item} sx={{ marginBottom: 2 }}>
            <Button fullWidth variant="contained" onClick={() => handleAnswer(item)} >
              {item}
            </Button>
          </Box>
        </>
      ))}
      <Box sx={{ marginBottom: 2, display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5" noWrap component='div' gutterBottom sx={{ marginBottom: 5 }} >
          Score: {score}/{dataSource.length}
        </Typography>
        <Typography variant="h5" noWrap component='div' gutterBottom sx={{ marginBottom: 5 }} >
          Timer: 0:30
        </Typography>
      </Box>
    </>
  )
}
export default Question