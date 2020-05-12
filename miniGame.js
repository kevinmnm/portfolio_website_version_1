document.getElementById('playButton').addEventListener('click', function() {
	document.getElementById('howButton').style.display = 'none';
    document.getElementById('instruction').style.display = 'none';
	document.getElementById('playButtonWrap').style.display = 'none';
	document.getElementById('monsterHP').innerHTML = '';
    document.getElementById('renderDMG').innerHTML = '';
    document.getElementById('playerHP').innerHTML = '';
    document.getElementById('monster').innerHTML = '';
    document.getElementById('skill1').innerHTML = 'HEAL';
    document.getElementById('skill2').innerHTML = 'POWER';
    document.getElementById('skill3').innerHTML = 'PAUSE';
});

$(document).ready(function(){
	$('#howButton').on('click', function(){
    	$('#instruction').slideToggle();
    });
});

var exeInterval;

$(document).ready(function(){ //When document is ready.
const GWB = $('#grandWrapperBlocker'); //Damage red screen.
	$('#playButton').on('click', function(){ //When play button is clicked,
    	$('#playButton').hide(); //Hide play button.
		exeInterval = setInterval(function(){ //Repeat function per random time.
        	$(GWB).css({'display':'block'}); //Show damage red screen.
			$(GWB).fadeOut(); //Hide damage red screen.
            const playerDMG = Math.floor(Math.random()*110); //Create random player damage.
            $('#playerDMG').html(playerDMG).css( //Configure style for damage output.
            	{
                	'font-size':'30px',
                    'color':'purple',
                    'font-weight':'bold',
                    'display':'none'
            	}
            );
            var cloneDDmg = $('#playerDMG').clone(); //Clone damage output.
            cloneDDmg.id = Math.floor(Math.random()*100000000000); //Create random id.
            $(cloneDDmg).show().appendTo($('#playerDMGcloneDiv')); //Add clone to show.
            $(cloneDDmg).animate({'top':'320px'}).fadeOut(); //Clone style configuration.
            var playerHPwidth = $('#playerHP').width(); //Player HP bar width value.
			playerHPwidth = playerHPwidth - playerDMG; //Reduce player HP per damage.
            $('#playerHP').width(playerHPwidth); //Render reduced HP bar.
            if (playerHPwidth <= 0) {
            	clearInterval(exeInterval);
                const endL = document.querySelector('#finishMsg');
                endL.style.display = 'block';
                endL.innerHTML = 'YOU <br> LOST <br>';
                document.getElementById('playAgain').style.display = 'block';
			}
    	}, 2000);
	});
});

var sN = 0; //For skill2.

$(document).ready(function(){
	$('#monster').on('click', function(){
    	var monster = $('#monster');
        var monsterHP = $('#monsterHP');
        var playerHP = $('#playerHP');
        var renderDMG = $('#renderDMG');
        var clonedDMGdiv = $('#clonedDMGdiv');
        var clonedDMG;
        var damageN;
        var randomN;
        
        randomN = Math.floor((Math.random()*11)+sN); //Creates random number.
        uniqueID = 'id' + Math.floor(Math.random()*110000000000); //creates unique ID.
        renderDMG.id = uniqueID; //Assign unique ID to current damage output.
        $(renderDMG).css( //Style damage output.
        	{
            	'font-size':'35px',
                'font-weight':'bold',
                'color':'#cc7000',
                'display':'none'
            }
        );
        renderDMG.html(randomN); //Write random damage to innerHTML.
        clonedDMG = $(renderDMG).clone(); //Clone damage output.
        $(clonedDMG).appendTo(clonedDMGdiv).css( //Style cloned damage output.
        	{
            	'display':'block'
            }
        );
        $(clonedDMG).animate({'top':'20px'}).fadeOut(); //Fade out rendered damage.
        
        var monsterHPwidth = $(monsterHP).width(); //Store width value into var.
        monsterHPwidth = monsterHPwidth - randomN; //Current width value - damage output.
        $(monsterHP).width(monsterHPwidth); //Re-configure monster's HP width.
        if(monsterHPwidth <= 0) { //Winning message function configuration.
           const endW = document.querySelector('#finishMsg');
           endW.style.display = 'block';
           endW.innerHTML = 'YOU <br> WON! <br>';
           document.getElementById('playAgain').style.display = 'block';
           clearInterval(exeInterval);
        }
    });
});

document.getElementById('playAgain').addEventListener('click',() => {
	location.reload();
});

$(document).ready(function(){

	$('#skill1').on('click', function(){ //Player full HP skill.
    	$('#playerHP').width(596);
        $('#skill1').css({'z-index':'-1'});
    });
    
    $('#skill2').on('click', function(){ //Player damage +10 skill.
    	sN = 10;
        $('#skill2').css({'z-index':'-1'});
    });
    
	$('#skill3').on('click', function(){
        $('#skill3').css({'z-index':'-1'});
    	alert('Game Paused \n\nPress Ok to resume');
    });
});

document.getElementById('playButton').addEventListener('click', function(){
    document.getElementById('bgm').play();
    document.getElementById('bgm').volume = 0.5;
    document.getElementById('bgm').style.display = 'block';
});

document.getElementById('howButton').addEventListener('click', function(){
    document.getElementById('bgm').play();
    document.getElementById('bgm').volume = 0.5;
    document.getElementById('bgm').style.display = 'block';
});

document.getElementById('playButton').addEventListener('click', function(){
    document.getElementById('enterSound').play();
    document.getElementById('enterSound').volume = 0.5;
});

document.getElementById('howButton').addEventListener('click', function(){
    document.getElementById('enterSound').play();
    document.getElementById('enterSound').volume = 0.5;
});

document.getElementById('skill1').addEventListener('click', function(){
    document.getElementById('skillSound').play();
    document.getElementById('skillSound').volume = 0.5;
});

document.getElementById('skill2').addEventListener('click', function(){
    document.getElementById('skillSound1').play();
    document.getElementById('skillSound1').volume = 0.5;
});

document.getElementById('skill3').addEventListener('click', function(){
    document.getElementById('skillSound2').play();
    document.getElementById('skillSound2').volume = 0.5;
});

document.getElementById('monster').addEventListener('mousedown', function() {
    document.getElementById('monster').style.borderColor = 'red';
});

document.getElementById('monster').addEventListener('click', function() {
    document.getElementById('hitSound').load();
    document.getElementById('hitSound').volume = 0.2;
    document.getElementById('hitSound').play();
});

document.getElementById('monster').addEventListener('mouseup', function() {
    document.getElementById('monster').style.borderColor = 'darkred';
});

document.getElementById('playAgain').addEventListener('mouseenter', function() {
    document.getElementById('bubSound').load()
    document.getElementById('bubSound').volume = 0.5;
    document.getElementById('bubSound').play();
});