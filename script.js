function count (value, time, procent) {
    var sum = value + ((procent / 12 / 1000 ) * value * time ) ;
    //procent jest rocznie
    //jeśli pożyczka to oblicz na początku
    var rate = sum / time;
    var returnOfInvestment = sum - value;
    var output =
    console.log('value = ' + value + ' rate = ' + rate + ' time = ' + time + ' sum = ' + sum + ' zwrot z inwestycji to ' + returnOfInvestment + 'procent = ' + procent);
}
$(document).ready(function(){
    //event listeners
    $('#submit').on('click', function(){
        var value = $('#value').val() * 1;
        var procent = $('#procent').val() * 1;
        var time = $('#time').val() * 1;
        count(value,  time, procent);
        $('#userInput').text(value);
    });
});
//pożyczka










