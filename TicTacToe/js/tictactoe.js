//This function will execute once the DOM is loaded
//also, disable the stop game button since it is not needed yet
window.onload = function() {watch()};

function watch() {
    var btn = document.getElementById("btnStop");
    btnDisabled(btn); //disable the stop button
}

//This is the roll for turn function, rolls twice, once for each player
//determines who goes first, who ever rolls highest
function rollForTurn() {
    var xArray = []; //creates an empty array as a variable
    var ranNum = '';
    var minimum = 1;
    var maximum = 11;
    var first = "";
    var txt1 = "";
    for (var i = 0; i < 2; i++) {
        //random number between one and ten
        ranNum = Math.floor(Math.random() * (maximum - minimum) + minimum);
        xArray.push(ranNum);

        diceRoll(); //plays dice roll sound when game is started
        //build the string to show which player rolled which dice
        for (i=0; i<xArray.length; i++) {
            var result = i + 1;
            var pOne = xArray[0];
            var pTwo = xArray[1];
            if (pOne == pTwo) {
                pOne = 1;
                pTwo = 2;
            }
            txt1= "Player one rolled a [" +pOne+"] <br>";
            writeMsg(txt1);
            txt1 = txt1 + "Player two rolled [" +pTwo+"] <br><br>";
            setTimeOut(function() {writeMsg(txt1);}, 1000); //this sets a time delay for dramatic effect
            }
        //determine who won, concatenate a string saying who won
        if (pOne > pTwo) {
            first = "Player 1";
            setTimeout(function() {txt1 = txt1 + "Player 1 wins, please choose a square";}, 2000);
            setTimeout(function() {writeMsg(txt1);}, 2000);
            }
        else if (pOne < pTwo) {
            first = "Player 2";
            setTimeout(function() {txt1 = txt1 + "Player 2 wins, please choose a square";}, 2000);
            setTimeout(function() {writeMsg(txt1);}, 2000);}

        }
        //pass which player wins roll
        return first;
    }

//----------------------------------------------------
//These algorithms will check all possible win conditions
//------------------------------------------------------

//wincon squares 012
function checkWinCon1(info, squareArray) {
    var winDetected = "on";
    var winCon = [0, 1, 2];
    //iterate through the growing array during game time, searching for index 0, 1, 2 
    //once they do appear in array, record their avatars and check for win cons
    for (var i in info) {
        if (info[i].charAt(0) == "0") {
            var match0Avatar = info[i].charAt(1); //only interested in recording the avatar
        }
        if (info[i].charAt(0) == "1") {
            var match1Avatar = info[i].charAt(1);
    }
        if (info[i].charAt(0) == "2") {
            var match2Avatar = info[i].charAt(1);
        }
    }
    //this will only trigger if a match is found
    if (match0Avatar != undefined && match1Avatar != undefined && match2Avatar != undefined) {
        if (match0Avatar == match1Avatar && match0Avatar == match2Avatar) {
            winDetected = "win";
            winner(winDetected, winCon1)
            return;
        }
    }
    winner(winDetected, winCon1);
}

//wincon squares 345
function checkWinCon1(info, squareArray) {
    var winDetected = "on";
    var winCon = [3, 4, 5];
    //iterate through the growing array during game time, searching for index 0, 1, 2 
    //once they do appear in array, record their avatars and check for win cons
    for (var i in info) {
        if (info[i].charAt(0) == "3") {
            var match0Avatar = info[i].charAt(1); //only interested in recording the avatar
        }
        if (info[i].charAt(0) == "4") {
            var match1Avatar = info[i].charAt(1);
    }
        if (info[i].charAt(0) == "5") {
            var match2Avatar = info[i].charAt(1);
        }
    }
    //this will only trigger if a match is found
    if (match3Avatar != undefined && match4Avatar != undefined && match5Avatar != undefined) {
        if (match3Avatar == match4Avatar && match3Avatar == match5Avatar) {
            winDetected = "win";
            winner(winDetected, winCon2)
            return;
        }
    }
    winner(winDetected, winCon2);
}

