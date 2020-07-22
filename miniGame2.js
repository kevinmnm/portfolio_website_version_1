/*******GLOBAL VAR*********/
var playB = document.getElementById('playButton');
var rpsT1 = document.getElementById('rpsTable1');
var rpsT2 = document.getElementById('rpsTable2');
var rpsT3 = document.getElementById('rpsTable3');
var yScore = document.getElementById('yourScore');
var tLeft = document.getElementById('timeLeft');
var oScore = document.getElementById('opponentScore');
var playerS = document.getElementById('playerScreen');
var computerS = document.getElementById('computerScreen');
var continueB = document.querySelector('#continue');
var star = "<img src='star.png' alt='star' width='25px'/>";
var mySco = 0;
var opSco = 0;
yScore.innerHTML = '';
oScore.innerHTML = '';

/******Sounds********/
var getStar = $('#getStar');
var hoverSound = $('#hoverSound');
var oppStar = $('oppStar');
var rpsThemeSound = $('rpsThemeSound');

function getStar() {
    document.getElementById('getStar').load();
    document.getElementById('getStar').volume = 0.5;
    document.getElementById('getStar').play();
}

function oppStar() {
    document.getElementById('oppStar').load();
    document.getElementById('oppStar').volume = 0.5;
    document.getElementById('oppStar').play();
}

/********GLOBAL EMPLTY VAR********/
var timeClock;
var finalSelected;
var ranN123;
var playerValue;

