// ==========================================
// 1. SELECTING ALL HTML ELEMENTS
// ==========================================
const enterQuestion = document.querySelector("#enterQuestion");
const addQuestionBtn = document.querySelector("#addQuestionBtn");
const questionCounter = document.querySelector("#questionCounter"); // Ek hi baar declare kiya

const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");

const playQuizzBtn = document.querySelector("#playQuizzBtn");
const displayQuestion = document.querySelector("#displayQuestion");
const showOption1Label = document.querySelector("#showOption1Label");
const showOption2Label = document.querySelector("#showOption2Label");
const showOption3Label = document.querySelector("#showOption3Label");
const showOption4Label = document.querySelector("#showOption4Label");
const questionProgress = document.querySelector("#questionProgress");

const nextBtn = document.querySelector("#nextBtn");
const previousBtn = document.querySelector("#previousBtn");
const showResultBtn = document.querySelector("#showResultBtn");
let myForm = document.querySelector("#myForm");

let correctAnswerDisplay = document.querySelector("#correctAnswer");
let wrongAnswerDisplay = document.querySelector("#wrongAnswer");
let scoreprogressDisplay = document.querySelector("#scoreprogress");

// ==========================================
// 2. GLOBAL VARIABLES & STATE
// ==========================================
let quizStorage = [];  // to store the final quiz here.
let userAnswer = [];  // to store the answer that user had given
let counter = 0;  // to count the number of question
let currentQuestionIndex = 0; // the current question ka index in order to navigate 


let selectedUserValue = document.querySelectorAll('input[name="choice"]');   // this will return a nodelist., jo v user select keyai 

// ==========================================
// 3. EVENT LISTENERS & FUNCTIONS
// ==========================================

// Add Question Button Logic
addQuestionBtn.addEventListener("click", function (evt) {
  evt.preventDefault();  // form ka default behavior ko rok dena

  const selectOption = document.querySelector('input[name="correctAnswer"]:checked');  // bass woi input field ka value ko return karo joo checked hai, if nothings is checked then it will return null


  // sabi quesiton and opiton ka vlaue ko ek variable mai save kardo
  let enterQuestionVal = enterQuestion.value;
  let option1Val = option1.value;
  let option2Val = option2.value;
  let option3Val = option3.value;
  let option4Val = option4.value;

  // Validations  to check weather user enter the question and option and correct option properly
  if (enterQuestionVal.trim() === "") {
    alert("enter question");
    return;
  } else if (
    option1Val.trim() === "" ||
    option2Val.trim() === "" ||
    option3Val.trim() === "" ||
    option4Val.trim() === ""
  ) {
    alert("enter all options");
    return;
  } else if (selectOption === null) {
    alert("select one correct answer");
    return;
  }

  let selectOptionVal = selectOption.value;  // selectOption ka excact value ko ek variable mai save kardena 


  // ek object create karna and fir uska multiple keys and woh sab ka value ko v assing kardena 
  let quizQuestion = {
    questionName: enterQuestionVal,
    option: [option1Val, option2Val, option3Val, option4Val],
    correctOption: selectOptionVal,
  };

  quizStorage.push(quizQuestion);   // push the object to the array storage
  counter++;  // fir counter ko v ++ kardo taki question ka count maintain karke rakh saku
  questionCounter.textContent = counter;  // jo questionCounter ka text hai usko counter sai update kardo, we will see like  1,2,3,4,5,6 like this

  // Clear Form Fields
  myForm.reset();  // to reset the form, but yeh sirip html ka form par kaam kartai
});



// Play Quiz Button Logic
playQuizzBtn.addEventListener("click", function () {

  // condition starting mai, check karrai kyu jo quiz ka storage khali tho nai hai na and if yes the return kardo
  if (quizStorage.length === 0) {
    alert("first enter some question");
    return;
  }
  renderQuestion();  // agar khali nai hai then yeh function ko run kardo
});



// Render Question Logic
function renderQuestion() {

  // Clear previous selections, jo v user ka selected value tha woh sab par ek ek karke jao and woh sab ka checked ko false kardo taki user new sai checked kar sake
  selectedUserValue.forEach((radio) => {
    radio.checked = false;
  });

  // Display texts - ui mai text ko display karna
  displayQuestion.textContent = quizStorage[currentQuestionIndex].questionName; // currentQuestionindex refer woh khali array jise ham luk array mai naigate karrai
  showOption1Label.textContent = quizStorage[currentQuestionIndex].option[0];
  showOption2Label.textContent = quizStorage[currentQuestionIndex].option[1];
  showOption3Label.textContent = quizStorage[currentQuestionIndex].option[2];
  showOption4Label.textContent = quizStorage[currentQuestionIndex].option[3];
  questionProgress.textContent = `${currentQuestionIndex + 1} / ${quizStorage.length}`;

  // Restore user selection if already answered, agar user previous par click karke previous par jae then user ko apna selected kya wala answer he mele
  let checkAns = userAnswer[currentQuestionIndex];  // jo v user answer deyai usko ek checkAns variable mai save kardena
  selectedUserValue.forEach((radio) => {  // user ka value par foreach lagan and ek ek karke check karna ki radio ka vlaue and check answer smae hai ya nai and if yes then isko checked karke rakhdena
    if (radio.value === checkAns) {
      radio.checked = true; 
    }
  });
}

// Next & Previous Buttons
nextBtn.addEventListener("click", function () {
  if (currentQuestionIndex < quizStorage.length - 1) {  // next question mai move karna
    currentQuestionIndex++;
    renderQuestion();  // render function ko call karna
  }
});

previousBtn.addEventListener("click", function () { 
  if (currentQuestionIndex > 0) {  // previous question mai jana
    currentQuestionIndex--;
    renderQuestion(); // render function call karna
  }
});

// Track User Answer Changes
selectedUserValue.forEach((element) => {     // jo v user ka selected value hai usper ek foreach lagana and fir har ek vlaue ke lye ek evetn laga dena change and fir kuch v user change/select kartai uska value ko ek variable mai select karna and fir usko useranswer ka currentquestionindex mai save kardena
  element.addEventListener("change", (event) => {
    let selectedValue = event.target.value;
    console.log(selectedValue);
    userAnswer[currentQuestionIndex] = selectedValue;
  });
});

// Show Result Logic
showResultBtn.addEventListener("click", function () {  // jab insper click hoga then 2 variabel create hoga and initial vlaue 0 hoga
  let correctCount = 0;
  let wrongCount = 0;
  
  quizStorage.forEach((evt, i) => {   // jo main array hai quiz ka strogae usper ek foreach look each time we will get ek value and uska index i, so for each value ek coditon kya iska correct answer user ka dya gya answer sai match kartai and if yes correctCount ko kardo ++
    if (evt.correctOption === userAnswer[i]) {
      correctCount++;
    } else {
      wrongCount++;   // nai tho kardo --
    }
  });

  // fir last mai sab sizz display kardena thats all
  correctAnswerDisplay.textContent = correctCount;
  wrongAnswerDisplay.textContent = wrongCount;
  scoreprogressDisplay.textContent = `${correctCount} / ${quizStorage.length}`;
});
