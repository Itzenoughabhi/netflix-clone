 alert("hello") 
 function toggleAnswer(question) {
    const answer = question.nextElementSibling;
    const allAnswers = document.querySelectorAll('.answer');
    
    // Close all answers
    allAnswers.forEach(function(ans) {
        if (ans.style.display === 'block' && ans.previousElementSibling !== question) {
            ans.style.display = 'none';
        }
    });

    // Toggle the current answer
    answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
}