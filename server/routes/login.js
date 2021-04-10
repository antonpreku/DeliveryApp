const router = require('express').Router()
const bcrypt = require('bcrypt')
const { User, Session} = require('../db');

router.post('/', async (req, res, next) => {
    try {
    const { userName, password } = req.body;
    
    const user = await User.findOne({where: { userName }})

    if (user) {
        const correctPassword = await bcrypt.compare(password, user.password)
        if (correctPassword) {
            const createdSession = await Session.create()
            res.cookie('sid', createdSession.id, {
                maxAge: new Date(Date.now() + 60 * 60 * 24 * 7),
                path: '/'
                });
            await createdSession.setUser(user)
            res.send(user)
        }
        else {
            res.sendStatus(401);
        }
    }
    else {
        res.sendStatus(401);
    }
}
catch (err) {
    next(err)
}
})

module.exports = router;
