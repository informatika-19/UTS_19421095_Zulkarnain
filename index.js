const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/e-ktponline', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => {
  console.log('Berhasil Terhubung Ke Database')
}).catch((e) => {
  console.log(e)
  console.log('Gagal Terhubung Ke Database')
})

app.use(bodyParser.json({
  extended: true,
  limit:'20mb'
}))

app.use(bodyParser.urlencoded({
  extended: true,
  limit:'20mb'
}))

app.use('/user', require('./routes/User'))
app.use('/e-ktponline', require('./routes/E-ktponline'))

app.listen(5000, () =>{
    console.log('Server Started')
})