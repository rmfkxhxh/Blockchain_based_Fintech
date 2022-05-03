let items = [

]

const list = (req, res) => {
    res.render('board/list', {
        item: items
    })
}

const view = (req, res) => {
    console.log(req.query.index); //볃교
    const { index } = req.query;
    // items[index - 1] // 객체
    res.render('board/view', {
        item: items[index - 1]
    })
}

const write = (req, res) => {
    res.render('board/write')
}

const update = (req, res) => {
    res.render('board/update')
}

const writeAction = (req, res) => {
    let { subject, content } = req.body
    console.log(`subject: ${subject}, content: ${content}`)
    //db 저장
    const obj = { subject, content };
    items.push(obj); // [ ] => [ obj ]
    items.length
    res.redirect(`/board/view?index=${items.length}`)
}

module.exports = {
    list,
    view,
    write,
    update,
    writeAction,
}