$(document).ready(function(){
        //$(".cell").fadeOut(3000);
    });

    function makeCell() {
        var divsize = 50;
        var posx = (Math.random() * ($(".tissue-container").width() - divsize)).toFixed();
        var posy = (Math.random() * ($(".tissue-container").height() - divsize)).toFixed();
        $newCell = $("<div class=cell-clone></div>").css({
            'left': posx + 'px',
            'top': posy + 'px'
        });
        
        console.log("newCell", $newCell);

        $newCell.appendTo('.tissue-container');

    }

