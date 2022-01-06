const request = require("request");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");

const getNews = () => {
  request(
  {
    url: "https://news.naver.com/",
    method: "GET",
    encoding: null,
  },
  (error, response, body) => {
    if (error) {
      console.error(error);
      return;
    }
    if (response.statusCode === 200) {
      console.log("response ok");
      const bodyDecoded = iconv.decode(body, "utf-8");
      const $ = cheerio.load(bodyDecoded);

      const list_text_inner_arr = $(
        "#ct > div > section.main_content > div.main_brick > div > div:nth-child(1) > div.main_brick_item._channel_news_preview_wrapper > div > div > div:nth-child(2) > a > div.cjs_news_tw > div"
      ).toArray();
      console.log(list_text_inner_arr)
      const result = [];
      list_text_inner_arr.forEach((div) => {
        const aFirst = $(div).find("a").first(); // 첫번째 <a> 태그
        
        const path = aFirst.attr("href"); // 첫번째 <a> 태그 url
        const url = `https://news.naver.com/${path}`; // 도메인을 붙인 url 주소
        const title = aFirst.text().trim();
        // document.querySelector()
        const aLast = $(div).find("a").last(); // <두번째(마지막) <a>태그
        const author = aLast.text().trim();
        console.log(path)
        console.log(aFirst)
        // console.log(url)
        // console.log(title)
        // console.log(aFirst)
        result.push({
          url,
          title,
          author,
        });
      });
    //   console.log(result);
    }
  });
};

getNews();