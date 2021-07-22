// variables 
const quizContainer = document.getElementById('quiz');
const answerButton = document.getElementsByClassName('.answer');
const volume = document.getElementsByClassName('volume');
const audio = document.querySelector(`audio[class="audioAnswer"]`);

const characters = {
	death: {
		name: "Death",
		description: "Death is curious. Death likes cats. Death is not invisible but your eyes may not comprehend his appearance. Death does not kill, but collects.",
		books: [
			" Mort", " Reaper Man", " Soul Music", " Hogfather", " Thief of Time", " and has cameos in most other Discworld novels"
		],
		image: "assets/images/characters/noun_death.png",
	},

	nanny: {
		name: "Nanny Ogg",
		description: 'Nanny "Gytha" Ogg is everyone\'s favourite dirty minded old witch, famous for being kind hearted to all but her daughters in law. And after knowing her for 15 minutes you\'ll think you\'ve known her your full life.',
		books: [
			" Wyrd Sisters", " Witches Abroad", " Lords and Ladies", " Maskerade", " Carpe Jugulum",
			" The Sea and Little Fishes", " Wintersmith", " I Shall Wear Midnight", " The Shepherd's Crown"
		],
		image: "assets/images/characters/noun_nanny.png",
	},

	librarian: {
		name: "The Librarian",
		description: "The Librarian wasn't always an orangutan but got caught in a magical spell. He's happier this way and everyone's forgotten what he used to look like. Just DON'T CALL HIM A MONKEY",
		books: [
			" The Light Fantastic", " Equal Rites", " Sourcery", " Guards! Guards!", " Eric", " Reaper Man", " Men at Arms",
			" Soul Music", " Interesting Times", " Maskerade", " The Last Continent", " The Last Hero", " Unseen Academicals"
		],
		image: "assets/images/characters/noun_librarian.png",
	},

	vetinari: {
		name: "Lord Vetinari",
		description: "Lord Vetinari is the Patrician of Ankh Morpork and brings a special blend of tyrany and common sense to rule. He also knows everything. Yes, even what you did last night, you naughty so-and-so.",
		books: [
			" Sourcery", " Guards! Guards!", " Moving Pictures", " Men at Arms", " Interesting Times",
			" Feet of Clay", " The Fifth Elephant", " The Truth", " Going Postal", " Thud!", " Making Money",
			" Unseen Academicals", " Raising Steam", " The Colour of Magic", " Soul Music", " The Last Hero",
			" Night Watch"
		],
		image: "assets/images/characters/noun_vetinari.png",
	},

	rob: {
		name: "Rob Anybody",
		description: "Rob Anybody is the leader of the Nac Mac Feegles, famous for their height (or lack thereof at 6\" high) and ability to defeat any foe. They also enjoy a bit of thieving and drinking ",
		books: [
			" A Hat Full of Sky", " I Shall Wear Midnight", " The Shepherd's Crown", " The Wee Free Men", " Wintersmith"
		],
		image: "assets/images/characters/noun_rob.png",
	},

	gaspode: {
		name: "Gaspode",
		description: "Gaspode is a small terrier-like dog who possesses human level intelligence and the ability to speak (however since dogs can't speak humans take his speech as their own thoughts resulting in hilarity). He has many diseases that haven't killed him due to infighting.",
		books: [
			" Moving Pictures", " Men at Arms", " The Fifth Elephant", " The Truth", " Soul Music", " Hogfather", " Feet of Clay"
		],
		image: "assets/images/characters/noun_gaspode.png",
	},
	vimes: {
		name: "Commander Vimes",
		description: "Sam Vimes has many titles: His Grace, His Excellency, Duke of Ankh and others including Blackboard Monitor Vimes. Born into poverty and now a reluctant member of the nobility, having married the richest woman in the city, Sam can't turn a blind eye to crime no matter the culprit.",
		books: [
			" Guards! Guards!", " Men At Arms", " Feet of Clay", " Jingo", " The Fifth Elephant",
			" The Truth", " Night Watch", " Monstrous Regiment", " Thud!", " Where's My Cow?", " Making Money",
			" Unseen Academicals", " Snuff", " Raising Steam"
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
	audio.muted = true;

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
                        <button type="button" class="btn btn-light answer" name="question${qNumber}" value="${option}">
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
		const volume = [];
	};

	function getResults(value) {
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
		let description = 0;
		let image = 0;

		if (chosenAnswer.includes('vimes')) {
			chosenAnswer = [characters.vimes.name];
			books = [characters.vimes.books];
			description = [characters.vimes.description];
			image = [characters.vimes.image];
		} else if (chosenAnswer.includes('death')) {
			chosenAnswer = [characters.death.name];
			books = [characters.death.books];
			image = [characters.death.image];
			description = [characters.death.description];
		} else if (chosenAnswer.includes('gaspode')) {
			chosenAnswer = [characters.gaspode.name];
			books = [characters.gaspode.books];
			image = [characters.gaspode.image];
			description = [characters.gaspode.description];
		} else if (chosenAnswer.includes('rob')) {
			chosenAnswer = [characters.rob.name];
			books = [characters.rob.books];
			image = [characters.rob.image];
			description = [characters.rob.description];
		} else if (chosenAnswer.includes('vetinari')) {
			chosenAnswer = [characters.vetinari.name];
			books = [characters.vetinari.books];
			image = [characters.vetinari.image];
			description = [characters.vetinari.description];
		} else if (chosenAnswer.includes('nanny')) {
			chosenAnswer = [characters.nanny.name];
			books = [characters.nanny.books];
			image = [characters.nanny.image];
			description = [characters.nanny.description];
		} else if (chosenAnswer.includes('librarian')) {
			chosenAnswer = [characters.librarian.name];
			books = [characters.librarian.books];
			image = [characters.librarian.image];
			description = [characters.librarian.description];
		}

		// This function to display the results to the user 
		function showResults() {
			// gameOutput is an array 
			const gameOutput = [];

			// add q and a to the output 
			gameOutput.push(
				`<div id="results">
					<div class="imageResult">
						<img src=${image}>
					</div>
					<h2 class="col results m-3 text-center"> You are ${chosenAnswer}!</h2>
					<div class="col-12 m-auto text-center books">${description}
   						 <p>You are in these books: ${books}!</p>
					</div></div>
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
		$(this).addClass('clicked');

		if (!audio) return;
		audio.currentTime = 0;
		audio.play();
	});

	// click to mute/unmute and also change the image 
	// https: //stackoverflow.com/questions/5571285/how-can-i-change-image-source-on-click-with-jquery
	$('.volume').click(function (e) {
		// e.preventDefault();
		if (audio.muted == true) {
			audio.muted = false;

			$('.volume').attr('src', 'assets/images/noun_volume.png');
		} else if (audio.muted == false) {
			audio.muted = true;
			$('.volume').attr('src', 'assets/images/noun_mute.png');
		}
	});
	//https://code-institute-room.slack.com/archives/C7J2ZAVHB/p1618324403124300?thread_ts=1618323545.123900&cid=C7J2ZAVHB
	 $(".navbar-nav>li>a").on("click", function () {
	 	$(".navbar-collapse").collapse("hide");
	 });
};