const express = require('express')
const app = express()
app.use(require('express').json());
const morgan = require('morgan')
const path = require('path')
const cookieParser = require('cookie-parser')

app.use(morgan('dev'))

app.use(cookieParser())
app.use(express.static(path.join(__dirname, './public')))

app.use('/api', require('./routes'))

//404 handler
app.use((req, res, next) => {
    const error = Error(`Page not found(${req.url})`)
    error.status = 404
    next(error)
})

//500 handler
app.use((err, req, res, next) => {
    console.log(err, err.stack);
    res.status(err.status || 500).send(`
    <html>
      <body>
        <h1 style = color:crimson>${err}</h1>
        <p>${err.stack}</p>
      </body>
    </html>`)
  })

//listen on port
const port = process.env.PORT || 3030;

const init = () => {
  try {
    app.listen(port, () => console.log(`listening on port ${port}`));
  }
  catch (err) {
    console.log(err);
  }
}

init();