//wincon squares 678
function checkWinCon1(info, squareArray) {
    var winDetected = "on";
    var winCon = [6, 7, 8];
    //iterate through the growing array during game time, searching for index 0, 1, 2 
    //once they do appear in array, record their avatars and check for win cons
    for (var i in info) {
        if (info[i].charAt(0) == "6") {
            var match0Avatar = info[i].charAt(1); //only interested in recording the avatar
        }
        if (info[i].charAt(0) == "7") {
            var match1Avatar = info[i].charAt(1);
    }
        if (info[i].charAt(0) == "8") {
            var match2Avatar = info[i].charAt(1);
        }
    }
    //this will only trigger if a match is found
    if (match6Avatar != undefined && match7Avatar != undefined && match8Avatar != undefined) {
        if (match6Avatar == match7Avatar && match6Avatar == match8Avatar) {
            winDetected = "win";
            winner(winDetected, winCon3)
            return;
        }
    }
    winner(winDetected, winCon3);
}

//wincon squares 048
function checkWinCon1(info, squareArray) {
    var winDetected = "on";
    var winCon = [0, 4, 8];
    //iterate through the growing array during game time, searching for index 0, 1, 2 
    //once they do appear in array, record their avatars and check for win cons
    for (var i in info) {
        if (info[i].charAt(0) == "0") {
            var match0Avatar = info[i].charAt(1); //only interested in recording the avatar
        }
        if (info[i].charAt(0) == "4") {
            var match1Avatar = info[i].charAt(1);
    }
        if (info[i].charAt(0) == "8") {
            var match2Avatar = info[i].charAt(1);
        }
    }
    //this will only trigger if a match is found
    if (match0Avatar != undefined && match4Avatar != undefined && match8Avatar != undefined) {
        if (match0Avatar == match4Avatar && match0Avatar == match8Avatar) {
            winDetected = "win";
            winner(winDetected, winCon4)
            return;
        }
    }
    winner(winDetected, winCon4);
}

//wincon squares 246
function checkWinCon1(info, squareArray) {
    var winDetected = "on";
    var winCon = [2, 4, 6];
    //iterate through the growing array during game time, searching for index 0, 1, 2 
    //once they do appear in array, record their avatars and check for win cons
    for (var i in info) {
        if (info[i].charAt(0) == "2") {
            var match0Avatar = info[i].charAt(1); //only interested in recording the avatar
        }
        if (info[i].charAt(0) == "4") {
            var match1Avatar = info[i].charAt(1);
    }
        if (info[i].charAt(0) == "6") {
            var match2Avatar = info[i].charAt(1);
        }
    }
    //this will only trigger if a match is found
    if (match2Avatar != undefined && match4Avatar != undefined && match6Avatar != undefined) {
        if (match2Avatar == match4Avatar && match2Avatar == match6Avatar) {
            winDetected = "win";
            winner(winDetected, winCon5)
            return;
        }
    }
    winner(winDetected, winCon5);
}

//wincon squares 036
function checkWinCon1(info, squareArray) {
    var winDetected = "on";
    var winCon = [0, 3, 6];
    //iterate through the growing array during game time, searching for index 0, 1, 2 
    //once they do appear in array, record their avatars and check for win cons
    for (var i in info) {
        if (info[i].charAt(0) == "0") {
            var match0Avatar = info[i].charAt(1); //only interested in recording the avatar
        }
        if (info[i].charAt(0) == "3") {
            var match1Avatar = info[i].charAt(1);
    }
        if (info[i].charAt(0) == "6") {
            var match2Avatar = info[i].charAt(1);
        }
    }
    //this will only trigger if a match is found
    if (match0Avatar != undefined && match3Avatar != undefined && match6Avatar != undefined) {
        if (match0Avatar == match3Avatar && match0Avatar == match6Avatar) {
            winDetected = "win";
            winner(winDetected, winCon6)
            return;
        }
    }
    winner(winDetected, winCon6);
}

//wincon squares 147
function checkWinCon1(info, squareArray) {
    var winDetected = "on";
    var winCon = [1, 4, 7];
    //iterate through the growing array during game time, searching for index 0, 1, 2 
    //once they do appear in array, record their avatars and check for win cons
    for (var i in info) {
        if (info[i].charAt(0) == "1") {
            var match0Avatar = info[i].charAt(1); //only interested in recording the avatar
        }
        if (info[i].charAt(0) == "4") {
            var match1Avatar = info[i].charAt(1);
    }
        if (info[i].charAt(0) == "7") {
            var match2Avatar = info[i].charAt(1);
        }
    }
    //this will only trigger if a match is found
    if (match1Avatar != undefined && match4Avatar != undefined && match7Avatar != undefined) {
        if (match1Avatar == match4Avatar && match1Avatar == match7Avatar) {
            winDetected = "win";
            winner(winDetected, winCon7)
            return;
        }
    }
    winner(winDetected, winCon7);
}

