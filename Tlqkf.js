let playerTurn;
let allowClick;

/******Local storage setup******/
function storage() {
    if (!localStorage.victoryCount) {
        localStorage.victoryCount = 0;
        document.querySelector('#winV').innerHTML = localStorage.victoryCount;
    } else {
        document.querySelector('#winV').innerHTML = localStorage.victoryCount;
    }

    if (!localStorage.lostCount) {
        localStorage.lostCount = 0;
        document.querySelector('#lossV').innerHTML = localStorage.lostCount;
    } else {
        document.querySelector('#lossV').innerHTML = localStorage.lostCount;
    }
    
    if (!localStorage.drawCount) {
        localStorage.drawCount = 0;
        document.querySelector('#drawV').innerHTML = localStorage.drawCount;
    } else {
        document.querySelector('#drawV').innerHTML = localStorage.drawCount;
    }
}



/***********Very start of the game*************/
$(document).ready(function(){ //When game loads;
    $('#start').on('click', function(){ //When player press start;
        if (document.querySelector('.charHov')) {
            document.getElementById('orbis').style.display = 'block';
            document.getElementById('orbis').volume = 0.5;
            document.getElementById('orbis').play();
            $('#gameDivCover').hide();
            shuffle(); //Shuffle cards;
            countDown(); //Countdown **asynchronous** (start only);
        } else {
            alert('Choose a character!');
        }
        
        if (document.querySelector('.charHov').id == 'c1') {
            $('.imgD').eq('0').html(`<img class='imDimg' src='monsters/t1.png'/>`);
        } else if (document.querySelector('.charHov').id == 'c2') {
            $('.imgD').eq('0').html(`<img class='imDimg' src='monsters/t2.png'/>`);
        } else if (document.querySelector('.charHov').id == 'c3') {
            $('.imgD').eq('0').html(`<img class='imDimg' src='monsters/t3.png'/>`);
        } else {
            $('.imgD').eq('0').html(`<img class='imDimg' src='monsters/t4.png'/>`);
        }

        botCharN = Math.floor(Math.random()*4+1) //Random # from 1 to 4;
        if (botCharN === 1) {
            $('.imgD').eq('1').html(`<img class='imDimg' src='monsters/t1.png'/>`);
        } else if (botCharN === 2) {
            $('.imgD').eq('1').html(`<img class='imDimg' src='monsters/t2.png'/>`);
        } else if (botCharN === 3) {
            $('.imgD').eq('1').html(`<img class='imDimg' src='monsters/t3.png'/>`);
        } else {
            $('.imgD').eq('1').html(`<img class='imDimg' src='monsters/t4.png'/>`);
        }

    });

    $('.character img').on('click',(e)=>{
        let charZ = e.target.parentElement;
        $('.character').removeClass('charHov');
        $(charZ).addClass('charHov');
    });
});








/***********Count down function (start only)*********/
function countDown(){
    var x = 4;
    $('.cardZ').html('5');
    var m = setInterval(()=>{
        $('.cardZ').html(x);
        x--;
        if (x === -1){
            $('.cardZ').html('');
            clearInterval(m);
            $('.card').css({
                "background":"url('cardCover.png')",
                "background-size":"117px"
            });
            $('.mon').hide();
            whosTurn();
        }
    },1000);
}

function whosTurn(){ //Function that sets up player turn;
    playerTurn = true;
    allowClick = true;
    document.querySelector('#etc').style.border = '1px black solid'; //Bot highlight off;
    document.querySelector('#etc').style.opacity = '0.7';
    document.querySelector('#player').style.border = '2px red solid'; //Player highlight;
    document.querySelector('#player').style.opacity = '1';
}


/******Determine who's turn it is and execute function********/
var accumulate = []; //Saves matched card history (img id value);
var firstNsecond = []; //Saves clicked card value;
var compare = []; //Saves id of clicked card;
var clickC1 = 0; //Saves clicked attempts;
var playerScore = 0; //Player score;
var scoreMsg = `<div class='msgScore'>Player earned 10 points!</div>`;
var scoreMsg2 = `<div class='msgScore2'>Opponent earned 10 points!</div>`;

