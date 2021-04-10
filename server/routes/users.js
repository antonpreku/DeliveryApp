const router = require('express').Router()
const { User, Session, Business} = require('../db');
const bcrypt = require('bcrypt');


router.get('/',async (req, res, next) => {
    try{
        const users = await User.findAll();
        res.send(users)
    }catch(err){
        next(err)
    }
})
router.get('/get-user', async (req, res, next) => {
    try {
        if(!req.cookies.sid){
            res.redirect('/')
        }else{
            const user = await User.findOne({
                include: [
                  {
                    model: Session,
                    where: {
                      id: req.cookies.sid
                    }
                  },
                  {
                    model: Business,
                  }
                ]
              })
        
              if (user){
                  res.send(user)
              }else{
                res.redirect('/')
              }
        }    
    }
    catch (err) {
        next(err)
    }
})

router.post('/create',async (req, res, next) => {
    try{
        const passwordEncrypt = await bcrypt.hash(req.body.password, 10)

        const user = await User.create( {
            userName: req.body.firstName,       
            password: passwordEncrypt,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        });
        const createdSession = await Session.create()
        res.cookie('sid', createdSession.id, {
            maxAge: new Date(Date.now() + 60 * 60 * 24 * 7),
            path: '/'
          });
        await createdSession.setUser(user)

        res.send(user)
    }catch(err){
        next(err)
    }
})



module.exports = router
