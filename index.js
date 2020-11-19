function newDare() {
    var randomNumber = Math.floor(Math.random() * (dares.length));
    document.getElementById('insertDare').innerHTML = "<b>" + dares[randomNumber] + "</b>";
}

function newTruth() {
    var randomNumber = Math.floor(Math.random() * (truths.length));
    document.getElementById('insertTruth').innerHTML = "<b>" + truths[randomNumber] + "</b>";
}