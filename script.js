// Questions
var quizContent = [
  {
    question: 'What are the data types of Javascript?',
    answers: ['<strings>', '<booleans>', '<numbers>', '<arrays>', '<objects>']
  },
  {
    question: 'What are the data types of Javascript?',
    answers: ['<strings>', '<booleans>', '<numbers>', '<arrays>', '<objects>']
  },
];

//  Timer variables
var corrAnsw = '';
var currentIndex = 0;
var time = 59;
var counttime;

// Timer StartBtn
var startButton = document.getElementById('start-button');
startButton.addEventListener('click', loopQuestions);

// Questions loop array
function loopQuestions() {
  document.getElementById('quiz').innerHTML = '';
  corrAnsw = '';
  currentIndex = 0;
  time = 59;
  counttime;
  start();
  populate();
  countdown();
}
// once function starts, startbutton will dissapear 
function start() {
  startButton.classList.add('collapse');
  document.getElementById('quiz').classList.remove('collapse');

  var h5 = document.createElement('h5');
  h5.setAttribute('id', 'current-quest');
  h5.setAttribute('class', 'display-5');

  var button0 = document.createElement('button');
  button0.setAttribute('class', 'btn btn-primary btn-lg button0 aButton');
  button0.setAttribute('role', 'button');

  var button1 = document.createElement('button');
  button1.setAttribute('class', 'btn btn-primary btn-lg button1 aButton');
  button1.setAttribute('role', 'button');

  var button2 = document.createElement('button');
  button2.setAttribute('class', 'btn btn-primary btn-lg button2 aButton');
  button2.setAttribute('role', 'button');

  var button3 = document.createElement('button');
  button3.setAttribute('class', 'btn btn-primary btn-lg button3 aButton');
  button3.setAttribute('role', 'button');

  var hr = document.createElement('hr');
  hr.setAttribute('class', 'my-4');

  var quizForm = document.getElementById('quiz');
  quizForm.innerHTML = '';

  quizForm.appendChild(h5);
  quizForm.appendChild(hr);
  quizForm.appendChild(button0);
  quizForm.appendChild(button1);
  quizForm.appendChild(button2);
  quizForm.appendChild(button3);
  return;
}
// Current question object and answer function
function populate() {
  var currQuestion = quizContent[currentIndex].question;
  var answerArray = quizContent[currentIndex].answers;
  corrAnsw = answerArray[0];

  var shuffledArray = shuffle(answerArray);
  document.querySelector('#current-quest').textContent = currQuestion;
  document.querySelector('.button0').textContent = shuffledArray[0];
  document.querySelector('.button1').textContent = shuffledArray[1];
  document.querySelector('.button2').textContent = shuffledArray[2];
  document.querySelector('.button3').textContent = shuffledArray[3];
}

var button = document.querySelector('#quiz');
button.addEventListener('click', function (event) {
  var target1 = event.target.className;
  console.log(target1.includes('aButton'));
  var selection = event.target.textContent;
  console.log(selection);
  if (target1.includes('aButton')) {
    if (selection !== corrAnsw) {
      time = time - 15;
      document.querySelector('#timer-h1').textContent = time;
      wrongAnswer();
    } else if (selection === corrAnsw) {
      rightAnswer();
    }
    currentIndex++;
    if (currentIndex === 5) {
      quizPassed();
    }
    populate();
    return;
  }
});

function shuffle(array) {
  var copy = [],
    n = array.length,
    i;
  while (n) {
    i = Math.floor(Math.random() * n--);
    copy.push(array.splice(i, 1)[0]);
  }
  return copy;
}

// Countdown timer function, 60 sec. Use if statement to determin failed once timer runs out. Figure out how to restart it if the timer runs out. 
function countdown() {
  document.querySelector('#timer-h1').textContent = 60;
  counttime = setInterval(function () {
    document.querySelector('#timer-h1').textContent = time;
    time--;

    if (time < 0) {
      clearInterval(counttime);
      document.querySelector('#timer-h1').textContent = '00 - No more time!';
      quizFailed();
    }
  }, 1000);
}


// Failing version
function quizFailed() {
  var quiz = document.getElementById('quiz');
  quiz.innerHTML = '';
  var h2create = document.createElement('h2');
  h2create.textContent = 'Test Failed!  ';
  // Duplicate restart function below for passing version. This will restart the quiz
  var restart = document.createElement('button');
  restart.setAttribute('class', 'btn btn-primary btn-lg');
  restart.setAttribute('id', 'start-button');
  restart.textContent = 'Restart';
  // Questions
  quizContent = [
    {
      question: 'What are the data types of Javascript?',
      answers: ['<strings>', '<booleans>', '<numbers>', '<arrays>', '<objects>']
    },
    {
      question: 'What are the data types of Javascript?',
      answers: ['<strings>', '<booleans>', '<numbers>', '<arrays>', '<objects>']
    },


  ];
  quiz.appendChild(h2create);
  quiz.appendChild(restart);
  var startButton = document.getElementById('start-button');
  startButton.addEventListener('click', loopQuestions);
}


// passing version function, duplicate the above 
function quizPassed() {
  clearInterval(counttime);
  var quiz = document.getElementById('quiz');
  quiz.innerHTML = '';
  var h1create = document.createElement('h1');
  h1create.textContent = 'Passed!';
  var restart = document.createElement('button');
  restart.setAttribute('class', 'btn btn-primary btn-lg');
  restart.setAttribute('id', 'start-button');
  restart.textContent = 'Restart';
  quizContent = [
    {
      question: 'What are the data types of Javascript?',
      answers: ['<strings>', '<booleans>', '<numbers>', '<arrays>', '<objects>']
    },
    {
      question: 'What are the data types of Javascript?',
      answers: ['<strings>', '<booleans>', '<numbers>', '<arrays>', '<objects>']
    },
  ];

  quiz.appendChild(h1create);
  quiz.appendChild(restart);
  var startButton = document.getElementById('start-button');
  startButton.addEventListener('click', loopQuestions);
}
