const router = require('express').Router()
//import models from /db

router.use('/users', require('./users'))
router.use('/login', require('./login'))
router.use('/logout', require('./logout'))
router.use('/business', require('./business'))



router.use((req, res, next) => {
    const err = new Error('API route not found!')
    err.status = 404
    next(err)
    })

module.exports = router