//wincon squares 258
function checkWinCon1(info, squareArray) {
    var winDetected = "on";
    var winCon = [2, 5, 8];
    //iterate through the growing array during game time, searching for index 0, 1, 2 
    //once they do appear in array, record their avatars and check for win cons
    for (var i in info) {
        if (info[i].charAt(0) == "2") {
            var match0Avatar = info[i].charAt(1); //only interested in recording the avatar
        }
        if (info[i].charAt(0) == "5") {
            var match1Avatar = info[i].charAt(1);
    }
        if (info[i].charAt(0) == "8") {
            var match2Avatar = info[i].charAt(1);
        }
    }
    //this will only trigger if a match is found
    if (match2Avatar != undefined && match5Avatar != undefined && match8Avatar != undefined) {
        if (match2Avatar == match5Avatar && match2Avatar == match8Avatar) {
            winDetected = "win";
            winner(winDetected, winCon8)
            return;
        }
    }
    winner(winDetected, winCon8);
}

//---------------------------------------------------
//Innitiate the game, roll for turn, determine the active player below

function startGame() {
    var xTurn = 0;
    activePlayer = rollForTurn();
    if (activePlayer == 0) {//reroll if a tie happens
        activePlayer = rollForTurn();}
    setTimeout(function() {hideGameMsg();}, 4000);
    
    //apply proper state of control buttons below
    var btn = document.getElementById("btnStart");
    btnDisabled(btn); //disables the start button when game is happening
    var btn = document.getElementById("btnStop");
    stopEnabled(btn); //enables the stop button since the game is going on
    
    //This assigns the active player to the console
    var showPlayer = document.getElementById("showPlayer");
    showPlayer.innerHTML = activePlayer;
    showPlayer.style.color = "green";
}

//this function styles the game buttons while they are disabled
function btnDisabled(btn) {
    btn.style.color = "#fff";
    btn.style.border = "2px solid rgb(153, 153, 103)";
    btn.style.backgroundColor = "rgb(214, 214, 194)";
    btn.disabled = true;
}

//this function styles the game buttons while they are disabled
function stopEnabled(btn) {
    btn.style.color = "#fff";
    btn.style.border = "2px solid rgb(204, 0, 0)";
    btn.style.backgroundColor = "rgb(255, 51, 51)";
    btn.disabled = false;
}
//this function styles the game buttons while they are disabled
function startEnabled(btn) {
    btn.style.color = "#fff";
    btn.style.border = "2px solid rgb(0, 153, 0)";
    btn.style.backgroundColor = "rgb(57, 230, 0)";
    btn.disabled = false;
}
//when user indicates, stop game and begin a new game
function stopGame() {
    hideGameMsg(); //clear text and hide message box
    var btn = document.getElementById("btnStart");
    startEnabled(btn); //enables the start button since game is stopped
    var btn = document.getElementById("btnStop");
    btnDisabled(btn); //disable the stop button since the game is now stopped
    var showPlayer = document.getElementById("showPlayer");
    showPlayer.innerHTML = "Game Stopped";
    showPlayer.style.color = "red";

    //this resets all squares to their starting state
    var arrayO = document.getElementsByClassName("O");
    var arrayX = document.getElementsByClassName("X");
    for (var i = 0; i<arrayO.length; i++) {
        arrayX[i].style.transform = "translateY(-100%)";
    }
    for (var i = 0; i<arrayO.length; i++) {
        arrayO[i].style.transform = "translateY(100%)";
    }
    //this clears the running log of all game moves
    document.getElementById("boardState").innerHTML = "";
}
//This will show the message console and any text/data it may have
function showGameMsg() {
    document.getElementById("gameMsgBox").style.display = "block";
}
//this function hides the message box when done
function hideGameMsg() {
    clearMsg();
    document.getElementById("gameMsgBox").style.display = "none"; //this will hide the div
}


//This function writes the message to the game message console
function writeMsg(txt) {
    showGameMsg();
    document.getElementById("gameMsg").innerHTML = txt;
}

//this will clear the text from the message console
function clearMsg() {
    document.getElementById("gameMsg").innerHTML = "";
}

