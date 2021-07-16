// variables 
const quizContainer = document.getElementById('quiz');
const answerButton = document.getElementById('.answer');

// character object 
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
	// answer keys in here
	let userAnswers = [];

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

		userAnswers.push(value);
		console.log(userAnswers);
		const gameLength = 10;
		if (userAnswers.length === gameLength) {
			console.log("Hey, you've finished");

			Object.keys(characters);
			// This code says characters isn't iterable 
			// userAnswers.forEach(characters.filter(character));

		};

		quizContainer.innerHTML = "";

	};
	// each character appears the number of times selected
	// use filter will give array and count length
	// pagination when answer button clicked 

	function showSlide(n) {
		if (currentSlide < slides.length - 1) {
			slides[currentSlide].classList.remove('active-slide');
			slides[n].classList.add('active-slide');
			currentSlide = n;
		} else if (currentSlide === slides.length) {
			slides[currentSlide].classList.remove('active-slide');
			showResults();
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
		} else if (currentSlide === slides.length) {
			getResults(this.value);
		}

	});
};