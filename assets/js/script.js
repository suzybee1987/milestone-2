// variables 
const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const answerButton = document.getElementById('.answer');

const characters = {
	death: {
		name: "Death",
		books: [
			"The Colour of Magic", "The Light Fantastic", "Equal Rites", "Mort", "Sourcery", "Wyrd Sisters",
			"Pyramids", "Guards! Guards!", "Eric", "Moving Pictures", "Reaper Man", "Witches Abroad", "Small Gods",
			"Lords and Ladies", "Men At Arms", "Soul Music", "Interesting Times", "Maskerade", "Feet of Clay",
			"Hogfather", "Jingo", "The Last Continent", "Carpe Jugulumn", "The Fifth Elephant", "The Truth", "Thief of Time",
			"The Last Hero", "The Amazing Maurice and His Educated Rodents", "Night Watch", "Monstrous Regiment", "A Hat Full of Sky",
			"Going Postal", "Thud!", "Wintersmith", "Making Money", "Unseen Academicals", "I Shall Wear Midnight",
			"Raising Steam", "The Shepherd's Crown"
		],

	},

	nanny: {
		name: "Nanny Ogg",
		books: [
			"Wyrd Sisters", "Witches Abroad", "Lords and Ladies", "Maskerade", "Carpe Jugulum",
			"The Sea and Little Fishes", "Wintersmith", "I Shall Wear Midnight", "The Shepherd's Crown"
		],
	},

	librarian: {
		name: "The Librarian",
		books: [
			"The Light Fantastic", "Equal Rites", "Sourcery", "Guards! Guards!", "Eric", "Reaper Man", "Men at Arms",
			"Soul Music", "Interesting Times", "Maskerade", "The Last Continent", "The Last Hero", "The Science of Discworld",
			"The Science of Discworld II: the Globe", "The Science of Discworld III: Darwin 's Watch", "Unseen Academicals"
		],
	},

	vetinari: {
		name: "Lord Vetinari",
		books: [
			"Sourcery", "Guards! Guards!", "Moving Pictures", "Men at Arms", "Interesting Times",
			"Feet of Clay", "The Fifth Elephant", "The Truth", "Going Postal", "Thud!", "Making Money",
			"Unseen Academicals", "Raising Steam", "The Colour of Magic", "Soul Music", "The Last Hero",
			"Night Watch"
		],
	},

	rob: {
		name: "Rob Anybody",
		books: [
			"A Hat Full of Sky", "I Shall Wear Midnight", "The Shepherd's Crown", "The Wee Free Men", "Wintersmith"
		],
	},

	gaspode: {
		name: "Gaspode",
		books: [
			"Moving Pictures", "Men at Arms", "The Fifth Elephant", "The Truth", "Soul Music", "Hogfather", "Feet of Clay"
		],
	},
	vimes: {
		name: "Commander Vimes",
		books: [
			"Guards! Guards!", "Men At Arms", "Feet of Clay", "Jingo", "The Fifth Elephant",
			"The Truth", "Night Watch", "Monstrous Regiment", "Thud!", "Where's My Cow?", "Making Money",
			"Unseen Academicals", "Snuff", "Raising Steam"
		],
	}
};

// define questionList 
let questionList = null;


// event listener from my Hackathon project
// https: //github.com/NicolaLampis/hackathon_ci 
// on DOM load function to fetch the JSON file 

document.addEventListener("DOMContentLoaded", function () {
	getJsonThenLoad();
});

const getJsonThenLoad = function () {
	fetch("./assets/js/quiz.json")
		.then(file => {
			return file.json();
		})
		.then(json => {
			questionList = json;
		})
		.then(() => buildQuiz());
};


function buildQuiz() {
	// start the game 
	startGame();

	// function to start the game and load questions
	function startGame() {

		// gameOutput is an array 
		const gameOutput = [];

		// for each question get current question and number 
		questionList.forEach(
			(currentQ, qNumber) => {

				// variable to store answers 
				const answers = [];

				// for each answer add a button to click 
				for (option in currentQ.answers) {
					answers.push(
						`<div class="col-sm-6 m-auto">
                        <button type="button" class="btn btn-light answer h-100" name="question${qNumber}" value="${option}">
						${option}: 
                        ${currentQ.answers[option]}
                        </button>
                    </div>`
					);
				};

				// add q and a to the output 
				gameOutput.push(
					`<div class="slide">
                        <div class="col m-auto text-center" id="quizQuestion">${currentQ.question}</div>
                        <div class="answers row text-center">${answers.join('')}</div>
                </div>`
				);
			}
		);
		// join gameOutput to html push to page 
		quizContainer.innerHTML = gameOutput.join('');
	};

	function getResults(value) {

		// container to put the answers in to 
		const answerContainers = quizContainer.querySelectorAll('.answers');

		// so that each game starts with zero questions asked 
		let questionsAsked = 0;

		// keys in here
		let userAnswers = [];
		
		// each character appears the number of times selected
		// use filter will give array and count length

		// questionList.forEach((currentQ, qNumber) => {

			//find selected answer
			// const answerContainer = answerContainers[qNumber];
			// const selector = `input[value=${option}]:checked`;
			// let userAnswer = (answerContainer.querySelector(selector) || {}).value;

			let amount = value;
			console.log(amount);


		// }
		// );
		// this is coming back undefined 
		// userAnswers.forEach(character => console.log(character));


	}

	// find function

	function checkAnswer(userAnswer) {

		// this is code from the hackathon and explained by Tobi. find() needs to return a callback function 
		// answer: function (questionId, givenAnswer) {
		// 	givenAnswers += 1;
		// 	questionsAsked.push(questionId);

		// 	const question = questionList.find(d => d.id === questionId);

		// 	if (givenAnswer === question.correct) {
		// 		correctAnswers += 1;
		// 	}

		// 	return question.correct;
		// },

		// // use includes?
		// if (questionList.includes(userAnswer)) {

		// 	answerContainer.push(userAnswer);


	};

	// pagination when answer button clicked 

	function showSlide(n) {
		slides[currentSlide].classList.remove('active-slide');
		slides[n].classList.add('active-slide');
		currentSlide = n;
		if (currentSlide === slides.length) {
			slides.classList.remove('active-slide');
			submitButton.style.display = 'inline-block';
		} else {
			checkAnswer();
		}
	}

	// pagination show next question 
	function showNextSlide() {
		showSlide(currentSlide + 1);
	}

	function showPreviousSlide() {
		showSlide(currentSlide - 1);
	}

	let slides = document.querySelectorAll(".slide");
	let currentSlide = 0;

	showSlide(currentSlide);


	// jquery listening for answer clicked and displaying next question

	$('.answer').click(function () {
		if (currentSlide < slides.length) {
			showNextSlide();
			getResults(this.value);			
		} 
			
	});
};