window.onload = (event) => {
    myModal.show();
};

let vimes;
let death;
let nanny;
let question;
let answer;

function quizzy() {
    if (answer == vimes) {
        vimes++;
    } else if (answer == death) {
        death++;
    } else if (answer == nobby) {
        nobby++;
    } else {
        console.log("no character");
    }
};