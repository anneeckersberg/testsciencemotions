$(document).ready(function(){
        //$(".cell").fadeOut(3000);
    });

    
    setInterval(
    function makeDiv() {
        var divsize = 50;
        var posx = (Math.random() * ($(".tissue-container").width() - divsize)).toFixed();
        var posy = (Math.random() * ($(".tissue-container").height() - divsize)).toFixed();
        $newdiv = $("<div class=cell-clone></div>").css({
            'left': posx + 'px',
            'top': posy + 'px'
        });
    
        $newdiv.appendTo('.tissue-container').delay(100).fadeIn(50, function () {           
            makeDiv();
            setTimeout(function() {
                $newdiv.remove();
            }, 10000);             
        });
  
    }, 10000);

