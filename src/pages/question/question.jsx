import React from 'react'
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import { useSelector } from 'react-redux';
function Question() {
  const { categoryId, type, difficulty, amount } = useSelector(state => state.dashboard)
  const [questions, setQuestions] = React.useState([]);
  const [questionIndex, setQuestionIndex] = React.useState(0);
  // get question: https://opentdb.com/api.php?amount=2&category=11&difficulty=medium&type=multiple
  React.useEffect(() => {
    async function fetchQuestions() {
      const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${categoryId}&difficulty=${difficulty}&type=${type}`);
      const data = await response.json();
      console.log(data);
      setQuestions(data.results);
      console.log(data.results);
    };
    if (!amount || !categoryId || !difficulty || !type) return;
    fetchQuestions();
  }, [amount, categoryId, difficulty, type])
  return (
    <>
      <Typography variant="h2" noWrap component='h2' gutterBottom sx={{ textAlign: 'center', marginBottom: 5 }} >
        Question {questionIndex + 1}
      </Typography>
      <Typography noWrap gutterBottom sx={{ marginBottom: 5 }} >
      {questions[questionIndex]?.question}
          </Typography>
      {questions[questionIndex]?.incorrect_answers.map((item) => (
        <>
         
          <Box key={item} sx={{ marginBottom: 2 }}>
            <Button fullWidth variant="contained" >
              {item}
            </Button>
          </Box>
        </>
      ))}
      <Box sx={{ marginBottom: 2, display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5" noWrap component='div' gutterBottom sx={{ marginBottom: 5 }} >
          Score: 0/{questions.length}
        </Typography>
        <Typography variant="h5" noWrap component='div' gutterBottom sx={{ marginBottom: 5 }} >
          Timer: 0:30
        </Typography>
      </Box>
    </>
  )
}
export default Question