$('.card').on('click', function(e){ //When card is clicked (event listener);
    if (playerTurn === true && allowClick === true && (e.target.style.display !== 'block')){ //If it's player turn;
        document.querySelector('#quickWind').volume = '0.3'; //Play flip sound;
        document.querySelector('#quickWind').load();
        document.querySelector('#quickWind').play();
        clickC1++; //Add click count to player1.
        var oi = e.target; //Get clicked card value.
        firstNsecond.push(oi); //Push the event value.
        $(oi).css("background","none"); //Hide card back-side.
        $(oi).children().css("display","block"); //Show image.
        compare.push($(oi).children().attr('id')); //Add id of clicked card img id;
        if (clickC1 === 2) {
            allowClick = false; //Disable player click;
            if (compare[0] === compare[1]) { //If 2 matching card found.
                document.querySelector('#buffUp').volume = 0.2; //Play matched sound;
                document.querySelector('#buffUp').load();
                document.querySelector('#buffUp').play();
                accumulate.push(compare[0]); //Saves matched id to accumulcate array;
                accumulate.push(compare[1]); //Saves matched id to accumulcate array;
                firstNsecond[0].classList.remove('card'); //Remove class for less math;
                firstNsecond[1].classList.remove('card'); //Remove class for less math;
                allowClick = true; //Enable player click;
                playerScore = playerScore + 10; //Player score + 10;
                $('.current').eq('0').html(playerScore); //Update player score;
                document.querySelector('#chatHistory').innerHTML += scoreMsg; //Score msg;
                document.querySelector('#chatHistory').scrollTo(0, document.querySelector('#chatHistory').scrollHeight); //Scroll chat history to very bottom;
                if (playerScore + etcScore === 120){
                     return endGame()
                }
                clickC1 = 0; //Reset click count for player1.
                compare = []; //Empty out the comparison array.
                firstNsecond = []; //Empty out array.
            } else if (compare[0] !== compare[1]) { //If 2 matching not found.
                setTimeout(()=>{ // Wait 1.5s.
                    $(firstNsecond[0]).css({ //Hide img.
                        "background":"url('cardCover.png')",
                        "background-size":"117px"
                    }).children().css("display","none");; //Hide img of first clicked card.
                    $(firstNsecond[1]).css({  //Hide img.
                        "background":"url('cardCover.png')",
                        "background-size":"117px"
                    }).children().css("display","none");
                    $(oi).children().css({"display":"none"}); //Hide img of second clicked card.
                    compare = []; //Empty out comparison array.
                    firstNsecond = []; //Empty out event target array.
                    document.querySelector('#etc').style.border = '2px red solid'; //Player2 screen highlight.
                    document.querySelector('#etc').style.opacity = '1';
                    document.querySelector('#player').style.border = '1px black solid'; //Player1 screen highlight off.
                    document.querySelector('#player').style.opacity = '0.7';
                    playerTurn = false; //Player turn ends;
                    clickC1 = 0; //Reset click count;
                    setTimeout(()=>{
                        etcTurn();
                    },500);
                },1500);
         
            } 
        }       
    }
});


/*********This function runs on bots turn************/
var etcScore = 0;
let raN2, raN3, cls, cls2, howMany, luck, wut;

