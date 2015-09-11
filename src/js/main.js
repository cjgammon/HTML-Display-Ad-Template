var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
var is_safari = navigator.userAgent.indexOf("Safari") > -1;
var is_explorer = navigator.userAgent.indexOf('Trident') > -1;
if ((is_chrome)&&(is_safari)) {is_safari=false;}

function activateClickthrough() {
    
    clickCatch.addEventListener("mouseover", function() {
        
    });
    
    clickCatch.addEventListener("mouseout", function() {
        
    });
}

function begin() {
    console.log('begin');
    animating = true;

    var t = 0,
        start = new Date();

    tw.ticker.addEventListener('tick', frameTick, this);

    ///add tweens
   
    function finish() {
        console.log('duration::', new Date() - start);
        animating = false;
    }
}



function frameTick(e) {

}

var sw = 300 - 2,
    sh = 250 - 2,
    animating = false,
    tw,
    clickCatch,
    images = {};

window.onload = function() {

    tw = TweenLite;

    clickCatch = document.getElementById("click-catch");

    activateClickthrough();
};


