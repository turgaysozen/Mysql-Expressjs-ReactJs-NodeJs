
const express = require('express')
const app = express()
const port = 3001
const db = require('./models')
var cors = require('cors')
app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const apiRoutes = require('./routes/apiRoutes')

app.use('/api', apiRoutes)

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
})
