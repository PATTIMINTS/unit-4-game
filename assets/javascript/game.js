let random_result;
let lost = 0;
let win = 0;
let previous = 0;

// $(".crystal").attr('class');

let resetAndStart = function () {

    $(".crystals").empty();


random_result = Math.floor(Math.random() * 70) + 30;


$(".result").html('Random Result: ' + random_result);
for(var i=0; i<4; i++){

    let random = Math.floor(Math.random() * 11) + 1;
    


    let crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
        

        $(".crystals").append(crystal);

    }

    $('.previous').html("Total Score: " + previous);
}
resetAndStart();


//Event delegation
$(document).on('click', ".crystal", function () {
   
    let num = parseInt($(this).attr('data-random'));

    previous += num;

    $('.previous').html("Total Score: " + previous);

    console.log(previous);


    if (previous > random_result){
        lost--;

        $(".lost").html("You Lost: " + lost);

        previous = 0;

        resetAndStart();
        
    }
    

    else if(previous === random_result){
        win++;

        $(".win").html("You Win: " + win);
        
        previous = 0;
        
        resetAndStart();
    }
        
    
    

});


// 4 Crystals with random results
// Each Crystal needs a random number between 1-12
// The previous result should be added to the new when clicking crystal
// If the result is greater we add to the lost counter
// If the result is equal we add to the win counteer
// Every win or loss should generate a new number for each crystal
