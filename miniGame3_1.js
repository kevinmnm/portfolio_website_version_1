//Global var
var fish = document.getElementById('fish');
var cloneF;
var fishLeft;
var fishTop;
var cPos;
var fPosLeft;
var fPosTop;
var diffTop;
var diffLeft;
var interval;
var score;
var money = 0;
var speed = 1000;

$(document).ready(function(){
	score = 0;
    
    $('#fishBowl').on('click', function(event) {
    	if (event.target !== document.querySelector('#fish')) {
            document.getElementById('bubblePop2').load();
            document.getElementById('bubblePop2').play();
            document.getElementById('bubblePop2').volume = 0.2;
        	$('#fish').stop();
            cloneF = $('.food').eq(0).clone();
            cloneF.css({
                "position":"absolute",
                "left":event.offsetX + "px",
                "top":event.offsetY + "px",
                "border":"1px solid black",
                "display":"block",
                "margin":"0"
            });
            cloneF.appendTo(event.target);
            cloneF.animate({
                "top":"100%"
            }, 3000);
            
            cPos = cloneF.position();
            $('#fish').animate({
            	"top":cPos.top - (($('#fish').height() / 2) - 18) + 'px',
                "left":cPos.left - (($('#fish').width() / 2) - 12) + 'px'
            }, speed);
            
            interval = setInterval(function() {
                fPosLeft = cloneF.offset().left; //Food left value
                fPosTop = cloneF.offset().top; //Food top value
                fishLeft = $('#fish').offset().left; //Fish left value
                fishTop = $('#fish').offset().top; //Fish top value
                
				diffTop = Math.abs(fPosTop - fishTop);
                diffLeft = Math.abs(fPosLeft - fishLeft);
                finalR = Math.abs(diffTop - diffLeft);
               
                if (diffTop < 65 && finalR < 95) {
                	score = score + 10;
                    money = money + 50;

                    $('#score').html('Score: ' + score);
                    $('#money').html('Money: ' + money);
                    cloneF.stop();
                    cloneF.hide();
                    clearInterval(interval);
                    moneyValue();
                    scoreValue();
                }
            }, 100);
         };
     });
});

function moneyValue() {
    if (money >= 200 && fish.style.backgroundColor !== 'purple') {
      document.getElementById('degrade').id = 'upgrade';
      document.getElementById('upgrade').addEventListener('click', function(e) {
      	e.target.style.display = 'none';
        fish.style.backgroundColor = 'purple';
        fish.style.color = 'white';
        speed = 500;
      });
    }
}

function scoreValue() {
    if (score >= 350) {
        document.getElementById('endScreen').style.display = 'block';
    }
}

$(document).ready(function() {
	$('#startGame').on('click', function() {
        $('#startScreen').hide();
        document.getElementById('fishBGM').style.display = 'block';
        document.getElementById('fishBGM').load();
        document.getElementById('fishBGM').play();
        document.getElementById('fishBGM').volume = 0.4;
    });
    
    $('#instruction').on('click', function() {
    	$('#instructionText').slideToggle();
    });
    
    $('#playAgain').on('click', function() {
    	location.reload();
    });
});