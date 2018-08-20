var random_result;
var lost;
var win;
var previous = 0;

// $(".crystal").attr('class');

random_result = Math.floor(Math.random() * 70) + 30;


$(".result").html('Random Result: ' + random_result);
for(var i=0; i<4; i++){

    var random = Math.floor(Math.random() * 11) + 1;
    // console.log(random);


    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

    $(".crystals").append(crystal);

}

$(".crystal").on('click', function () {

    
    var num = parseInt($(this).attr('data-random'));

    previous += num;

    console.log(previous);
    

});


// 4 Crystals with random results
// Each Crystal needs a random number between 1-12
// Every win or loss should generate a new number for each crystal
// The previous result should be added to the new when clicking crystal
// If the result is greater we add to the lost counter
// If the result is equal we add to the win counteer