function etcTurn(){
    if (playerTurn === false) {
        howMany = document.querySelectorAll('.card').length - 1; //Number of .card left minus 1 (index count);
        luck = Math.floor(Math.random()*10+1); //Random number 1 - 10;
        if (luck < 6){ //50% chance;
            console.log('50% triggered!!!!!!');
            //console.log('howMany: '+howMany);
            cls = document.getElementsByClassName('card')[0]; //Select first positioned card;
            let imgId = cls.childNodes[0].id; //Selected card img id;
            //console.log('Selected id: '+imgId);
            for (let i = 1; i < howMany; i++){
                wut = document.getElementsByClassName('card')[i];
                //console.log(wut.childNodes[0].id);
                if ((wut.childNodes[0].id === imgId) && (!accumulate.includes(imgId))){
                    cls2 = wut;
                    //console.log(`------${wut.childNodes[0].id} : ${imgId}------`);
                }
            }
            // console.warn('Loop Exit');
            // console.log('cls: '+cls.innerHTML);
            // console.log('cls2: '+cls2.innerHTML);
        } else {
            if (howMany <= 3 && howMany > 1 && luck >= 6) {
                raN2 = Math.floor(Math.random()*4);
                raN3 = Math.floor(Math.random()*4);
                cls = document.getElementsByClassName('card')[raN2]; //Randomly selected card.
                cls2 = document.getElementsByClassName('card')[raN3]; //Randomly selected card.
                console.log(cls+''+cls2);
            } else if (howMany === 1) {
                raN2 = 0;
                raN3 = 1;
                cls = document.getElementsByClassName('card')[0]; //Randomly selected card.
                cls2 = document.getElementsByClassName('card')[1]; //Randomly selected card.
            } else {
                raN2 = Math.floor(Math.random()*howMany); //Random number 0 to [# of cards left - 1];
                raN3 = Math.floor(Math.random()*howMany); //Random number 0 to [# of cards left - 1];
                cls = document.getElementsByClassName('card')[raN2]; //Randomly selected card.
                cls2 = document.getElementsByClassName('card')[raN3]; //Randomly selected card.
                // console.group();
                // console.log(raN2+' : '+raN3);
                // console.log('howMany: '+howMany);
                // console.groupEnd();
            }
        }
        var clsChild = cls.innerHTML; //Randomly selected card img.
        var cls2Child = cls2.innerHTML; //Randomly selected card img.
        if (((cls.style.display === '') && (raN2 !== raN3) && (cls.childNodes[0].style.display === 'none') && (cls2.childNodes[0].style.display === 'none') && (!accumulate.includes(cls.childNodes[0].id)) && (!accumulate.includes(cls2.childNodes[0].id))) || (howMany === 1)) { //If card location is '' (showing but not block);
            // console.log('Flipping animation triggered');
            setTimeout(()=>{ //Show img + time delay.
                $(cls).css({"background":"none"}).children().css({"display":"block"});
                document.querySelector('#quickWind').volume = '0.3'; //Play flip sound;
                document.querySelector('#quickWind').load();
                document.querySelector('#quickWind').play();
                setTimeout(()=>{ //Show img + time delay.
                    $(cls2).css({"background":"none"}).children().css({"display":"block"});
                    document.querySelector('#quickWind').volume = '0.3'; //Play flip sound;
                    document.querySelector('#quickWind').load();
                    document.querySelector('#quickWind').play();
                },1000);
                afterAnimation();
            },1000);

            function afterAnimation(){
                if (clsChild !== cls2Child) { //If two selected img don't match.
                    setTimeout(()=>{ //Hide img + time delay.
                        $(cls).css({
                            "background":"url('cardCover.png')",
                            "background-size":"117px"
                        }).children().css({"display":"none"});
                        $(cls2).css({ //Hide img + time delay.
                            "background":"url('cardCover.png')",
                            "background-size":"117px"
                        }).children().css({"display":"none"});
                        $('#player').css("border","2px solid red"); //Player1 screen highlight on.
                        $('#etc').css("border","1px solid black"); //Player2 screen highlight off.
                        whosTurn(); //Set as player turn;
                    }, 2500);
                } else if (clsChild === cls2Child) { //If two selected img match.
                    setTimeout(()=>{
                        document.querySelector('#buffUp').volume = 0.2; //Play matched sound;
                        document.querySelector('#buffUp').load();
                        document.querySelector('#buffUp').play();            
                        accumulate.push(clsChild.id); //Save matched card id;
                        accumulate.push(cls2Child.id); //Save matched card id;
                        etcScore = etcScore + 10; //Player2 score + 10.
                        document.querySelector('#chatHistory').innerHTML += scoreMsg2; //Score msg;
                        document.querySelector('#chatHistory').scrollTo(0, document.querySelector('#chatHistory').scrollHeight); //Scroll chat history to very bottom;
                        $('.current').eq('1').html(etcScore); //Update player2 score;
                        cls.classList.remove('card'); //Remove .class;
                        cls2.classList.remove('card'); //Remove .class;
                        if (etcScore + playerScore === 120){ //If all cards are flipped;
                            return endGame();
                        }
                        setTimeout(()=>{
                            return etcTurn();
                        },500);
                        //console.log('setTimeout for etcTurn() triggered');
                    },1500);
                }
            }
        } else { //If wasn't able to get 2 unrevealed cards.
            setTimeout(()=>{
                return etcTurn();
            },500); //Run this function again.
        }
    }
}

function endGame(){
    $('#endGame').show();
    let winV = document.querySelector('#winV');
    let lossV = document.querySelector('#lossV');
    let drawV = document.querySelector('#drawV');
    if (playerScore > etcScore){
        winV.innerHTML = parseInt(winV.innerHTML) + 1;
        localStorage.victoryCount = winV.innerHTML;
        $('#WL').html('VICTORY!');
        $('#plus').html('Win +1');
        document.querySelector('#win').volume = 0.3;
        document.querySelector('#win').load();
        document.querySelector('#win').play();
    } else if (playerScore < etcScore){
        lossV.innerHTML = parseInt(lossV.innerHTML) + 1;
        localStorage.lostCount = lossV.innerHTML;
        $('#WL').html('DEFEAT!');
        $('#plus').html('Loss +1');
    } else if (playerScore === etcScore){
        drawV.innerHTML = parseInt(drawV.innerHTML) + 1;
        localStorage.drawCount = drawV.innerHTML;
        $('#WL').html('DRAW!');
        $('#plus').html('Draw +1');
    } else {
        alert('Unknown error for endgame() function..');
    }
    storage();
}

