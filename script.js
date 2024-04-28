var tipp = 0;
var nyeremenyHelye = Math.floor(Math.random()*3)+1;
var ures = 0;
//document.getElementById("nyeremeny-helye").innerHTML = nyeremenyHelye;

function firstClick() {
    if(tipp == 0){
        tipp = 1;
        document.getElementById("first-door").style.boxShadow = "0 0 20px 0 cyan";
        //document.getElementById("tippem").innerHTML = tipp;
        revealEmpty();
        printChangeQuestion();
    }
}

function secondClick() {
    if(tipp == 0) {
        tipp = 2;
        document.getElementById("second-door").style.boxShadow = "0 0 20px 0 cyan";

        //document.getElementById("tippem").innerHTML = tipp;
        revealEmpty();
        printChangeQuestion();
    }
}
 function thirdClick() {
    if(tipp == 0) {
        tipp = 3;
        document.getElementById("third-door").style.boxShadow = "0 0 20px 0 cyan";
        //document.getElementById("tippem").innerHTML = tipp;
        revealEmpty();
        printChangeQuestion();
    }
}

function revealEmpty() {
        for(let i=1;i<4;i++) {
            if(i != nyeremenyHelye && i != tipp) {
                switch (i) {
                    case 1:
                        document.getElementById("first-door").style.backgroundColor = "transparent";
                        document.getElementById("first-door").innerHTML = "";
                        ures = 1;
                        break;
                    case 2:
                        document.getElementById("second-door").style.backgroundColor = "transparent";
                        document.getElementById("second-door").innerHTML = "";
                        ures = 2;
                        break;
                    case 3:
                        document.getElementById("third-door").style.backgroundColor = "transparent";
                        document.getElementById("third-door").innerHTML = "";
                        ures = 3;
                        break;
                    default:
                        alert("Hiba történt!");
                }
                break;
            }
        }
}

function printChangeQuestion() {
    document.getElementById("question-change").innerHTML = "<p>A(z) " + ures + ". ajtó mögött nincs semmi.</p><p>Megváltoztatja a tippjét?</p><button id='change' onclick='changeOption()'>Igen</button><button id='do-not-change' onclick='doNotChangeOption()'>Nem</button>";
}

function changeOption() {
    document.getElementById("question-change").innerHTML = "";
    switch (tipp) {
        case 1:
            document.getElementById("first-door").style.boxShadow ="0 0 0 0 transparent";
            break;
        case 2:
            document.getElementById("second-door").style.boxShadow ="0 0 0 0 transparent";
            break;
        case 3:
            document.getElementById("third-door").style.boxShadow ="0 0 0 0 transparent";
            break;
        default: console.log("Hiba.");
    }

    if(ures != 1 && tipp != 1) {
        tipp = 1;
    } else if(ures != 2 && tipp != 2) {
        tipp = 2;
    } else {
        tipp = 3;
    }
    verdict();
}

function doNotChangeOption () {
    document.getElementById("question-change").innerHTML = "";
    verdict();
}

function verdict() {
    if(tipp == nyeremenyHelye) {
        document.getElementById("result").innerHTML = "<p id='positive-result'>Gratulálok! Eltalálta a nyeremény helyét!</p>";
        document.getElementById("result").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("result").innerHTML = "<p id='negative-result'>Sajnos nem sikerült eltalálnia a nyeremény helyét!</p>";
        document.getElementById("result").style.backgroundColor = "lightcoral";
    }

    switch (nyeremenyHelye) {
        case 1:
            document.getElementById("first-door").style.backgroundColor = "lightgreen";
            document.getElementById("first-door").style.boxShadow = "0 0 40px 10px lightgreen, 0 0 20px 5px green";
            break;
        case 2:
            document.getElementById("second-door").style.backgroundColor = "lightgreen";
            document.getElementById("second-door").style.boxShadow = "0 0 40px 10px lightgreen, 0 0 20px 5px green";
            break;
        case 3:
            document.getElementById("third-door").style.backgroundColor = "lightgreen";
            document.getElementById("third-door").style.boxShadow = "0 0 40px 10px lightgreen, 0 0 20px 5px green";
            break;
        default:
    }

    document.getElementById("reset-simulation").innerHTML = "<button id='reset-simulation-button' type='reset' onclick='history.go(0);'>Új szimuláció</button>";
}