//this function is for the player configuration panel and
//proposed avatar assignments and prevents them from being the same
function saveSettings() {
    var p1Index = document.getElementById("player1").selectedIndex;
    var p1Selected = document.getElementById("player1").options;
    var p2Index = document.getElementById("player2").selectedIndex;
    var p2Selected = document.getElementById("player2").options;
    if (p1Selected[p1Index].text == p2Selected[p2Index].text) {
        alert("Player 1 and Player two cannot be assigned as: " +p1Selected[p1Index].text)
    } else {
        document.getElementById("p1Display").innerHTML = p1Selected[p1Index].text;
        document.getElementById("p2Display").innerHTML = p2Selected[p2Index].text;
    }
}

//this function returns the defined avatar for each player
function getAvatars() {
    var p1Avatar = document.getElementById("p1Display").innerHTML;
    var p2Avatar = document.getElementById("p2Display").innerHTML;
    var avatarArray = [p1Avatar, p2Avatar];
    return avatarArray;
}

//this function will return the active players avatar
function determineAvatar() {
    //determine the correct avatar to paint for the correct player
    var avatarArray = getAvatars(); //returns an array of the correct avatars
    var active = document.getElementById("showPlayer").innerHTML; //get active player
    p1Avatar = avatarArray[0];
    p2Avatar = avatarArray[1];
    if (active == "Player 1") {
        var paintAvatar = p1Avatar;
    } else if (active == "Player 2") {
        var paintAvatar = p2Avatar;
    }
        return paintAvatar; //returns correct avatar per player
}

//this function changes active players after they place their avatar
function avatarPlaced() {
    var parseText = document.getElementById("gameMsg").innerHTML;
    var showPlayer = document.getElementById("showPlayer").innerHTML; //select the current element to memory
    //check to see if there is a winner...if so, do not continue the game
    if (parseText == "That's three in a row, Player 1 wins!" || parseText = "That's three in a row, Player 2 wins!")
    {showPlayer.innerHTML = "Game Stopped";
    showPlayer.style.color = "red";    
        }
    activePlayer = showPlayer.innerHTML;//get the current player from the element
    if (activePlayer == "Player 1") {//once avtive player selects box, switch players
        showPlayer.innerHTML = "Player 2";}
    else {showPlayer.innerHTML = "Player 1";}    
        check4Tie(); //call this function to determine if there is a tie game
}

//this function will get the array of the board
//and check the proposed move for validity
function check(info, square) {
    for (var i in info) {
        var tempInfo = info[i].charAt[0]; //comparing the index of the squares
        if (tempInfo == square) {return tempInfo;
        }
    } 
}

//this function will record the moves and save the variables, will also check
//to see if the suqare has already been taken care of
function recordMoves(square) {
    var proposedMove = square;
    var boardState = document.getElementById("boardState").innerHTML; //retreive board state array
    var info = boardState.split(" , "); //seperate the string by commas to create an array
    verdict = check(info, square);
    return verdict;
}
//this function will get the list of previous moves
//and then concatenate the current move to it
function recordMove(currentMove) {
    var target = document.getElementById("boardState");
    var previousMoves = target.innerHTML;
    target.innerHTML = previousMoves+currentMove;
}

function CheckForWinCon() {
    var squareArray = [];
    var target = document.getElementById("boardState");
    var info = target.innerHTML; //raw array with squares and avatars
    info = info.substring(1); //removes leading coma
    info = info.split(",");//seperate the string by commas and put into an array
    info.sort(); //sort the square array in order despite the gameplay sequence
    for (var i in info) {
        squareArray.push(info[i].charAt(0));
        }

    //call this following array of functions to check for any of the possible win conditions
    checkWinCon1(info, squareArray); 
    checkWinCon2(info, squareArray); 
    checkWinCon3(info, squareArray); 
    checkWinCon4(info, squareArray); 
    checkWinCon5(info, squareArray); 
    checkWinCon6(info, squareArray); 
    checkWinCon7(info, squareArray); 
    checkWinCon8(info, squareArray); 
    check4Tie();   
}
//This checks for a tie
function check4Tie() {
    var boardState = document.getElementById("boardState").innerHTML;
    boardState = boardState.substring(1);
    boardState = boardState.split(",");
    var check = document.getElementById("gameMsg").innerHTML;
    if (boardState.length >=9 && check != "That's three in a row, Player 1 wins!" && check != "That's three in a row, Player 2 wins!") {
        var txt1 = "Oh no! Nobody wins, it was a tie!";
        tieSound();
        writeMsg(txt1);
        setTimeout(function() {stopGame();}, 3000); 
    }
}

