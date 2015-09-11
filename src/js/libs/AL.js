
/*
 * ASSET LOADER

var assets = {
    'imageName': {src: '', x: 0, y: 0, a: 0, s: 0}   
};

_l = new AL();
_l.load(assets, cb);

then access by:

_l.ASSET_POOL['imageName'];
*
*/

var AL = function () {
    var inst = this,
        count = 0,
        newObj = {};

    function imgLoad() {
        count -= 1;
        if (count === 0) {
            inst.ASSET_POOL = newObj;
            
            cb(newObj);
        }
    }

    /**
     * list Object - object list of assets to load with optional properties
     * cb   Function - callback function
     */
    inst.load = function (list, cb) {
        var i;

        for (i in list) {
            count += 1;
            img = new Image();
            img.onload = imgLoad;
            img.crossOrigin = 'anonymous';
            img.src = 'img/' + list[i].src;
            newObj[i] = {
                name: i,
                img: img,
                x: list[i].x || 0,
                y: list[i].y || 0,
                a: list[i].a || 1,
                s: list[i].s || 1,
            };
        }
    };
};


