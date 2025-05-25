export function generateAnswer(dataSource = [], index) {
    if (dataSource.length === 0) {
        return [];
    }
    
    const question = dataSource[index];
    console.log('question', question);
    const answer = [...question.incorrect_answers];
    answer.splice(Math.floor(Math.random() * 4), 0, question.correct_answer);
    return answer
}