/*******SHUFFLE FUNCTION (start only)**********/
var order = [];
var cardDivs = document.getElementsByClassName('card');
var imgDivs = document.getElementsByClassName('mon');

function shuffle(){
    for (var i=0; i<24; i++) {
        var raN = Math.floor(Math.random()*24+1);
        if (order.includes(raN)) {
            i--;
        } else {
            order.push(raN);
            imgDivs[i].value = 'c'+raN;
            for (var x=0; x<24; x++){
                if (imgDivs[x].value === 'c1'){
                    cardDivs[0].append(imgDivs[x]);
                } else if (imgDivs[x].value === 'c2'){
                    cardDivs[1].append(imgDivs[x]);
                } else if (imgDivs[x].value === 'c3'){
                    cardDivs[2].append(imgDivs[x]);
                } else if (imgDivs[x].value === 'c4'){
                    cardDivs[3].append(imgDivs[x]);
                } else if (imgDivs[x].value === 'c5'){
                    cardDivs[4].append(imgDivs[x]);
                } else if (imgDivs[x].value === 'c6'){
                    cardDivs[5].append(imgDivs[x]);
                } else if (imgDivs[x].value === 'c7'){
                    cardDivs[6].append(imgDivs[x]);
                } else if (imgDivs[x].value === 'c8'){
                    cardDivs[7].append(imgDivs[x]);
                } else if (imgDivs[x].value === 'c9'){
                    cardDivs[8].append(imgDivs[x]);
                } else if (imgDivs[x].value === 'c10'){
                    cardDivs[9].append(imgDivs[x]);
                } else if (imgDivs[x].value === 'c11'){
                    cardDivs[10].append(imgDivs[x]);
                } else if (imgDivs[x].value === 'c12'){
                    cardDivs[11].append(imgDivs[x]);
                } else if (imgDivs[x].value === 'c13'){
                    cardDivs[12].append(imgDivs[x]);
                } else if (imgDivs[x].value === 'c14'){
                    cardDivs[13].append(imgDivs[x]);
                } else if (imgDivs[x].value === 'c15'){
                    cardDivs[14].append(imgDivs[x]);
                } else if (imgDivs[x].value === 'c16'){
                    cardDivs[15].append(imgDivs[x]);
                } else if (imgDivs[x].value === 'c17'){
                    cardDivs[16].append(imgDivs[x]);
                } else if (imgDivs[x].value === 'c18'){
                    cardDivs[17].append(imgDivs[x]);
                } else if (imgDivs[x].value === 'c19'){
                    cardDivs[18].append(imgDivs[x]);
                } else if (imgDivs[x].value === 'c20'){
                    cardDivs[19].append(imgDivs[x]);
                } else if (imgDivs[x].value === 'c21'){
                    cardDivs[20].append(imgDivs[x]);
                } else if (imgDivs[x].value === 'c22'){
                    cardDivs[21].append(imgDivs[x]);
                } else if (imgDivs[x].value === 'c23'){
                    cardDivs[22].append(imgDivs[x]);
                } else if (imgDivs[x].value === 'c24'){
                    cardDivs[23].append(imgDivs[x]);
                }
            }
            $('.card').css("background","none");
            $('.mon').show();
            $('#startCover').hide();
        }
    }
}


/******CHATBOX FUNCTION*******/
$(document).ready(()=>{
const $msgClone = $('.msg').clone();
    $('#start').on('click',()=>{
        $(freshMsg).html('Let\'s have a fun game!').appendTo($('#chatHistory')).css({
            'text-align':'left'
        });
    });
let freshMsg;
    $('#enterB').on('click',()=>{
        document.querySelector('#chatHistory').innerHTML += `<div class='msg' style='text-align:right;'>${document.querySelector('#chatType').value}</div>`;
    });

    $('#chatType').on('keydown',(e)=>{
        var chatType = document.querySelector('#chatType');
        if (e.keyCode === 13 && chatType.value !== ''){
            //e.preventDefault();
            document.querySelector('#enterB').click();
            chatType.value = '';
            document.querySelector('#chatHistory').scrollTo(0, document.querySelector('#chatHistory').scrollHeight);
        }
    });
});


$('#howTo').on('click',()=>{
    $('#howToTxt').slideToggle();
    
});
let howTo = document.getElementById('howTo');
    howTo.style.left = window.innerWidth/2-150+'px';
    window.onresize = function(){
        howTo.style.left = window.innerWidth/2-150+'px';
    }