/********Function 1******/
$(document).ready(function(){
	$('#playButton, #continue').on('click', function(){
    	$('#playButton').hide();
        $('#playOverlay').hide();
        $('#continue').hide();
        computerS.style.display = 'table-cell';
        playerS.style.display = 'table-cell';
        playerS.innerHTML = '';
        computerS.innerHTML = '';
        playerValue = 'none';
        document.querySelector('.rock').id = '';
        document.querySelector('.paper').id = '';
        document.querySelector('.scissor').id = '';
   
        $('.rock').on('click', function(){
    		document.querySelector('.rock').id = 'selectedd';
            document.querySelector('.paper').id = '';
            document.querySelector('.scissor').id = '';
            playerValue = 'rock';
        });
        $('.paper').on('click', function(){
    		document.querySelector('.rock').id = '';
            document.querySelector('.paper').id = 'selectedd';
            document.querySelector('.scissor').id = '';
            playerValue = 'paper';
        });
        $('.scissor').on('click', function(){
    		document.querySelector('.rock').id = '';
            document.querySelector('.paper').id = '';
            document.querySelector('.scissor').id = 'selectedd';
            playerValue = 'scissor';
        });
        
      	var sec5 = 6;
        timeClock = setInterval(function(){
            sec5 = sec5 - 1;
            tLeft.innerHTML = sec5;
            ranN123 = Math.floor(Math.random()*3);
            if (sec5 == (-1)) {
                if (playerValue === 'none') {
                	continueB.style.display = 'block';
                    playerS.innerHTML = 'Timed Out';
                    computerS.innerHTML = 'Score +1';
                    oScore.innerHTML = oScore.innerHTML + star;
                    tLeft.innerHTML = 'You Lost';
                    opSco = opSco + 1;
                    document.getElementById('oppStar').load();
                    document.getElementById('oppStar').volume = 0.5;
                    document.getElementById('oppStar').play();
                    if (opSco === 3) {
                        clearInterval(timeClock);
                        continueB.style.display = 'none';
                        setTimeout(function() {
                            $('#defeat').show();
                        }, 2000);
                    }
                    clearInterval(timeClock);
                }
                finalSelected = document.querySelector('#selectedd');
                playerS.innerHTML = finalSelected.innerHTML;
                
                if (ranN123 === 0){
                    ranN123 = 'rock';
                	computerS.innerHTML = "<img src='https://www.rock-paper-scissors-game.com/i/rock.png' width='100px' alt='rock'/>";
                } else if (ranN123 === 1){
                    ranN123 = 'paper';
                	computerS.innerHTML = "<img src='https://www.rock-paper-scissors-game.com/i/paper.png' width='100px' alt='paper'/>";
                } else if (ranN123 === 2) {
                    ranN123 = 'scissor';
                	computerS.innerHTML = "<img src='https://www.rock-paper-scissors-game.com/i/scissors.png' width='100px' alt='scissor'/>";
                } else {
                    alert('Unknown Error');
                }
                
                if (playerValue == ranN123){
                	tLeft.innerHTML = 'Draw';
                    continueB.style.display = 'block';
                    clearInterval(timeClock);
                } else if (playerValue == 'rock' && ranN123 == 'scissor') {
					tLeft.innerHTML = 'You Won!';
                    yScore.innerHTML = yScore.innerHTML + star;
                    continueB.style.display = 'block';
                    mySco = mySco + 1; 
                    document.getElementById('getStar').load();
                    document.getElementById('getStar').volume = 0.5;
                    document.getElementById('getStar').play();                  
                    if (mySco === 3) {
                        clearInterval(timeClock);
                        continueB.style.display = 'none';
                        setTimeout(function() {
                            $('#victory').show();
                        }, 2000);
                    }
                    clearInterval(timeClock);
                } else if (playerValue == 'rock' && ranN123 == 'paper') {
                	tLeft.innerHTML = 'You Lost';
                    oScore.innerHTML = oScore.innerHTML + star;
                    continueB.style.display = 'block';
                    opSco = opSco + 1;
                    document.getElementById('oppStar').load();
                    document.getElementById('oppStar').volume = 0.5;
                    document.getElementById('oppStar').play();
                    if (opSco === 3) {
                        clearInterval(timeClock);
                        continueB.style.display = 'none';
                        setTimeout(function() {
                            $('#defeat').show();
                        }, 2000);
                    }
                    clearInterval(timeClock);
                } else if (playerValue == 'paper' && ranN123 == 'rock') {
                    tLeft.innerHTML = 'You Won!';
                    yScore.innerHTML = yScore.innerHTML + star;
                    continueB.style.display = 'block';
                    mySco = mySco + 1;
                    document.getElementById('getStar').load();
                    document.getElementById('getStar').volume = 0.5;
                    document.getElementById('getStar').play();
                    if (mySco === 3) {
                        clearInterval(timeClock);
                        continueB.style.display = 'none';
                        setTimeout(function() {
                            $('#victory').show();
                        }, 2000);
                    }
                    clearInterval(timeClock);
                } else if (playerValue == 'paper' && ranN123 == 'scissor') {
                    tLeft.innerHTML = 'You Lost';
                    oScore.innerHTML = oScore.innerHTML + star;
                    continueB.style.display = 'block';
                    opSco = opSco + 1;
                    document.getElementById('oppStar').load();
                    document.getElementById('oppStar').volume = 0.5;
                    document.getElementById('oppStar').play();
                    if (opSco === 3) {
                        clearInterval(timeClock);
                        continueB.style.display = 'none';
                        setTimeout(function() {
                            $('#defeat').show();
                        }, 2000);
                    }
                    clearInterval(timeClock);
                } else if (playerValue == 'scissor' && ranN123 == 'paper') {
                    tLeft.innerHTML = 'You Won!';
                    yScore.innerHTML = yScore.innerHTML + star;
                    continueB.style.display = 'block';
                    mySco = mySco + 1;
                    document.getElementById('getStar').load();
                    document.getElementById('getStar').volume = 0.5;
                    document.getElementById('getStar').play();
                    if (mySco === 3) {
                        clearInterval(timeClock);
                        continueB.style.display = 'none';
                        setTimeout(function() {
                            $('#victory').show();
                        }, 2000);
                    }
                    clearInterval(timeClock);
                } else if (playerValue == 'scissor' && ranN123 == 'rock') {
                    tLeft.innerHTML = 'You Lost';
                    oScore.innerHTML = oScore.innerHTML + star;
                    continueB.style.display = 'block';
                    opSco = opSco + 1;
                    document.getElementById('oppStar').load();
                    document.getElementById('oppStar').volume = 0.5;
                    document.getElementById('oppStar').play();
                    if (opSco === 3) {
                        clearInterval(timeClock);
                        continueB.style.display = 'none';
                        setTimeout(function() {
                            $('#defeat').show();
                        }, 2000);
                    }
                    clearInterval(timeClock);
                } else {
                    alert('Unknown Error');
                    clearInterval(timeClock);
                }
            }
        }, 1000); 
    });
});

$(document).ready(function(){
    $('#instruction').on('click', function(){
        $('#instructionTxt').slideToggle();
    });
});

$(document).ready(function() {
    $('#playButton').on('click', function() {
        document.getElementById('rpsThemeSound').style.display = 'block';
        document.getElementById('rpsThemeSound').play();
        document.getElementById('rpsThemeSound').volume = 0.5;
    });
});

document.getElementById('instruction').addEventListener('click', function() {
    document.getElementById('hoverSound').load();
    document.getElementById('hoverSound').volume = 0.2;
    document.getElementById('hoverSound').play();
});

document.getElementById('rpsTable3').addEventListener('click', function() {
    document.getElementById('hoverSound').load();
    document.getElementById('hoverSound').volume = 0.2;
    document.getElementById('hoverSound').play();
});