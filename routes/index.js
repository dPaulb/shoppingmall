var express = require('express')
var path = require('path')
var request = require('request')
var cheerio = require('cheerio')
var router = express.Router();
var co = require('co')

router.get('/', function (req, res) {

    var url = "http://www.aboki.net/shop/shopbrand.html?xcode=387&mcode=001&type=X";
    var result = [];
    request(url, (error, response, body) => {
        var $ = cheerio.load(body, {decodeEntities: false});

        var thumb = $(".prd-thumb").find(".MS_prod_img_s");
        //console.log(thumb[thumb.length-1].attribs.src);

        for(var i = 0;i<thumb.length;i++){
            result.push("aboki.net" + thumb[i].attribs.src);

        }

        //console.log(result);
        res.render('../public/page1', {result : result});
    })


    //res.sendFile(path.resolve(__dirname, 'public', index.html));
});

router.get('/page2', function (req, res) {


    var url = "http://www.aboki.net/shop/shopbrand.html?xcode=004&type=X&src=image&kw=001701";
    var result = [];
    request(url, (error, response, body) => {
        var $ = cheerio.load(body, {decodeEntities: false});

        var thumb = $(".prd-thumb").find(".MS_prod_img_s");
        //console.log(thumb[thumb.length-1].attribs.src);

        for(var i = 0;i<thumb.length;i++){
            result.push("aboki.net" + thumb[i].attribs.src);

        }

        //console.log(result);
        res.render('../public/page2', {result : result});
    })

    //res.render('../public/page2');
})

router.get('/page3', function (req, res) {

    var url = "http://www.aboki.net/shop/shopbrand.html?xcode=384&mcode=001&type=X";
    var result = [];
    request(url, (error, response, body) => {
        var $ = cheerio.load(body, {decodeEntities: false});

        var thumb = $(".prd-thumb").find(".MS_prod_img_s");
        //console.log(thumb[thumb.length-1].attribs.src);

        for(var i = 0;i<thumb.length;i++){
            result.push("aboki.net" + thumb[i].attribs.src);

        }

        //console.log(result);
        res.render('../public/page2', {result : result});
    })

   // res.render('../public/page3');
})
router.get('/page4', function (req, res) {
    var url = "http://www.aboki.net/shop/shopbrand.html?xcode=384&mcode=003&type=X";
    var result = [];
    request(url, (error, response, body) => {
        var $ = cheerio.load(body, {decodeEntities: false});

        var thumb = $(".prd-thumb").find(".MS_prod_img_s");
        //console.log(thumb[thumb.length-1].attribs.src);

        for(var i = 0;i<thumb.length;i++){
            result.push("aboki.net" + thumb[i].attribs.src);

        }

        //console.log(result);
        res.render('../public/page2', {result : result});
    })

    //res.render('../public/page4');
})

router.get('/detail', function(req, res){



    res.render('../public/product-detail', {detailSrc : req.query.id})
    // var getData = co(function*(){
    //
    // });
    // getData.then(result => {
    //     res.render('../public/product-detail')
    // })



})


module.exports = router;