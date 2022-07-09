(function() {
  const myQuestions = [
    {
      question: "1.What is the smallest header in HTML by default?",
      answers: {
        a: "h4",
        b: "h3",
        c: "h6",
		d: "h1"
       },
      correctAnswer: "c" 
    
    },
     {
      question: "2.JavaScript file has an extension of?",
      answers: {
        a: ".js",
        b: ".javascript",
        c: ".java",
		d: ".script"
       
      },
      correctAnswer: "a"
    },

     {
      question: "3.CSS stands for___?",
      answers: {
        a: "Color Style Sheet",
        b: "Cascade Style Sheet",
        c: "Cascading Style Sheet",
		d: "Cascade Sheet Style"
       
      },
      correctAnswer: "c"
    },
     {
      question: "4.How can you insert a comment in a CSS file?",
      answers: {
        a: "//This is a comment//",
        b: "/*This is a comment*/",
        c: "/This is a comment/",
		d: "*This is a comment*"
       
      },
      correctAnswer: "b"
    },
     {
      question: "5.HTML is what type of language?",
      answers: {
        a: "Scripting language",
        b: "Markup language",
        c: "Programming language",
		d: "Network language"
       
      },
      correctAnswer: "b"
    },
  ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
	  
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
	
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1); 
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }
  
  
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();
  
 
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
  
})();


        
        
   
    
    
    
    
        

    