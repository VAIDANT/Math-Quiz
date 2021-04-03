answer_turn = "player2";
question_turn = "player1";
player1_score= 0;
player2_score= 0;

var player1_name = localStorage.getItem("player1_name_input");
var player2_name = localStorage.getItem("player2_name_input");

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send() {
    get_No1 = document.getElementById("No1").value;
    get_No2 = document.getElementById("No2").value;
    quetion = (get_No1 + "x" + get_No2);
    actual_answer = parseInt(get_No1) * parseInt(get_No2); 

    question_word = "<h4 id='number_display'> Q. "+ quetion +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
document.getElementById("No1").value = "";
document.getElementById("No2").value = "";
}

function check() {
    answer = document.getElementById("input_check_box").value;
    if (answer == actual_answer) {
        if (answer_turn == "player1") {
            player1_score = player1_score +1;
            console.log("1 "+player1_score)
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else {
            player2_score = player2_score +1;
            console.log("2 "+player2_score)
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML="Question Turn -"+ player2_name;
    }
    else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML="Question Turn -"+ player1_name;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML="Answer Turn -"+ player2_name;
    }
    else {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML="Answer Turn -"+ player1_name;
    }

    document.getElementById("output").innerHTML = "";
}