import axios from 'axios';
import cheerio from 'cheerio';

exports.crawlBlog = async (ctx) => {
    let htmlData = [];
    // axios 를 활용해서 AJAX로 HTML 문서를 가져온다.
    const getHTML = () => {
      try {
        return axios.get('가져올 문서의 URL');
      } catch (e) {
        console.error(e);
      }
    };
  
    let result = [];
    let resultList = [];
    let data = [];
  
    // getHTML 함수 실행 후 데이터에서 div.se-section-documentTitle 인 리스트를 postList에 저장
    await getHTML()
      .then((html) => {
        const $ = cheerio.load(html.data);
        const $postList = $('div.se-section-documentTitle');
  
        $postList.each(function (i, el) {
          result[i] = {
            date: $(this).find('span.se_publishDate').text(),
            category: $(this).children('div.blog2_series').find('a').text(),
            title: $(this).children('div.pcol1').find('span').text(),
            author: $(this).children('div.blog2_container').find('a').text(),
            hits: 0
          };
        });
  
        return result;
      })
      .then((res) => {
        console.log(result);
      });
  
    ctx.body = result;
  };