function loadAPI() {
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?id=4355756&appid=d00293bb9cc9d0d65231e40dec1154c1&units=metric", function(data) {

        var wIcon = data.weather[0].icon;
        var currentTemp = data.main.temp;
        var feels = data.main.feels_like;
        var humidity = data.main.humidity;
        var location = data.name;

        $('.weatherIcon').append("<img src='http://openweathermap.org/img/wn/" + wIcon + "@2x.png'/>");
        $('.currentTemp').append(currentTemp).append(' ℃');
        $('.feelsLike').append(feels).append(' ℃');
        $('.humidity').append(humidity).append(' %');
        $('.location').append(location);
    });
}
loadAPI();

$(document).ready(function(){
    $('.divReload').on('click', function(){
        $('.weatherIcon').html('');
        $('.currentTemp').html('');
        $('.feelsLike').html('');
        $('.humidity').html('');
        $('.location').html('');
        loadAPI();
    });
});

// $(document).ready(function() {
//     $('.divReload').click(function() {
//         var xhr = new XMLHttpRequest();
//         xhr.onreadystatechange = function() {
//             if (xhr.radyState === 4) {

//             }
//         }
//     });
// });