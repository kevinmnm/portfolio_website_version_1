
$(document).ready(function(){
    $('.shoutboxAvatar').attr("alt","img");
});

$(document).ready(function(){
    $('.topBannerDivs').eq(2).on('click', function(){
        open('resume.pdf');
    });
});

$(document).ready(function() {
    $('#shoutboxButtonShowHideB').click(function() {
        $('#shoutbox').slideToggle();
    });
});

$(document).ready(function() {
    $('#aboutMeButtonShowHide').click(function() {
        $('#aboutMeImageDiv').slideToggle();
    });
});

//Audio message onload

$(document).ready(function(){
    $('#musicMsg').delay(2000).show(1000).delay(4500).hide(1000);
});

//Audio play
$(document).ready(function() {
    $('#musicWrapperIt').on('click', function() {
        $('#musicWrapperIt').hide();
        document.querySelector('#imHooked').play();
        $('#musicWrapper').slideToggle();
    });

    $('#musicWrapperI').on('click', function() {
        $('#musicWrapper').slideToggle();
    });

    var songList = document.getElementsByClassName('mus');

    for ( var i = 0; i < songList.length; i++) {
        songList[i].volume = 0.4;
    }
});

/*shooting star*/

$(document).ready(function () {
    // every 2400 ms -> a new star is falling down
    setInterval(function () {
      makeAStarFall();
    }, 2400);
  });
  
  function makeAStarFall() {
    // left: random start- und stop-position position
    var min = -200;
    var max = 1800;
  
    var startPosLeft = Math.floor(Math.random() * max + min);
    var stopPosLeft = Math.floor(Math.random() * max + min);
  
    $("<div>").addClass("star falling-star").insertAfter(".stars");
  
    $(".falling-star").css("left", startPosLeft);
  
    setTimeout(function () {
      $(".falling-star").addClass("go-falling");
      $(".go-falling").css("left", stopPosLeft);
    }, 400);
  
    setTimeout(function () {
      $(".falling-star").remove();
    }, 1800);
  }

$(document).ready(function() {
    $('#weatherButtonShowHide').click(function() {
        $('#weatherApi').slideToggle();
    });
});

$(document).ready(function() {
    $('#BTCButtonShowHide').click(function() {
        $('#btcContain').slideToggle();
    });
});

$(document).ready(function() {
    $('#effectButtonShowHide').click(function() {
        $('#coolEyeDiv').slideToggle();
        $('.coolEyeDiv').slideToggle();
        $('.final').slideToggle();
        $('#gameLink').slideToggle();
        $('#gameLink2').slideToggle();
        $('.final2').slideToggle();
        $('.final3').slideToggle();
        $('#gameLink3').slideToggle();
        $('.method3').slideToggle();
        $('#game3method1').slideToggle();
    });
});

$(document).ready(function() {
    $('#coolEyeId').on('click', function() {
        $('#dmgText').hide();
    });
});

var countClick = 0;
(function (window, document, undefined) {
    "use strict";
    var start;
    var end;
    var delta;
    var theDiv = document.getElementById("coolEyeDiv");

    theDiv.addEventListener('click', function() {
        countClick++;
    })
  
    theDiv.addEventListener("mousedown", function () {
      start = new Date();
    })
  
    theDiv.addEventListener("mouseup", function () {
      end = new Date();
      delta = (end - start) / 1000.0;
      if (delta >= 1) {
        document.querySelector('#coolEyeId').style.display = 'none';
        document.querySelector('.coolEyeId2').style.display = 'block';
      }

      if (countClick >= 10) {
        document.querySelector('#coolEyeId').style.display = 'none';
        document.querySelector('.coolEyeId2').style.display = 'block';
      };
    });
  })(window, document);

$(document).ready(function(){
    $('#allButtonShowHide').on('click', function(){
        $('#coolEyeDiv').slideToggle();
        $('#btcContain').slideToggle();
        $('#weatherApi').slideToggle();
        $('#aboutMeImageDiv').slideToggle();        
        $('#shoutbox').slideToggle();
        $('.coolEyeDiv').slideToggle();
        $('#gameLink').slideToggle();
        $('.final, .final2').slideToggle();
        $('#gameLink2').slideToggle();
        $('.final3').slideToggle();
        $('#gameLink3').slideToggle();
        $('.method3').slideToggle();
        $('#game3method1').slideToggle();
    });
});

document.querySelector('.method1').addEventListener('click', () => {
    alert('User has to clicks 10 times or hold mouse for more than 1 seconds.');
});

document.querySelector('.method2').addEventListener('click', () => {
    alert('User has to click until accumulated damage is over 1000.');
});

var dmgAccu = 0;

$(document).ready(function (){
    $('.coolEyeDiv').on('click', function() {
        $('#dmgText2').hide();
        const redBoss = $('.coolEyeClass')[0];
        const dmgValue = $('#redBossText');
        var damage;
        var clonedDmg;

        damage = Math.floor(Math.random()*110);
        randomId = 'dID' + Math.floor(Math.random() * 110000000);
        $(dmgValue).html(damage);
        $(dmgValue).css({'font-size':'25px',
                        'font-weight':'bold',
                        'color':'darkred',
                        'position':'absolute',
                        'top':'0px',
                        'left':'39%',
                        'user-select':'none',
                        'display':'none'                       
                        });
        clonedDmg = $(dmgValue).clone();
        clonedDmg.id = randomId;
        $(clonedDmg).appendTo($('.method2')).css({'font-size':'30px',
        'font-weight':'bold',
        'color':'darkred',
        'position':'absolute',
        'top':'100px',
        'left':'39%',
        'user-select':'none',
        'display':'block'
                    });
        $(clonedDmg).animate({top:'15px'}).fadeOut();
        dmgValue.innerHTML = damage;
        clonedDmg.innerHTML = damage;

        dmgAccu = dmgAccu + damage;
        if (dmgAccu > 1000) {
            redBoss.style.display = 'none';
            document.getElementById('congratZ').style.display = 'block';
        }
    });
});

/********Game 3 methods******/
//Global var
var cloneF;
var $fishBowl = $('#fishBowl');


$(document).ready(function(){

    $('#fishBowl').on('click', function(event) {
    	if (event.target !== document.querySelector('#fish')) {
            var ranN = Math.floor(Math.random() * 1100000000);
            cloneF = $('.food').eq(0).clone();
            cloneF.id = 'clid' + ranN;
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
            }, 5000);
            
            var cPos = cloneF.position();
            $('#fish').animate({
            	"top":cPos.top - (($('#fish').height() / 2) - 8) + 'px',
                "left":cPos.left - (($('#fish').width() / 2) - 12) + 'px'
            }, 1000);
            var fish = document.querySelector('#fish');
            
        }
      });
    
});