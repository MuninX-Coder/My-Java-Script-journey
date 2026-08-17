// selecting all html elements
const enterQuestion = document.querySelector("#enterQuestion");
const addQuestionBtn = document.querySelector("#addQuestionBtn");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const option1Label = document.querySelector("#option1Label");
const option2Label = document.querySelector("#option2Label");
const option3Label = document.querySelector("#option3Label");
const option4Label = document.querySelector("#option4Label");

const playQuizzBtn = document.querySelector("#playQuizzBtn");
const displayQuestion = document.querySelector("#displayQuestion");
const showOption1 = document.querySelector("#showOption1");
const showOption1Label = document.querySelector("#showOption1Label");
const showOption2 = document.querySelector("#showOption2");
const showOption2Label = document.querySelector("#showOption2Label");
const showOption3 = document.querySelector("#showOption3");
const showOption3Label = document.querySelector("#showOption3Label");
const showOption4 = document.querySelector("#showOption4");
const showOption4Label = document.querySelector("#showOption4Label");
const questionProgress = document.querySelector("#questionProgress");
const nextBtn = document.querySelector("#nextBtn");
const previousBtn = document.querySelector("#previousBtn");
const showResultBtn = document.querySelector("#showResultBtn");
let myForm = document.querySelector("#myForm");
let questionCounter = document.querySelector("#questionCounter");

let correctAnswerDisplay = document.querySelector("#correctAnswer");
let wrongAnswerDisplay = document.querySelector("#wrongAnswer");
let scoreprogressDisplay = document.querySelector("#scoreprogress");

// store quiz in storage
let quizStorage = [];

let counter = 0;

// add question
addQuestionBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  const selectOption = document.querySelector(  'input[name="correctAnswer"]:checked',);
  let enterQuestionVal = enterQuestion.value;
  let option1Val = option1.value;
  let option2Val = option2.value;
  let option3Val = option3.value;
  let option4Val = option4.value;

  if (enterQuestionVal.trim() === "") {
    alert("enter question");
    return;
  } else if (
    option1Val.trim() === "" ||
    option2Val.trim() === "" ||
    option3Val.trim() === "" ||
    option4Val.trim() === ""
  ) {
    alert("enter all option value");
    return;
  } else if (selectOption === null) {
    alert("select one correct answer");
    return;
  }

  let selectOptionVal = selectOption.value;

  let quizQuestion = {
    questionName: enterQuestionVal,
    option: [option1Val, option2Val, option3Val, option4Val],
    correctOption: selectOptionVal,
  };

  quizStorage.push(quizQuestion);
  counter++;
  questionCounter.textContent = counter;
  enterQuestion.value = "";
  option1.value = "";
  option2.value = "";
  option3.value = "";
  option4.value = "";
  myForm.reset();
});

let currentQuestionIndex = 0;

playQuizzBtn.addEventListener("click", function () {
  if (quizStorage.length === 0) {
    alert("first enter some question");
    return;
  }

  renderQuestion();
});


function renderQuestion() {
 

  selectedUserValue.forEach((radio) => {
    radio.checked = false;
  });

  displayQuestion.textContent = quizStorage[currentQuestionIndex].questionName;
  showOption1Label.textContent = quizStorage[currentQuestionIndex].option[0];
  showOption2Label.textContent = quizStorage[currentQuestionIndex].option[1];
  showOption3Label.textContent = quizStorage[currentQuestionIndex].option[2];
  showOption4Label.textContent = quizStorage[currentQuestionIndex].option[3];
  questionProgress.textContent = `${currentQuestionIndex + 1} / ${quizStorage.length}`;

  let checkAns = userAnswer[currentQuestionIndex];
  selectedUserValue.forEach((radio) => {
    if (radio.value === checkAns) {
      radio.checked = true; // Matching radio select ho jayega
    }
  });
}



nextBtn.addEventListener("click", function () {
  if (currentQuestionIndex < quizStorage.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  }
});

previousBtn.addEventListener("click", function () {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
});


let userAnswer = [];

let selectedUserValue = document.querySelectorAll('input[name="choice"]'); // return nodelist ka form mai sab values

selectedUserValue.forEach((element) => {
  element.addEventListener("change", (event) => {
    let selectedValue = event.target.value;
    console.log(selectedValue);
    userAnswer[currentQuestionIndex] = selectedValue;
  });
});

showResultBtn.addEventListener("click", function () {
  let correctCount = 0;
  let wrongCount = 0;
  quizStorage.forEach((evt, i) => {
    if (evt.correctOption === userAnswer[i]) {
      correctCount++;
    } else {
      wrongCount++;
    }
  });
  correctAnswerDisplay.textContent = correctCount;
  wrongAnswerDisplay.textContent = wrongCount;
  scoreprogressDisplay.textContent = `${correctCount} / ${quizStorage.length}`;
});
