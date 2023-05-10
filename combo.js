const express = require('express')
const app = express()
const port = 5535

const bopa = require('body-parser')
app.use(bopa.urlencoded({extended:false}))
// const swaggerJsDoc = require('swagger-jsdoc')
// const swaggerUi = require('swagger-ui-express')

// const swaggerOptions={
//     swaggerDefinition:{
//         info:{
//             title:'Combo API',
//             description:'Combobox API Information',
//             contact:{
//                 name:'Harshil Lathiya'
//             },
//         },
//         servers:[{url:'http://localhost:5535'}]
//     },
//     apis:['combo.js']
// }


// const swaggerDocs = swaggerJsDoc(swaggerOptions) 
// app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs))

// /**
//  * @swagger
//  * get:
//  * description:use to request all customers
//  * responses:
//  * '200':
//  * description: A successful response
//  * 
//  */

app.use(express.json())

app.set('view engine','ejs')

const router = require('./routes/combo')
app.use(router)


app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})