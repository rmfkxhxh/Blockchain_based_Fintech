let items = [

]

const list = (req, res) => {
    res.render('board/list', {
        item: items
    })
}

const view = (req, res) => {
    console.log(req.query.name)
    // 1. 내가 내용을 가져올수 있는가
    // 2. 가져온 내용을 html에 넘길수 있는가
    res.render('board/view')
}

const write = (req, res) => {
    res.render('board/write')
}

const update = (req, res) => {
    res.render('board/update')
}

const writeAction = (req, res) => {
    const {subject, content} = req.body
    console.log(subject, content)
    res.redirect(`/board/view`)
}
const updateAction = (req, res) => {
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