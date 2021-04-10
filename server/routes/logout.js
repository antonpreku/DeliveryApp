const router = require('express').Router()
const {Session } = require('../db');

router.post('/', async (req, res, next) => {
    try {
    const session = await Session.findOne({
        where: {
            id: req.cookies.sid
        }
    })

    await session.destroy()

    res.redirect('/')
}
catch (err) {
    next(err)
}
})

module.exports = router;
