//Global vars

var silverB = document.getElementsByClassName('option')[0];
var royalBlueB = document.getElementsByClassName('option')[1];
var darkGreyB = document.getElementsByClassName('option')[2];

$(document).ready(function(){
    $(silverB).on('click', function(){
        $('#customedCard').css({
            "background-image":"url('greyBack.jpg')",
            "border-color":"black"
        });
        $('#name').css({
            "color":"gold",
            "text-shadow":"0px 0px 5px black",
            "border-color":"silver"
        });
        $("#nameIntro").css({
            "color":"yellowGreen",
            "text-shadow":"0px 0px 5px black"
        });
        $('#hrhr').css({
            "border-color":"silver"
        });
        $('#email, #phone, #address').css({
            "color":"lightYellow",
            "text-shadow":"0px 0px 5px black"
        })
    });

    $(royalBlueB).on('click', function(){
        $('#customedCard').css({
            "background-image":"url('royalBlue.jpg')",
            "border-color":"black"
        });
        $('#name').css({
            "color":"gold",
            "text-shadow":"0px 0px 5px black",
            "border-color":"silver"
        });
        $("#nameIntro").css({
            "color":"yellowGreen",
            "text-shadow":"0px 0px 5px black"
        });
        $('#hrhr').css({
            "border-color":"silver"
        });
        $('#email, #phone, #address').css({
            "color":"lightYellow",
            "text-shadow":"0px 0px 5px black"
        })
    });

    $(darkGreyB).on('click', function(){
        $('#customedCard').css({
            "background-image":"url('darkGrey.jpg')",
            "border-color":"black"
        });
        $('#name').css({
            "color":"gold",
            "text-shadow":"0px 0px 5px black",
            "border-color":"silver"
        });
        $("#nameIntro").css({
            "color":"yellowGreen",
            "text-shadow":"0px 0px 5px black"
        });
        $('#hrhr').css({
            "border-color":"silver"
        });
        $('#email, #phone, #address').css({
            "color":"lightYellow",
            "text-shadow":"0px 0px 5px black"
        })
    });
});