function winner(winDetected, winCon) {
    if (winDetected == "win") {
        var showme = winDetected;
        var activePlayer = document.getElementById("showPlayer").innerHTML;
        var txt2 = "That's three in a row, " +activePlayer+ " wins!";
        writeMsg(txt2);
        var btn = document.getElementById("btnStart");
        startEnabled(btn);
        var btn = document.getElementById("btnStop");
        btnDisabled(btn);
        document.getElementById("showPlayer").innerHTML = "Game Stopped";
        glowBoard(winCon);
    }
}

//this is how the board glows when a player wins
function glowBoard(pos) {
    var index0 = pos[0];
    var index1 = pos[1]; 
    var index2 = pos[2]; 
    var squares = document.getElementsByClassName("square");
    for (var i = 0; i < squares.length; i++) {
        if (i == index0) {
            var bg1 = squares[i];
            blink();
            winSound();
            setTimeout(function() {bg1.style.backgroundColor = "rgb(156, 40, 10)";}, 100);
            setTimeout(function() {bg1.style.backgroundColor = "rgb(156, 0, 10)";}, 200);
            setTimeout(function() {bg1.style.backgroundColor = "rgb(156, 40, 10)";}, 300);
            setTimeout(function() {bg1.style.backgroundColor = "rgb(156, 0, 10)";}, 400);
            setTimeout(function() {bg1.style.backgroundColor = "rgb(156, 40, 10)";}, 500);
            setTimeout(function() {bg1.style.backgroundColor = "rgb(156, 0, 10)";}, 600);
            setTimeout(function() {bg1.style.backgroundColor = "rgb(156, 40, 10)";}, 700);
            setTimeout(function() {bg1.style.backgroundColor = "rgb(156, 0, 10)";}, 800);
            setTimeout(function() {bg1.style.backgroundColor = "rgb(156, 40, 10)";}, 900);
            setTimeout(function() {bg1.style.backgroundColor = "rgb(156, 0, 10)";}, 1000);
            setTimeout(function() {bg1.style.backgroundColor = "#d7f3f7";}, 1100);
        } else if (i == index1) {
            var bg2 = squares[i];
            setTimeout(function() {bg2.style.backgroundColor = "rgb(156, 40, 10)";}, 100);
            setTimeout(function() {bg2.style.backgroundColor = "rgb(156, 0, 10)";}, 200);
            setTimeout(function() {bg2.style.backgroundColor = "rgb(156, 40, 10)";}, 300);
            setTimeout(function() {bg2.style.backgroundColor = "rgb(156, 0, 10)";}, 400);
            setTimeout(function() {bg2.style.backgroundColor = "rgb(156, 40, 10)";}, 500);
            setTimeout(function() {bg2.style.backgroundColor = "rgb(156, 0, 10)";}, 600);
            setTimeout(function() {bg2.style.backgroundColor = "rgb(156, 40, 10)";}, 700);
            setTimeout(function() {bg2.style.backgroundColor = "rgb(156, 0, 10)";}, 800);
            setTimeout(function() {bg2.style.backgroundColor = "rgb(156, 40, 10)";}, 900);
            setTimeout(function() {bg2.style.backgroundColor = "rgb(156, 0, 10)";}, 1000);
            setTimeout(function() {bg2.style.backgroundColor = "#d7f3f7";}, 1100);
        } else if (i == index2) {
            var bg3 = squares[i];
            setTimeout(function() {bg3.style.backgroundColor = "rgb(156, 40, 10)";}, 100);
            setTimeout(function() {bg3.style.backgroundColor = "rgb(156, 0, 10)";}, 200);
            setTimeout(function() {bg3.style.backgroundColor = "rgb(156, 40, 10)";}, 300);
            setTimeout(function() {bg3.style.backgroundColor = "rgb(156, 0, 10)";}, 400);
            setTimeout(function() {bg3.style.backgroundColor = "rgb(156, 40, 10)";}, 500);
            setTimeout(function() {bg3.style.backgroundColor = "rgb(156, 0, 10)";}, 600);
            setTimeout(function() {bg3.style.backgroundColor = "rgb(156, 40, 10)";}, 700);
            setTimeout(function() {bg3.style.backgroundColor = "rgb(156, 0, 10)";}, 800);
            setTimeout(function() {bg3.style.backgroundColor = "rgb(156, 40, 10)";}, 900);
            setTimeout(function() {bg3.style.backgroundColor = "rgb(156, 0, 10)";}, 1000);
            setTimeout(function() {bg3.style.backgroundColor = "#d7f3f7";}, 1100);
        }
    
    
    }
    setTimeout(function() {stopGame;}, 1200);    
}
//these will produce the sound functions based on conditions
function squareSound() {
    var sound = document.getElementById("placeAvatar");
    sound.play();
    setTimeout(function() {sound.pause();}, 400);
    setTimeout(function() {sound.currentTime = 0;}, 500);
}
function tieSound() {
    var sound = document.getElementById("tieGame");
    var check = document.getElementById("gameMsg").innerHTML;
    setTimeout(function() {sound.play();}, 500);
}

