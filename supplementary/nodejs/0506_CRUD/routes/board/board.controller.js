const pool = require('../../sql/db.js')

const view = async (req, res) => {
    try {
        const [result] = await pool.query(`SELECT * FROM board WHERE idx=${req.query.idx}`);
        // const { "query": idx } = req;
        console.log(result);
        res.render(`board/view`, {
            idx: req.query.idx,
            item: result[0]
        });
    } catch (e) {
        console.error(e)
    }
}

const list = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM board');
        console.log(result);
        res.render('board/list', {
            items: result
        });
    } catch (e) {
        console.error(e)
    }
}

const write = (req, res) => {
    res.render('board/write');
}

const update = async (req, res) => {
    try {
        const [result] = await pool.query(`SELECT * FROM board WHERE idx=${req.query.idx}`)
        res.render('board/update', {
            item: result[0]
        });
    } catch (e) {
        console.log(e)
    }
}


const deleteAction = async (req, res) => {
    try {
        const [result] = await pool.query(`DELETE FROM board WHERE idx=${req.query.idx}`)
        console.log(result);
        res.redirect('/board/list');
    } catch (error) {
        console.log(error);
    }
}

const writeAction = async (req, res) => {
    try {
        const [result] = await pool.query(`INSERT INTO board (subject, name, content) VALUES ('${req.body.subject}','${req.body.name}','${req.body.content}')`);
        console.log(result.insertId);
        res.redirect(`/board/view?idx=${result.insertId}`);
    } catch (error) {
        console.log(error);
    }
}

const updateAction = async (req, res) => {
    try {
        const [result] = await pool.query(`UPDATE board SET subject='${req.body.subject}', name='${req.body.name}', content='${req.body.content}' WHERE idx=${req.query.idx}`)
        console.log(result)
        res.redirect(`/board/view?idx=${req.query.idx}`);
    } catch (error) {
        console.log(error)
    }
}

const hitAction = async (req, res) => {
    // try {
    //     const [result] = await pool.query(`UPDATE board SET subject='${req.body.subject}', name='${req.body.name}', content='${req.body.content}' WHERE idx=${req.query.idx}`)
    //     console.log(result)
    //     res.redirect(`/board/view?idx=${req.query.idx}`);
    // } catch (error) {
    //     console.log(error)
    // }
}

const likeAction = async (req, res) => {
    // try {
    //     const [result] = await pool.query(`UPDATE board SET subject='${req.body.subject}', name='${req.body.name}', content='${req.body.content}' WHERE idx=${req.query.idx}`)
    //     console.log(result)
    //     res.redirect(`/board/view?idx=${req.query.idx}`);
    // } catch (error) {
    //     console.log(error)
    // }
}

module.exports = {
    view, list, update, write,
    deleteAction, updateAction, writeAction,
    hitAction, likeAction,
}



// let items = [

// ]

// const list = (req, res) => {
//     res.render('board/list', {
//         item: items
//     })
// }

// const view = (req, res) => {
//     // console.log(req.query.name)
//     // 1. 내가 내용을 가져올수 있는가
//     // 2. 가져온 내용을 html에 넘길수 있는가
//     //      2.1 template engine 개념
//     //      2.2 탬플릿ㅇ 엔진이라는 아이는, 변수를 사용하면
//     //          변수의 결과물로 HTML릏 완성해주는 기능
//     //          render 메서드에서
//     //          1. html 경로
//     //          2. object
//     res.render('board/view', {
//         a:2,
//         name: req.query.name,
//     })
// }

// const write = (req, res) => {
//     res.render('board/write')
// }

// const update = (req, res) => {
//     // console.log(req.query.name)
//     res.render('board/update', {"name": req.query.name})
// }

// const writeAction = (req, res) => {
//     const {subject, content} = req.body
//     console.log(subject, content)
//     res.redirect(`/board/view`)
// }
// const updateAction = (req, res) => {
//     console.log(req.body)
//     res.redirect(`/board/view`)
// }
// const deleteAction = (req, res) => {
//     res.redirect(`/board/list`)
// }

// module.exports = {
//     list,
//     view,
//     write,
//     update,
//     writeAction,
//     updateAction,
//     deleteAction,
// }