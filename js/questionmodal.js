let askQuestionbtn = document.getElementById('askQuestionbtn');
let askQuestion_btn = document.getElementById('askQuestion_btn');
let askQuestion = document.getElementById('askQuestionModal');
let askQuestionModal_close = document.getElementById('askQuestionModal_close');
askQuestionbtn.addEventListener('click', function (e) {
    e.preventDefault();
    askQuestion.classList.toggle('show');
    document.getElementById("askQuestionModal").style.display = "block";
});
askQuestion_btn.addEventListener('click', function (e) {
    e.preventDefault();
    askQuestion.classList.toggle('show');
    document.getElementById("askQuestionModal").style.display = "block";
});
askQuestionModal_close.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById("askQuestionModal").classList.remove('show');
    document.getElementById("askQuestionModal").style.display = "none";
});

