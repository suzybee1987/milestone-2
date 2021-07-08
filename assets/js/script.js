// event listener from my Hackathon project
// https: //github.com/NicolaLampis/hackathon_ci 

let questionList = null;

document.addEventListener("DOMContentLoaded", function () {
    getJsonThenLoad();
    runGame();
});

const getJsonThenLoad = function () {
    fetch("./assets/js/quiz.json")
        .then(file => {
            return file.json();
            console.log('hey');
        })
        .then(json => {
            questionList = json;
        })
        .then(() => loadQuestions.firstLoad());
};



// character variables  

const gamePlay = (function () {
    const quizLength = 7;
    let currentAnswers = 0;

    // character scores 
    let vimesScore = 0;
    let deathScore = 0;
    let nannyScore = 0;
    let gaspodeScore = 0;
    let robScore = 0;
    let vetinariScore = 0;


    let questionsAsked = [];

    return {

        // reset game for next play 

        replayGame: function () {
            let currentAnswers = 0;

            let vimesScore = 0;
            let deathScore = 0;
            let nannyScore = 0;
            let gaspodeScore = 0;
            let robScore = 0;
            let vetinariScore = 0;
        }
    }
});

const loadQuestions = function () {
    let questionButton = document.getElementById('quizQuestion');
    let answerButton = document.getElementById('answer');
    return {
        runGame: function () {
            document.getElementsByClassName('play').addEventListener('click', () => {
                setTimeout(function () {
                    gamePlay.replayGame();
                    displayQuestion();
                })
            })
        }
    }
}

// functions

// function displayQuestion() {
//     if (questionsAnswered === quizlength) {
//         return checkAnswer();
//     } else {
//         // get next question 
//         // randomise questions 
//         // https: //stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array 

//         const getRandomQ = questionList[Math.floor(Math.random() * questionList.length)];

//         function displayQuestion(questionId, givenAnswer) {
//             const ANSWERS = [];

//             questionsAnswered++;
//             questionsAsked.push(questionId);

//             const QUESTION = questionList.find(d => d.id === questionId);


//             // this is from the hackathon 
//             // if (givenAnswer === question.correct) {
//             //     correctAnswers += 1;
//             // }
//             // return question.correct;
//         }
//     }
// }

// function randomiseQuestion() {
//     let getRandomQ = questionList[Math.floor(Math.random() * questionList.length)];
// }

function displayQuestion() {
    console.log("loaded");
       let question = document.getElementById('quizQuestion');
       question.innerHTML = json;
    }

    //  above we need to grab the question key from json and insert to getRandomQ 



displayQuestion();

// function writeToDocument(type) {
//     getData(type, function (data) {
//         document.getElementById("data").innerHTML = data;
//     });
// }


// functions 
// starts the game 
// function runGame() {

//     displayQuestions();
// }


// checkAnswer()

// incrementCharScore()



// function finalScore() {
//     Math.max(vimesScore, deathScore, nannyScore, gaspodeScore, librarianScore, robScore, vetinariScore);
// }

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
]

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
]

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
]

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
]

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
]

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
]

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
]
