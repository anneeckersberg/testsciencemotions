$(document).ready(function(){
    //$(".cell").click(function)
    //$( ".cell" ).toggle( "scale",{percent:80}, 2000);
        //$(".cell").fadeOut(3000);
    });

    


    function makeCell() {
        var divsize = 50;
        var posx = (Math.random() * ($(".tissue-container").width() - divsize)).toFixed();
        var posy = (Math.random() * ($(".tissue-container").height() - divsize)).toFixed();
        $newCell = $("<div class='cell-clone'></div>").clone().css({
            'left': posx + 'px',
            'top': posy + 'px',
        });
 
        $newCell.appendTo('.tissue-container');
    }


    function multiplyCell(){
        for(var i = 0; i < 100; i++){
            setTimeout(function timer(){
                makeCell();
            }, i * 200);
            
        }           
    }


setTimeout( multiplyCell, 11000 );

