var url = "https://xangle.io/project/BTC/profile"; //url주소

var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

function getSrc(){
        var dataJson = {};
        var tmp = [];
        var dataPath=`sup.json`; //저장할 파일의 경로명
        request(url, async function(err,res,body) {
            var $=cheerio.load(body);
            $('.base-layout').each(async function(num, item) { //champion-list__items 클래스에서 가지고 오겠다는 뜻 (이부분 자유롭게 수정하면 됨)
                let kl = $(item).find('div').attr('data-positions');
                tmp.push(kl);
                if (kl.includes('sup')) {
                    $(item).find('a').each(function(num, item) {
                        if ($(item).attr('class') == "champion-list__item__champion__icon") {
                            let korChampName = $(item).attr("alt");
                            let engChampName = ($(item).attr("src").split('/')[7]).split('.')[0];
                            dataJson[engChampName] = korChampName;
                        }
                    });
                }
            });
            fs.writeFileSync(dataPath, JSON.stringify(dataJson));
            console.log('wrote json file!');
        });   
    }

getSrc();