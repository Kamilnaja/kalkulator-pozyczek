function count (value, time, procent) {
    var sum = value + (procent * value * time / 12 / 100) ;
    //procent jest rocznie
    //jeśli pożyczka to oblicz na początku
    var rate = sum / time;
    var returnOfInvestment = sum - value;
    console.log('kwota pobrana ' + value + ' rata wynosi ' + rate + ' czas wynosi ' + time + ' całośc kredytu to ' + sum + 'zwrot z inwestycji to ' + returnOfInvestment);
}
$(document).ready(function(){
    //event listeners
    $('#submit').on('click', function(){
        var value = $('#value').val();
        var procent = $('#procent').val();
        var time = $('#time').val();
        console.log();
    });
});
//pożyczka



count(100000, 12, 15);






