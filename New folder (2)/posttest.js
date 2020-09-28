
// Don't touch the below code

(function() {
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
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
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
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: " Which of the following is not an advantage of sand casting ",
      answers: {
        a: "Low cost",
        b: "Almost any metal can be cast",
        c: "No limit to part size",
        d: "Better accuracy"
      },
      correctAnswer: "d"
    },

    {
      question: "The passage through which  molten metal reach mould cavity from pouring basin is called",
      answers: {
        a: "Sprue",
        b: "Runner",
        c: "Gate",
        d: "Flask"
      },
      correctAnswer: "a"
    },

    {
      question: "Which of the following is not a casting method?",
      answers: {
        a: "Shell moulding",
        b: "Injection moulding",
        c: "3-D printing",
        d: "Sand casting"
      },
      correctAnswer: "c"
    },

    {
      question: "A model of casting, constructed to use for forming a mould in damp sand, is called as ",
      answers: {
        a: "Runner",
        b: "Pattern",
        c: "Gate",
        d: "Cover"
      },
      correctAnswer: "b"
    }
     {
        question: " Match the following contents of green sand in Group 1 with their approximate per cent in Group 2.

        1. Silica -------------------------- A. 5 to 10 per cent
        2. Clay ---------------------------  B. 2 to 5 per cent
        3. Bentonite ---------------------   C. 8 to 15 per cent
        4. Coal dust ---------------------   D. 7 to 8 per cent
        5. Water --------------------------  E. up to 75 per cent  ",
        answers: {
          a: " 1-(C), 2-(B), 3-(A), 4-(D), 5-(E)",
          b: " 1-(E), 2-(C), 3-(B), 4-(A), 5-(D)",
          c: "1-(D), 2-(E), 3-(B), 4-(A), 5-(C)",
          d: "1-(D), 2-(E), 3-(B), 4-(A), 5-(C)"
        },
        correctAnswer: "b"
      },
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
