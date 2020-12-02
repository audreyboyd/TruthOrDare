function readyPlayer(){
    var id = sessionStorage.getItem("id");
    var input1 = document.getElementById("player1Name");
    sessionStorage.setItem("player1", input1.value());
    // if (id === "1"){
    //     var input1 = document.getElementById("player1Name");
    //     sessionStorage.setItem("player1", input1.value());
    // }
    // else if (id === "2"){
    //     var input1 = document.getElementById("player1Name");
    //     sessionStorage.setItem("player1", input1.value());
    //     var input2 = document.getElementById("player2Name");
    //     sessionStorage.setItem("player2", input2.value());
    // }
    // else if (id === "3"){
    //     var input1 = document.getElementById("player1Name");
    //     sessionStorage.setItem("player1", input1.value());
    //     var input2 = document.getElementById("player2Name");
    //     sessionStorage.setItem("player2", input2.value());
    //     var input3 = document.getElementById("player3Name");
    //     sessionStorage.setItem("player3", input3.value());
    // }
    // else if (id === "4"){
    //     var input1 = document.getElementById("player1Name");
    //     sessionStorage.setItem("player1", input1.value());
    //     var input2 = document.getElementById("player2Name");
    //     sessionStorage.setItem("player2", input2.value());
    //     var input3 = document.getElementById("player3Name");
    //     sessionStorage.setItem("player3", input3.value());
    //     var input4 = document.getElementById("player4Name");
    //     sessionStorage.setItem("player4", input4.value());
    // }
    var player1Text = sessionStorage.getItem("player1");
    document.getElementById("playerText").innerHTML = player1Text + ", you're up!";
    window.location.href = '/start.html';
}