function count (value, time, procent) {
    var sum = value + ((procent / 12 / 1000 ) * value * time ) ;
    //procent jest rocznie
    //jeśli pożyczka to oblicz na początku
    var rate = sum / time;
    var returnOfInvestment = sum - value;
    var output = ('Kwota inwestycji to= ' + Math.round(value) + '<br> Wartość raty wynosi = ' + Math.round(rate) + '<br>Czas kredytu w miesiącach wynosi = ' + Math.round(time) + '<br>Całkowita kwota kredytu wynosi = ' + sum + '<br>Procent pożyczki wynosi = ' + Math.round(procent));
  $('.sum').html(output);

}
$(document).ready(function(){
    //event listeners
    $('#submit').on('click', function(){
        var value = $('#value').val() * 1;
        var procent = $('#procent').val() * 1;
        var time = $('#time').val() * 1;
        count(value,  time, procent);

    });
});










