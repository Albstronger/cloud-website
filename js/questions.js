window.addEventListener("load", function (event) {
    generateQuestions();
});

function generateQuestions() {
    let questions = $.getJSON("json/questions.json");

    let questions_container = document.getElementById("questions");

    for (let i = 0; i < Object.keys(questions).length; i++) {
        let question = document.createElement("div");
        question.innerHTML =
            "<div class='row'>" +
            "<div class='col-lg-3'></div>" +
            "<div class='col-lg-6 box'>" +
            "<h3>" +
            (i + 1) +
            ") " +
            questions[i].question +
            "</h3>" +
            "<p>" +
            questions[i].answer +
            "</p>" +
            "</div>" +
            "<div class='col-lg-3'></div>" +
            "</div>";
        questions_container.appendChild(question);
        console.log("hola");
    }
}
