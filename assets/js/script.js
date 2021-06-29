// Single responsibility function

runGame()
checkAnswer()
incrementCharScore()
displayQuestion()

const questionsToAsk = 10;
let questionsAnswered = 0;


// character scores

let vimesScore = 0;
let deathScore = 0;
let nannyScore = 0;
let gaspodeScore = 0;
let librarianScore = 0;
let robScore = 0;
let vetinariScore = 0;


function finalScore() {
    Math.max(vimesScore, deathScore, nannyScore, gaspodeScore, librarianScore, robScore, vetinariScore);
}

<button onclick = "vimes()" > answer </button>

function vimes() {
    vimesScore++
};

<button onclick = "death()" > answer </button>

function death() {
    deathScore++
};


<button onclick = "nanny()" > answer </button>

function nanny() {
    nannyScore++
};
