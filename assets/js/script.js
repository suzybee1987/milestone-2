// variables 
const quizContainer = document.getElementById('quiz');
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
		image: "assets/images/characters/noun_death.png",
	},

	nanny: {
		name: "Nanny Ogg",
		books: [
			"Wyrd Sisters", "Witches Abroad", "Lords and Ladies", "Maskerade", "Carpe Jugulum",
			"The Sea and Little Fishes", "Wintersmith", "I Shall Wear Midnight", "The Shepherd's Crown"
		],
		image: "assets/images/characters/noun_nanny.png",
	},

	librarian: {
		name: "The Librarian",
		books: [
			"The Light Fantastic", "Equal Rites", "Sourcery", "Guards! Guards!", "Eric", "Reaper Man", "Men at Arms",
			"Soul Music", "Interesting Times", "Maskerade", "The Last Continent", "The Last Hero", "The Science of Discworld",
			"The Science of Discworld II: the Globe", "The Science of Discworld III: Darwin 's Watch", "Unseen Academicals"
		],
		image: "assets/images/characters/noun_librarian.png",
	},

	vetinari: {
		name: "Lord Vetinari",
		books: [
			"Sourcery", "Guards! Guards!", "Moving Pictures", "Men at Arms", "Interesting Times",
			"Feet of Clay", "The Fifth Elephant", "The Truth", "Going Postal", "Thud!", "Making Money",
			"Unseen Academicals", "Raising Steam", "The Colour of Magic", "Soul Music", "The Last Hero",
			"Night Watch"
		],
		image: "assets/images/characters/noun_vetinari.png",
	},

	rob: {
		name: "Rob Anybody",
		books: [
			"A Hat Full of Sky", "I Shall Wear Midnight", "The Shepherd's Crown", "The Wee Free Men", "Wintersmith"
		],
		image: "assets/images/characters/noun_rob.png",
	},

	gaspode: {
		name: "Gaspode",
		books: [
			"Moving Pictures", "Men at Arms", "The Fifth Elephant", "The Truth", "Soul Music", "Hogfather", "Feet of Clay"
		],
		image: "assets/images/characters/noun_rob.png",
	},
	vimes: {
		name: "Commander Vimes",
		books: [
			"Guards! Guards!", "Men At Arms", "Feet of Clay", "Jingo", "The Fifth Elephant",
			"The Truth", "Night Watch", "Monstrous Regiment", "Thud!", "Where's My Cow?", "Making Money",
			"Unseen Academicals", "Snuff", "Raising Steam"
		],
		image: "assets/images/characters/noun_vimes.png",
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
		console.log(userAnswers);
		//  help from Sean Young on Slack with this map to find the chosenAnswer
		const answerMap = {
			gaspode: 0,
			librarian: 0,
			death: 0,
			rob: 0,
			nanny: 0,
			vimes: 0
		}

		// Stand in for the user answering quiz questions:
		for (let i = 0; i < userAnswers.length; i++) {
			answerMap[userAnswers[i]]++;
		}
		// Getting the maximum entry
		let chosenAnswer = [...Object.entries(answerMap)].reduce((a, e) => e[1] > a[1] ? e : a);
		let books = 0;
		let image = 0;

		if (chosenAnswer == 'vimes') {
			chosenAnswer = [characters.vimes.name];
			books = [characters.vimes.books];
			image = [characters.vimes.image];
		} else if (chosenAnswer == 'death') {
			chosenAnswer = [characters.death.name];
			books = [characters.death.books];
			image = [characters.death.image];
		} else if (chosenAnswer == 'gaspode') {
			chosenAnswer = [characters.gaspode.name];
			books = [characters.gaspode.books];
			image = [characters.gaspode.image];
		} else if (chosenAnswer == 'rob') {
			chosenAnswer = [characters.rob.name];
			books = [characters.rob.books];
			image = [characters.rob.image];
		} else if (chosenAnswer == 'vetinari') {
			chosenAnswer = [characters.vetinari.name];
			books = [characters.vetinari.books];
			image = [characters.vetinari.image];
		} else if (chosenAnswer == 'nanny') {
			chosenAnswer = [characters.nanny.name];
			books = [characters.nanny.books];
			image = [characters.nanny.image];
		} else {
			chosenAnswer = [characters.librarian.name];
			books = [characters.librarian.books];
			image = [characters.librarian.image];
		}
		// chosenAnswer = chosenAnswer;
		// books = chosenAnswer[1];

		// This function to display the results to the user 
		function showResults() {
			console.log(`Hey! You picked ${chosenAnswer}`);
			// gameOutput is an array 
			const gameOutput = [];

			// add q and a to the output 
			gameOutput.push(
				`<div id="results">
				<div class="imageResult">
				<img src=${image}>
				</div>
						
                        <h2 class="col results m-auto text-center"> You are ${chosenAnswer}! </h2>
                        <div class="text-center books">You are in ${books}!</div>
						<div class="text-center">
						<button class="btn btn-secondary resultsBtn"><a href="game.html">Try again?</a></button></div>
                </div>`
			);
			quizContainer.innerHTML = gameOutput.join('');
		}
		// join gameOutput to html push to page 

		showResults(chosenAnswer);

	};
	// pagination when answer button clicked 
	// This function allows each question to be displayed until the last and then calls getResults function
	function showSlide(n) {
		if (currentSlide < slides.length - 1) {
			slides[currentSlide].classList.remove('active-slide');
			slides[n].classList.add('active-slide');
			currentSlide = n;
		} else {
			slides[currentSlide].classList.remove('active-slide');
			getResults();
		};

	}

	// pagination show next question 
	function showNextSlide() {
		showSlide(currentSlide + 1);
	}

	let slides = document.querySelectorAll(".slide");
	let currentSlide = 0;

	showSlide(currentSlide);


	// jquery listening for answer clicked and displaying next question

	$('.answer').click(function () {
		userAnswers.push(this.value);
		showNextSlide();
	});
};