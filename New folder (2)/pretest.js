
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
      question: "The ability of the moulding sand to withstand the heat of melt without showing any sign of softening is called as",
      answers: {
        a: "strength or cohesiveness",
        b: "refractiveness",
        c: "collapsibility",
        d: "adhesiveness"
      },
      correctAnswer: "b"
    },

    {
      question: " A model of casting, constructed to use for forming a mould in damp sand, is called as",
      answers: {
        a: "sand construction",
        b: "pattern",
        c: "cover",
        d: "none of the above"
      },
      correctAnswer: "b"
    },

    {
      question: " Which of the following is not a requirement of a good pattern? ",
      answers: {
        a: "It should be light in weight to handle easily",
        b: "It should be smooth to make casting surface smooth",
        c: "It should have low strength to break it and to remove casting easily",
        d: "none of the above"
      },
      correctAnswer: "c"
    },
    {
        question: " Permeability can be defined as the property of moulding sand ",
        answers: {
          a: "to allow gases to escape easily from the mould",
          b: "to hold sand grains together",
          c: "to withstand the heat of melt without showing any sign of softening",
          d: "none of the above"
        },
        correctAnswer: "a"
      },
    {
        question: "Blow holes in casting are caused by",
    answers: {
          a: "excessive moisture",
          b: "low permeability",
          c: "excessive fine grains",
          d: "all of the above"
        },
        correctAnswer: "d"
      }
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
