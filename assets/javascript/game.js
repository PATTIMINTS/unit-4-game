let random_result;
let lost = 0;
let win = 0;
let previous = 0;

// $(".crystal").attr('class');

let startGame = function () {
    
}

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

        crystal.html(random);

    $(".crystals").append(crystal);

}

$(".crystal").on('click', function () {

    
    var num = parseInt($(this).attr('data-random'));

    previous += num;

    console.log(previous);


    if (previous > random_result){
        lost--;

        $(".lost").html(lost);
    }
    

    else if(previous === random_result){
        win++;

        $(".win").html(win);
    }
        
       


    
    

});


// 4 Crystals with random results
// Each Crystal needs a random number between 1-12
// The previous result should be added to the new when clicking crystal
// If the result is greater we add to the lost counter
// If the result is equal we add to the win counteer
// Every win or loss should generate a new number for each crystal
