//Close function
$(document).ready(function(){
    $('#closeEx').on('click', function(){
        var conf = confirm('Did you check out guide.pdf file at the bottom of this page yet?');
        if (conf === true) {
            $('#explain1').hide();
            open('CNG.html');
        } else {
            alert('You might want to check it out!');
        }
    });
});

//Open guide.pdf
$(document).ready(function(){
    $('#guideOpen').on('click', function(){
        open('CNGimage/guide.pdf');
    });
});

//First div
$(document).ready(function(){
    $('.gridItems').first().on('mouseover', function(){
        $('.detailOverlay').first().show();
    });
    $('.gridItems').first().on('mouseout', function(){
        $('.detailOverlay').first().hide();
    });
    $('.gridItems').first().on('click', function(){
        alert('This is the first thing I ever made using HTML.');
        open('FBT.html');
    });
});

//Second div
$(document).ready(function(){
    $('.gridItems').eq(1).on('mouseover', function(){
        $('.detailOverlay').eq(1).show();
    });
    $('.gridItems').eq(1).on('click', function(){
        $('#explain1').show();
    });
    $('.gridItems').eq(1).on('mouseout', function(){
        $('.detailOverlay').eq(1).hide();
    });
});

//Third div
$(document).ready(function(){
    $('.gridItems').eq(2).on('mouseover', function(){
        $('.detailOverlay').eq(2).show();
    });
    $('.gridItems').eq(2).on('mouseout', function(){
        $('.detailOverlay').eq(2).hide();
    });
    $('.gridItems').eq(2).on('click', function(){
        alert('This is a very simple project that I used to create IT notes');
        open('GSD.html');
    });
});

//Fourth div
$(document).ready(function(){
    $('.gridItems').eq(3).on('mouseover', function(){
        $('.detailOverlay').eq(3).show();
    });
    $('.gridItems').eq(3).on('mouseout', function(){
        $('.detailOverlay').eq(3).hide();
    });
    $('.gridItems').eq(3).on('click', function(){
        alert('This is a clicker game.');
        open('miniGame.html');
    });
});

//Fifth div
$(document).ready(function(){
    $('.gridItems').eq(4).on('mouseover', function(){
        $('.detailOverlay').eq(4).show();
    });
    $('.gridItems').eq(4).on('mouseout', function(){
        $('.detailOverlay').eq(4).hide();
    });
    $('.gridItems').eq(4).on('click', function(){
        alert('This is a rock paper scissors game.');
        open('miniGame2.html');
    });
});

//Sixth div
$(document).ready(function(){
    $('.gridItems').eq(5).on('mouseover', function(){
        $('.detailOverlay').eq(5).show();
    });
    $('.gridItems').eq(5).on('mouseout', function(){
        $('.detailOverlay').eq(5).hide();
    });
    $('.gridItems').eq(5).on('click', function(){
        alert('This is a simple stop watch!');
        open('timeClock.html');
    });
});

//Seventh div
$(document).ready(function(){
    $('.gridItems').eq(6).on('mouseover', function(){
        $('.detailOverlay').eq(6).show();
    });
    $('.gridItems').eq(6).on('mouseout', function(){
        $('.detailOverlay').eq(6).hide();
    });
    $('.gridItems').eq(6).on('click', function(){
        alert('This is a fish tycoon game!');
        open('miniGame3.html');
    });
});

//Eighth div
$(document).ready(function(){
    $('.gridItems').eq(7).on('mouseover', function(){
        $('.detailOverlay').eq(7).show();
    });
    $('.gridItems').eq(7).on('mouseout', function(){
        $('.detailOverlay').eq(7).hide();
    });
    $('.gridItems').eq(7).on('click', function(){
        alert('This is a resoponsive E-Commerce website!');
        open('eCommerce.html');
    });
});

//ninth div
$(document).ready(function(){
    $('.gridItems').eq(8).on('mouseover', function(){
        $('.detailOverlay').eq(8).show();
    });
    $('.gridItems').eq(8).on('mouseout', function(){
        $('.detailOverlay').eq(8).hide();
    });
    $('.gridItems').eq(8).on('click', function(){
        alert('Card matching game!');
        open('cardMatch.html');
    });
});

//tenth div
$(document).ready(function(){
    $('.gridItems').eq(9).on('mouseover', function(){
        $('.detailOverlay').eq(9).show();
    });
    $('.gridItems').eq(9).on('mouseout', function(){
        $('.detailOverlay').eq(9).hide();
    });
    $('.gridItems').eq(9).on('click', function(){
        alert('Flashcards with Vue.js');
        open('vue/flashCard.html');
    });
});

//Customized CSS
$(document).ready(function(){
    $('.alter').eq(0).css({
        "color":"black",
        "text-shadow":"0px 0px 5px lightgreen, 0px 0px 5px lightgreen, 0px 0px 5px lightgreen"
    });
    $('.alter').eq(1).css({
        "color":"black",
        "text-shadow":"0px 0px 5px skyblue, 0px 0px 5px skyblue, 0px 0px 5px skyblue"    
    });
    $('.alter').eq(2).css({
        "color":"black",
        "text-shadow":"0px 0px 5px purple, 0px 0px 5px purple, 0px 0px 5px purple"
    });
    $('.alter').eq(3).css({
        "color":"black",
        "text-shadow":"0px 0px 5px red, 0px 0px 5px red, 0px 0px 5px red"
    });
    $('.alter').eq(4).css({
        "color":"black",
        "text-shadow":"0px 0px 5px orange, 0px 0px 5px orange, 0px 0px 5px orange"
    });
    $('.alter').eq(5).css({
        "color":"black",
        "text-shadow":"0px 0px 5px pink, 0px 0px 5px pink, 0px 0px 5px pink"
    });
    $('.alter').eq(6).css({
        "color":"black",
        "text-shadow":"0px 0px 5px grey, 0px 0px 5px grey, 0px 0px 5px grey"
    });
    $('.alter').eq(7).css({
        "color":"black",
        "text-shadow":"0px 0px 5px white, 0px 0px 5px white, 0px 0px 5px white"
    });
    $('.alter').eq(8).css({
        "color":"black",
        "text-shadow":"0px 0px 5px skyBlue, 0px 0px 5px skyBlue, 0px 0px 5px skyBlue"
    });
    $('.alter').eq(9).css({
        "color":"black",
        "text-shadow":"0px 0px 5px red, 0px 0px 5px red, 0px 0px 5px red"
    });
});

//Wind Sound on Hover
$(document).ready(function(){
    $('.gridItems').on('mouseover', function(){
        document.querySelector('#wind').volume = 0.1;
        document.querySelector('#wind').load();
        document.querySelector('#wind').play();
    });
});