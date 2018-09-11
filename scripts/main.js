function makeCell() {
    var posx = (Math.random() * ($(".tissue-container").width())).toFixed();
    var posy = (Math.random() * ($(".tissue-container").height())).toFixed();
    $newCell = $("<div class='cell-clone'></div>").clone().css({
        'left': posx + 'px',
        'top': posy + 'px',
    });

    $newCell.appendTo('.tissue-container');
}


function multiplyCell(){
    for(var i = 0; i < 120; i++){
        setTimeout(function timer(){
            makeCell();
        }, i * 65); 
    }           
}

//This starts the multiplication of the cells
setTimeout( multiplyCell, 11000 );

//This starts drawing the svg-drawings, one after the other
$(function(){
    $('.organ').hide().delay(22000).queue(function(n) {
        $(this).show(); n();
    })
    $('.organ-system').hide().delay(26000).queue(function(n) {
        $(this).show(); n();
    })
});