function winSound() {
    var sound = document.getElementById("winGame");
    setTimeout(function() {sound.play();}, 500);
    setTimeout(function() {sound.pause();}, 2700);
    setTimeout(function() {sound.currentTime = 0;}, 2800);

}


function diceRoll() {
    var sound = document.getElementById("diceRoll");
    sound.play();
}

//this is the background blink
function blink() {
    var body = document.getElementById("body");
    setTimeout(function() {body.style.backgroundColor = "#94f7ed";}, 100);
    setTimeout(function() {body.style.backgroundColor = "#94cef7";}, 200);
    setTimeout(function() {body.style.backgroundColor = "#94f7ed";}, 300);
    setTimeout(function() {body.style.backgroundColor = "#94cef7";}, 400);
    setTimeout(function() {body.style.backgroundColor = "#94f7ed";}, 500);
    setTimeout(function() {body.style.backgroundColor = "#94cef7";}, 600);
    setTimeout(function() {body.style.backgroundColor = "#94f7ed";}, 700);
    setTimeout(function() {body.style.backgroundColor = "#94cef7";}, 800);
    setTimeout(function() {body.style.backgroundColor = "#94f7ed";}, 900);
    setTimeout(function() {body.style.backgroundColor = "#94cef7";}, 1000);
    setTimeout(function() {body.style.backgroundColor = "#fff";}, 1100);
}

//this block of functions are for each click event of their corresponding square element
function square1Animate() {
    var activePlayer = document.getElementById("showPlayer").innerHTML;
    if (activePlayer != "Game Stopped") {
        var square = "0";
        var verdict = recordMoves(square);
        if (verdict == undefined) { //means if the square is empty, then can be used
            var paintAvatar = determineAvatar();
            var selected = document.getElementsByClassName("paintAvatar")[0];
            if (paintAvatar == "O") {
                animateO(selected);
            }else if (paintAvatar == "X") {
                animateX(selected);
            }
            var currentMove = ", "+square+paintAvatar;
            recordMove(currentMove);
            CheckForWinCon();
            avatarPlaced(square.paintAvatar);
            squareSound();
        }
    }
}

function square2Animate() {
    var activePlayer = document.getElementById("showPlayer").innerHTML;
    if (activePlayer != "Game Stopped") {
        var square = "1";
        var verdict = recordMoves(square);
        if (verdict == undefined) {
            var paintAvatar = determineAvatar();
            var selected = document.getElementsByClassName("paintAvatar")[0];
            if (paintAvatar == "O") {
                animateO(selected);
            }else if (paintAvatar == "X") {
                animateX(selected);
            }
            var currentMove = ", "+square+paintAvatar;
            recordMove(currentMove);
            CheckForWinCon();
            avatarPlaced(square.paintAvatar);
            squareSound();
        }
    }
}

function square3Animate() {
    var activePlayer = document.getElementById("showPlayer").innerHTML;
    if (activePlayer != "Game Stopped") {
        var square = "2";
        var verdict = recordMoves(square);
        if (verdict == undefined) {
            var paintAvatar = determineAvatar();
            var selected = document.getElementsByClassName("paintAvatar")[0];
            if (paintAvatar == "O") {
                animateO(selected);
            }else if (paintAvatar == "X") {
                animateX(selected);
            }
            var currentMove = ", "+square+paintAvatar;
            recordMove(currentMove);
            CheckForWinCon();
            avatarPlaced(square.paintAvatar);
            squareSound();
        }
    }
}

