let items = [

]

const list = (req, res) => {
    res.render('board/list', {
        item: items
    })
}

const view = (req, res) => {
    // console.log(req.query.name)
    // 1. 내가 내용을 가져올수 있는가
    // 2. 가져온 내용을 html에 넘길수 있는가
    //      2.1 template engine 개념
    //      2.2 탬플릿ㅇ 엔진이라는 아이는, 변수를 사용하면
    //          변수의 결과물로 HTML릏 완성해주는 기능
    //          render 메서드에서
    //          1. html 경로
    //          2. object
    res.render('board/view', {
        a:2,
        name: req.query.name,
    })
}

const write = (req, res) => {
    res.render('board/write')
}

const update = (req, res) => {
    // console.log(req.query.name)
    res.render('board/update', {"name": req.query.name})
}

const writeAction = (req, res) => {
    const {subject, content} = req.body
    console.log(subject, content)
    res.redirect(`/board/view`)
}
const updateAction = (req, res) => {
    console.log(req.body)
    res.redirect(`/board/view`)
}
const deleteAction = (req, res) => {
    res.redirect(`/board/list`)
}

module.exports = {
    list,
    view,
    write,
    update,
    writeAction,
    updateAction,
    deleteAction,
}