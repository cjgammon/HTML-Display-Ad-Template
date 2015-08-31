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

function activateCTA() {
    cta.onmouseover = function() {}, cta.onmouseout = function() {}, cta.onclick = clickthrough;
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

var sw = 298,
    sh = 248,
    animating = false,
    tw,
    clickCatch,
    images = {};

window.onload = function() {

    tw = TweenLite;

    clickCatch = document.getElementById("click-catch");

    activateClickthrough();

    /*
    assetLoader(assets, function (images) {
        var i;
        for (i in images) {
            window[images[i].name] = images[i];
        }
        begin();
    });
    */
};

var assets = {
    
};

var assetLoader = function (list, cb) {
    var i,
        count = 0,
        newObj = {};

    function imgLoad() {
        count -= 1;
        if (count === 0) {
            cb(newObj);
        }
    }

    for (i in list) {
        count += 1;
        img = new Image();
        img.onload = imgLoad;
        img.crossOrigin = 'anonymous';
        img.src = 'img/' + list[i].src;
        newObj[i] = {
            name: i,
            img: img,
            x: list[i].x,
            y: list[i].y,
            a: list[i].a,
            s: list[i].s || 1,
        };
    }
};


