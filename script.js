var questions = [{
        prompt: "What is 5 + 5?\n(a) 5\n\(b) 10",
        answer: "b"
    },
    {
        prompt: "What is 3 * 4?\n(a) 12\n\(b) 7",
        answer: "a"
    },
]
var score = 0;

for (var i = 0; i < questions.length; i++) {
    var response = window.prompt(questions[i].prompt);
    if (response == questions[i].answer) {
        score++;
        alert("Correct");
    } else {
        alert("Wrong")
    }
}
alert("yout got " + score + "/" + questions.length)