function square4Animate() {
    var activePlayer = document.getElementById("showPlayer").innerHTML;
    if (activePlayer != "Game Stopped") {
        var square = "3";
        var verdict = recordMoves(square);
        if (verdict == undefined) {
            var paintAvatar = determineAvatar();
            var selected = document.getElementsByClassName("paintAvatar")[0];
            if (paintAvatar == "O") {
                animateO(selected);
            }else if (paintAvatar == "X") {
                animateX(selected);
            }
            var currentMove = ", "+square+paintAvatar;
            recordMove(currentMove);
            CheckForWinCon();
            avatarPlaced(square.paintAvatar);
            squareSound();
        }
    }
}

function square5Animate() {
    var activePlayer = document.getElementById("showPlayer").innerHTML;
    if (activePlayer != "Game Stopped") {
        var square = "4";
        var verdict = recordMoves(square);
        if (verdict == undefined) {
            var paintAvatar = determineAvatar();
            var selected = document.getElementsByClassName("paintAvatar")[0];
            if (paintAvatar == "O") {
                animateO(selected);
            }else if (paintAvatar == "X") {
                animateX(selected);
            }
            var currentMove = ", "+square+paintAvatar;
            recordMove(currentMove);
            CheckForWinCon();
            avatarPlaced(square.paintAvatar);
            squareSound();
        }
    }
}

function square6Animate() {
    var activePlayer = document.getElementById("showPlayer").innerHTML;
    if (activePlayer != "Game Stopped") {
        var square = "5";
        var verdict = recordMoves(square);
        if (verdict == undefined) {
            var paintAvatar = determineAvatar();
            var selected = document.getElementsByClassName("paintAvatar")[0];
            if (paintAvatar == "O") {
                animateO(selected);
            }else if (paintAvatar == "X") {
                animateX(selected);
            }
            var currentMove = ", "+square+paintAvatar;
            recordMove(currentMove);
            CheckForWinCon();
            avatarPlaced(square.paintAvatar);
            squareSound();
        }
    }
}

function square7Animate() {
    var activePlayer = document.getElementById("showPlayer").innerHTML;
    if (activePlayer != "Game Stopped") {
        var square = "6";
        var verdict = recordMoves(square);
        if (verdict == undefined) {
            var paintAvatar = determineAvatar();
            var selected = document.getElementsByClassName("paintAvatar")[0];
            if (paintAvatar == "O") {
                animateO(selected);
            }else if (paintAvatar == "X") {
                animateX(selected);
            }
            var currentMove = ", "+square+paintAvatar;
            recordMove(currentMove);
            CheckForWinCon();
            avatarPlaced(square.paintAvatar);
            squareSound();
        }
    }
}

function square8Animate() {
    var activePlayer = document.getElementById("showPlayer").innerHTML;
    if (activePlayer != "Game Stopped") {
        var square = "7";
        var verdict = recordMoves(square);
        if (verdict == undefined) {
            var paintAvatar = determineAvatar();
            var selected = document.getElementsByClassName("paintAvatar")[0];
            if (paintAvatar == "O") {
                animateO(selected);
            }else if (paintAvatar == "X") {
                animateX(selected);
            }
            var currentMove = ", "+square+paintAvatar;
            recordMove(currentMove);
            CheckForWinCon();
            avatarPlaced(square.paintAvatar);
            squareSound();
        }
    }
}

function square9Animate() {
    var activePlayer = document.getElementById("showPlayer").innerHTML;
    if (activePlayer != "Game Stopped") {
        var square = "8";
        var verdict = recordMoves(square);
        if (verdict == undefined) {
            var paintAvatar = determineAvatar();
            var selected = document.getElementsByClassName("paintAvatar")[0];
            if (paintAvatar == "O") {
                animateO(selected);
            }else if (paintAvatar == "X") {
                animateX(selected);
            }
            var currentMove = ", "+square+paintAvatar;
            recordMove(currentMove);
            CheckForWinCon();
            avatarPlaced(square.paintAvatar);
            squareSound();
        }
    }
}

//this will perform the animation for the O avatar
function animateO(selected) {
    selected.style.transform = (selected.style.transform == "translateY(-100%)" || null) ? "translateY(0%)" : "translateY(-100%)";
}

//this will perform the animation for the X avatar
function animateX(selected) {
    selected.style.transform = (selected.style.transform == "translateY(100%)" || null) ? "translateY(0)" : "translateY(100%)";
}