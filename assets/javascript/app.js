var questions = [
    {
        question: "Winston is a good counter for Genji",
        answers: {
            true: "true",
            false: "false"
        },
        rightAnswer: "true"
    },
    {
        question: "Reaper is a good counter for Winston",
        answers: {
            true: "true",
            false: "false"
        },
        rightAnswer: "true"
    },
    {
        question: "Junkrat is a good counter for Pharah",
        answers: {
            true: "true",
            false: "false"
        },
        rightAnswer: "false"
    },
    {
        question: "Pharah is a good counter for Widowmaker",
        answers: {
            true: "true",
            false: "false"
        },
        rightAnswer: "false"
    },
    {
        question: "McCree is a good counter for Tracer",
        answers: {
            true: "true",
            false: "false"
        },
        rightAnswer: "true"
    },
    {
        question: "Bastion is bad at taking down shields",
        answers: {
            true: "true",
            false: "false"
        },
        rightAnswer: "false"
    },

]
//start button begins a countdown timer and displays questions
timer = 60;

function onTimer() {
    $(".timer").html(timer);
    timer--;
    if (timer < 0) {
        alert('You lose!');
    }
    else {
        setTimeout(onTimer, 1000);
    }
}
$("#start").click(function () {
    onTimer();
    console.log(timer);
})

//Set a submit button to get users answers.
//check users answers against rightAnswer
//Set a tally for # correct and # incorrect
//Give a reset button to start again