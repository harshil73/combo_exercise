const express = require('express')
const app = express()
const port = 5678

app.use(express.json())

app.set('view engine','ejs')

const router = require('./routes/combo')
app.use(router)

app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})