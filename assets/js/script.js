(function () {
// function to start the game 
    function startGame() {
        const gameOutput = [];

        // for each question get current question and number 
        questionList.forEach(
            (currentQ, qNumber) => {
                // variable to store answers 

                const answers = [];
                // for each answer add a button to click 

                for (option in currentQ.answers) {
                    answers.push(
                        `<div class="col m-auto">
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
                        <div class="answers text-center">${answers.join('')}</div>
                </div>`
                );
            }
        );
        // join gameOutput to html push to page 
        quizContainer.innerHTML = gameOutput.join('');
    };

    // function quizResults() {

    //     const answerContainers = quizContainer.querySelectorAll('.answers');
    //     // character scores 

    //     let vimesScore = 0;
    //     let deathScore = 0;
    //     let nannyScore = 0;
    //     let gaspodeScore = 0;
    //     let robScore = 0;
    //     let vetinariScore = 0;

    //     questionList.forEach((currentQ, qNumber) => {

    //         const answerContainer = answersContainers[qNumber];
    //         // selector variable assigned to whichever button clicked

    //         // this isn't working right now 
    //         // maybe try: 
    //         // let selector = `button[value=]:clicked`;


    //         const selector = `button[name=question${qNumber}]:clicked`;
    //         // chosenAnswer assigned to the value of the button clicked 
    //         const chosenAnswer = (answerContainer.querySelector(selector) || {}).value;

    //         if (vimes.includes(chosenAnswer)) {
    //             vimesScore++;
    //             console.log('Vimes!');
    //         } else if (death.includes(chosenAnswer)) {
    //             deathScore++;
    //         } else if (gaspode.includes(chosenAnswer)) {
    //             gaspodeScore++;
    //         } else if (vetinari.includes(chosenAnswer)) {
    //             vetinariScore++;
    //         } else if (nanny.includes(chosenAnswer)) {
    //             nannyScore++;
    //         } else if (rob.includes(chosenAnswer)) {
    //             robScore++;
    //         } else {
    //             librarianScore++;
    //         }
    //     });

    //     let result = Math.max(vimesScore, deathScore, nannyScore, gaspodeScore, librarianScore, robScore, vetinariScore);
    // };

    // pagination function 
    
    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if (currentSlide === 0) {
            previousButton.style.display = 'none';
        } else {
            previousButton.style.display = 'inline-block';
        }
        if (currentSlide === slides.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        } else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }

    // pagination show next question 
    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    // variables 
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    // event listener from my Hackathon project
    // https: //github.com/NicolaLampis/hackathon_ci 


    // define questionList 
    // let questionList = [];


    // on DOM load function to fetch the JSON file 

    // document.addEventListener("DOMContentLoaded", function () {
    //     getJsonThenLoad();
    // });

    // const getJsonThenLoad = function () {
    //     fetch("./assets/js/quiz.json")
    //         .then(file => {
    //             return file.json();
    //             console.log('hey');
    //         })
    //         .then(json => {
    //             questionList = json;
    //         })
    //         .then(() => startGame())
    //     .catch (function () {
    //             alert('error!');
    //         })
    // };

    // user keys and values 

    const vimes = [
        "Commander Vimes",
        [
            "Guards! Guards!", "Men At Arms", "Feet of Clay", "Jingo", "The Fifth Elephant",
            "The Truth", "Night Watch", "Monstrous Regiment", "Thud!", "Where's My Cow?", "Making Money",
            "Unseen Academicals", "Snuff", "Raising Steam"
        ],
        [{
            1: "A BLT, heavy on the B",
            3: "Chasing criminals and setting traps for assassins",
            5: "My own feet",
            6: "Where's My Cow?",
            7: "A good cigar",
            8: "Only if I was really hungry",
            9: "Nobby Nobbs"
        }]
    ];

    const death = [
        "Death",
        [
            "The Colour of Magic", "The Light Fantastic", "Equal Rites", "Mort", "Sourcery", "Wyrd Sisters",
            "Pyramids", "Guards! Guards!", "Eric", "Moving Pictures", "Reaper Man", "Witches Abroad", "Small Gods",
            "Lords and Ladies", "Men At Arms", "Soul Music", "Interesting Times", "Maskerade", "Feet of Clay",
            "Hogfather", "Jingo", "The Last Continent", "Carpe Jugulumn", "The Fifth Elephant", "The Truth", "Thief of Time",
            "The Last Hero", "The Amazing Maurice and His Educated Rodents", "Night Watch", "Monstrous Regiment", "A Hat Full of Sky",
            "Going Postal", "Thud!", "Wintersmith", "Making Money", "Unseen Academicals", "I Shall Wear Midnight",
            "Raising Steam", "The Shepherd's Crown"
        ],
        [{
            1: "I COULD MURDER A CURRY",
            3: "I'M HANDY WITH A SCYTHE",
            4: "CATS. CATS ARE NICE",
            5: "BINKY",
            6: "A MYSTERY NOVEL",
            8: "I DON'T EAT MY FRIENDS",
            9: "NOBBY NOBBS"
        }]
    ];

    const nanny = [
        "Nanny Ogg",
        [
            "Wyrd Sisters", "Witches Abroad", "Lords and Ladies", "Maskerade", "Carpe Jugulum",
            "The Sea and Little Fishes", "Wintersmith", "I Shall Wear Midnight", "The Shepherd's Crown"
        ],
        [{
            4: "My handsome Greebo",
            5: "Broomstick",
            6: "My Cookbook",
            7: "Scumble and a nice man ;)",
            10: "Don't do anything I wouldn't do, if you ever find anything I wouldn't do."
        }]
    ];

    const librarian = [
        "The Librarian",
        [
            "The Light Fantastic", "Equal Rites", "Sourcery", "Guards! Guards!", "Eric", "Reaper Man", "Men at Arms",
            "Soul Music", "Interesting Times", "Maskerade", "The Last Continent", "The Last Hero", "The Science of Discworld",
            "The Science of Discworld II: the Globe", "The Science of Discworld III: Darwin 's Watch", "Unseen Academicals"
        ],
        [{
            2: "Going to the pub and eating peanuts",
            3: "Attacking anyone who calls me a monkey",
            7: "Bananas and Organ Music",
            10: "OOK!"
        }]
    ];

    const vetinari = [
        "Lord Vetinari",
        [
            "Sourcery", "Guards! Guards!", "Moving Pictures", "Men at Arms", "Interesting Times",
            "Feet of Clay", "The Fifth Elephant", "The Truth", "Going Postal", "Thud!", "Making Money",
            "Unseen Academicals", "Raising Steam", "The Colour of Magic", "Soul Music", "The Last Hero",
            "Night Watch"
        ],
        [{
            2: "Playing a board game with a friend",
            4: "Dogs, of course",
            5: "Coach",
            6: "Written music rather than listening to it performed",
            8: "I'd rather train them",
            9: "Cecil Wormsborough St. John 'Nobby' Nobbs"
        }]
    ];

    const rob = [
        "Rob Anybody",
        [
            "A Hat Full of Sky", "I Shall Wear Midnight", "The Shepherd's Crown", "The Wee Free Men", "Wintersmith"
        ],
        [{
            1: "Food? I'd rather drink! Anything vaguely alcoholic.",
            2: "Drinking, fighting and stealing",
            3: "Drinking, fighting and stealing",
            4: "Ships!",
            9: "Daft Wullie",
            10: "CRIVENS!"
        }]
    ];

    const gaspode = [
        "Gaspode",
        [
            "Moving Pictures", "Men at Arms", "The Fifth Elephant", "The Truth", "Soul Music", "Hogfather", "Feet of Clay"
        ],
        [{
            1: "Pride is all very well, but a sausage is a sausage",
            7: "A warm place by the fire and NO BATHS",
            8: "Abso-woof-ly",
            10: "Bark"
        }]
    ];

const questionList =
[{
        "id": 1,
        "question": "Which of these statements about food are your favourite?",
        "answers": {
            "a": "I COULD MURDER A CURRY",
            "b": "Pride is all very well, but a sausage is a sausage.",
            "c": "A BLT, heavy on the B",
            "d": "Food? I'd rather drink! Anything vaguely alcoholic."
        }
    },

    {
        "id": 2,
        "question": "Which of these activities is your idea of a good time?",
        "answers": {
            "a": "Singing songs like 'The Hedgehog Can Never Be Buggered At All'",
            "b": "Playing a board game with a friend",
            "c": "Drinking, fighting and stealing",
            "d": "Going to the pub and eating peanuts"
        }
    },
    {
        "id": 3,
        "question": "Which of these is your specialist subject?",
        "answers": {
            "a": "Attacking anyone who calls me a monkey",
            "b": "I'M HANDY WITH A SCYTHE",
            "c": "Drinking, fighting and stealing",
            "d": "Chasing criminals and setting traps for assassins"
        }
    },
    {
        "id": 4,
        "question": "Which of these is your favourite animal?",
        "answers": {
            "a": "CATS. CATS ARE NICE",
            "b": "My handsome Greebo",
            "c": "Dogs, of course",
            "d": "Ships!"
        }
    },
    {
        "id": 5,
        "question": "Which is your favourite mode of transport?",
        "answers": {
            "a": "My own feet",
            "b": "Coach",
            "c": "BINKY",
            "d": "Broomstick"
        }
    },
    {
        "id": 6,
        "question": "Which is your favourite reading material?",
        "answers": {
            "a": "Where's My Cow?",
            "b": "My Cookbook",
            "c": "A MYSTERY NOVEL",
            "d": "Written music rather than listening to it performed"
        }
    },
    {
        "id": 7,
        "question": "Which would you prefer as a Hogswatch present?",
        "answers": {
            "a": "Bananas and Organ Music",
            "b": "A good cigar",
            "c": "Scumble and a nice man ;)",
            "d": "A warm place by the fire and NO BATHS"
        }
    },

    {
        "id": 8,
        "question": "Would you ever eat a fried rat?",
        "answers": {
            "a": "Only if I was really hungry",
            "b": "Abso-woof-ly",
            "c": "I DON'T EAT MY FRIENDS",
            "d": "I'd rather train them"
        }
    },
    {
        "id": 9,
        "question": "Who is the strangest person you've met?",
        "answers": {
            "a": "Nobby Nobbs",
            "b": "Cecil Wormsborough St. John 'Nobby' Nobbs",
            "c": "NOBBY NOBBS",
            "d": "Daft Wullie"
        }
    },
    {
        "id": 10,
        "question": "What's your favourite saying?",
        "answers": {
            "a": "OOK!",
            "b": "CRIVENS!",
            "c": "Don't do anything I wouldn't do, if you ever find anything I wouldn't do.",
            "d": "Bark"
        }
    }

]


    startGame();

    // pagination variables 
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    let slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(currentSlide);

    // Event listeners
    // submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);

})();