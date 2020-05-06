
// function showHideButton() {
//     var shoutB = document.getElementById('shoutbox');

//     if (shoutB.style.display !== 'none') {
//         shoutB.style.display = 'none';
//     } else {
//         shoutB.style.display = 'block';
//     }
// }

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

function playMusic() {
    var mus = document.getElementById('myMusic');
    var playIcon = document.getElementById('playButton');
    var pauseIcon = document.getElementById('pauseButton');

    mus.play();
    mus.volume = 0.5;
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
}

function pauseMusic() {
    var mus = document.getElementById('myMusic');
    var playIcon = document.getElementById('playButton');
    var pauseIcon = document.getElementById('pauseButton');

    mus.pause();
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
}

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