function localS() {
    if(localStorage.cartItems === undefined) {
        localStorage.setItem("cartItems", "");
    }
}
$(document).ready(function(){
    $('#bWrapper').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: false,
      variableWidth: true
    });
    $('.slick-prev').appendTo($('.scroller1')).css({
      "background":"none",
      "border":"none",
      "height":"200px",
      "width":"30px"
    }).html('<span class="glyphicon glyphicon-chevron-left"></span>');
    $('.slick-next').appendTo($('.scroller2')).css({
      "background":"none",
      "border":"none",
      "height":"200px",
      "width":"30px"
    }).html('<div class="glyphicon glyphicon-chevron-right"></div>');
});

var loadAnimation = setInterval(function(){
    document.querySelector('.slick-next').click();
}, 2500);

$(document).ready(function(){
var tar;
var clone;
    $('.bItems').on('click', (e)=>{
        if (e.target.id !== 'bWrapper') {
        $('.preview').show();
        tar = e.target;
        tar.id = 'selectedOne';
        clone = $('#selectedOne').clone();
        tar.removeAttribute('id');
        $('.preview').html(clone);
        $('.preview').append("<br><p><del>$10.99</del></p><p id='price'>$5.99</p><hr><p>-This is the description of this book-</p><hr><div class='addC'>Add to Cart</div><br><div id='back'>Back</div>");
        $('#back').on('click',()=>{
            $('.preview').hide();
            $('.preview').html('');
        });
        $('.addC').on('click', ()=>{
            localStorage.cartItems += 's';
            $('#addedMsg').slideDown(200);
            setTimeout(()=>{
                $('#addedMsg').slideUp(200);
            },1000);
        });
        }
    });
});

var allBooks = [
    "<img src='books/b1.jpg'/>",
    "<img src='books/b2.jpg'/>",
    "<img src='books/b3.jpg'/>",
    "<img src='books/b4.jpg'/>",
    "<img src='books/b5.jpg'/>",
    "<img src='books/b6.jpg'/>",
    "<img src='books/b7.jpeg'/>"
];

$(document).ready(function(){
    $('#m1, #m11').on('click',()=>{
        $('.burgerList').hide();
        var x = "<br><p><del>$10.99</del></p><p id='price'>$5.99</p><p>-This is the description of this book-</p><div class='addC'>Add to Cart</div><br><div class='back'>Back</div><hr>";

        for (var i=0; i<allBooks.length; i++){
            document.querySelector('.preview').innerHTML += allBooks[i];
            document.querySelector('.preview').innerHTML += x;
        }
        $('.preview').show();
        $('.addC').on('click',()=>{
            localStorage.cartItems += 's';
            $('#addedMsg').slideDown(200);
            setTimeout(()=>{
                $('#addedMsg').slideUp(200);
            },1000);
        });
        $('.back').on('click',()=>{
            $('.preview').hide();
            $('.preview').html('');
        });
    });


    $('#cclose').on('click', function(){
        $('nav').slideUp(500);
        clearInterval(theU);
    });
    
    $('#shop').on('click',()=>{
        $('.burgerList').hide();
        $('#shop p').odd().css('background-color','#ceac86');
        $('#shopM').slideToggle();
        $('#aboutM').hide();
    });

    $('#m2, #m22').on('click',()=>{
        document.querySelector('#bestSellers').scrollIntoView({block:"center"});
        $('.burgerList').hide();
        $('#shopM').hide();
        document.querySelector('#bWrapper').style.border = '3px red solid';
        setTimeout(()=>{
            document.querySelector('#bWrapper').style.border = 'none';
        },500);
        setTimeout(()=>{
            document.querySelector('#bWrapper').style.border = '3px red solid';
        },1000);
        setTimeout(()=>{
            document.querySelector('#bWrapper').style.border = 'none';
        },1500);
        setTimeout(()=>{
            document.querySelector('#bWrapper').style.border = '3px red solid';
        },2000);
        setTimeout(()=>{
            document.querySelector('#bWrapper').style.border = 'none';
        },2500);
    });

    $('#about').on('click',()=>{
        $('#aboutM').slideToggle();
        $('#shopM').hide();
    });

    $('#profile').on('click',()=>{
        $('#logIn').slideToggle();
    });
    $('#logIn input').on('click',()=>{
        alert('No server side script available!');
    });
    $('#logIn button').on('click',()=>{
        alert('No server side script available!');
    });
});


$(document).ready(()=>{
    $('.burgerList p').odd().css("background-color","#ceac86");
    $('#hamIcon').on('click',()=>{
        $('#shopM').hide();
        $('.burgerList').slideToggle();
    });
    $('#logg').on('click',()=>{
        alert('Sorry, no server script available for log-in.');
        $('.burgerList').hide();
    });
    $('#about2').on('click',()=>{
        alert('*Adjust browser size to see responsive design*\nThis is not a legitimate store.');
        $('.burgerList').hide();
    });
});

var theU = setInterval(()=>{
    document.querySelector('#theU').style.color='white';
    setTimeout(()=>{
        document.querySelector('#theU').style.color='blue';
    },1000);
},2000);

var customerNames = [];
var customerEmails = [];

$(document).ready(()=>{
    var i1 = document.querySelector('#i1');
    var i2 = document.querySelector('#i2');
    $('#emailS').on('click',()=>{
        if (i2.value === '' || i2.value === undefined){
            alert('Please provide your email.');
            i2.style.borderColor = 'red';
        } else {
            customerEmails.push(i2.value);
            if (i1.value === undefined || i1.value === ''){
                customerNames.push('omitted');
                alert('Your info has been pushed to array!\nCheck arrays customerNames & customerEmails in console!');
                i2.style.borderColor = 'none';
            } else {   
                customerNames.push(i1.value);
                alert('Your info has been pushed to array!\nCheck arrays customerNames & customerEmails in console!');
                i2.style.borderColor = 'none';
            }
        }
    });
});

function cartPage(){
    document.querySelector('#cartPage').style.display = 'block';
    document.querySelector('#addedN').innerHTML = localStorage.cartItems.length;
    document.querySelector('#totalC').innerHTML = '$' + (5.99 * localStorage.cartItems.length).toFixed(2);
}

function subtract(){
    localStorage.cartItems = localStorage.cartItems.slice(1);
    document.querySelector('#addedN').innerHTML = localStorage.cartItems.length;
    document.querySelector('#totalC').innerHTML = '$' + (5.99 * localStorage.cartItems.length).toFixed(2);
}

function add(){
    localStorage.cartItems += 's';
    document.querySelector('#addedN').innerHTML = localStorage.cartItems.length;
    document.querySelector('#totalC').innerHTML = '$' + (5.99 * localStorage.cartItems.length).toFixed(2);
}

function reset(){
    localStorage.cartItems = '';
    document.querySelector('#addedN').innerHTML = localStorage.cartItems.length;
    document.querySelector('#totalC').innerHTML = '$' + 5.99 * localStorage.cartItems.length;
}

function back(){
    document.querySelector('#cartPage').style.display = 'none';
}

function check(){
    alert('Sorry, this is not a legit store.');
}