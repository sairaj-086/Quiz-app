let currentIndex = 0;
let score = 0;
//definer questions
const questions = [
  {
    question: "What is 2 + 2?",
    options: ["2", "3", "4", "5"],
    correct: "4"
  },
  {
    question: "Capital of India?",
    options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
    correct: "Delhi"
  },
  {
    question: "what is tajmahal",
    options: ["Iraq", "India", "Dubai", "Pakistan"],
    correct: "India",
  },
  {
    question: "Which state is known as the Land of Five Rivers?",
    options: ["Punjab", "haryana", "Uttar Pradesh", "Jammu & Kashmir"],
    correct : "Punjab",
  },
  {
    question: "What is the speed of light in kilometers per second",
    options:["~300,000 km/s", "~150,000 km/s", "~400,000 km/s", "~200,000 km/s"],
    correct: "~300,000 km/s",
  },
  {
    question : "What comes next in the series: 2,5,7,12,19,?",
    options : ["26", "30", "31", "34"],
    correct: "31",
  },
  {
    question: "For what period does the Vice President of India hold office?",
    options: ["6 years", "4 years", "5 years", "3 years"],
    correct: "5 years",
  },
  {
    question: "Where was Indias first national Museum opened?",
    options: ["Delhi", "Hyderabad", "Rajastan", "Mumbai"],
    correct: "Mumbai"
  },
  {
    question: "The worlds nation 5G mobile network was launched by which country?",
    options: ["japan", "Asia", "South Korea", "Malaysia"],
    correct: "South Korea",
  },
  {
    question: "The green planet in the solar system is?",
    options: ["Mars", "Uranus", "venus", "Earth"],
    correct: "Uranus",
  },
];

//show question function
function showQuestion() {

    let q = questions[currentIndex];

    document.getElementById("question").innerText = q.question;

    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    console.log(q);

    q.options.forEach(option => {
       let btn = document.createElement("button");
       btn.innerText = option;

       btn.addEventListener("click", () => {
          checkAnswer(option);
    });
    
    optionsDiv.appendChild(btn);
  });
  let progress = document.getElementById("progress");

  let percent = ((currentIndex + 1) / questions.length) * 100;
  progress.style.width = percent + "%";

}

//check answer
function checkAnswer(selected) {
    let correct = questions[currentIndex].correct;

    let buttons = document.querySelectorAll("#options button");

    buttons.forEach(btn => {
       if (btn.innerText === correct) {
         btn.style.backgroundColor = "green";  //correct
       } else {
         btn.style.backgroundColor = "orange";  // wrong
       }
       btn.disabled = true;
    });

    if(selected === correct) {
        score++;
    }
}

//prev button logic
document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex--;

  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

//Next button Logic
document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex++;

  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});



//show score
function showScore() {
  document.getElementById("question").innerText = "Quiz Finished!";
  document.getElementById("options").innerHTML = "";
  document.getElementById("score").innerText = 
    "Your Score: " + score + "/" + questions.length;
}
showQuestion();

//
document.getElementById("restartBtn").addEventListener("click", () => {
    currentIndex = 0;
    score = 0;
    showQuestion();
});





