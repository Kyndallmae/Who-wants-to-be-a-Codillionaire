// // get scores from local storage

// var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

// highscores.sort(function(a,b) {
//     return b.score - a.score;

// });

// var table = document.getItemById(".table");

// for (var i = 0; i < highscores.length; i++) {
//     var score = highscores[i];
//     var row = document.createElement("tr");

//     var initials = docment.createElement ("td");
//     initials.textContent = score.initials;
//     var scoreBox = document.createElement("td");
//     scoreBox.textContent = score.score;

//     row.appendChild(initials);
//     row.appendChild(scoreBox);

//     table.appendChild(row);
// }