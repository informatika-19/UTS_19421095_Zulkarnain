const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ektponlineSchema = new Schema({
  namalengkap: {
    type: String
  },
  nik: {
    type: Number
  },
  alamatlengkap: {
    type: String
  },
  jeniskelamin: {
    type: String
  },
  agama: {
    type: String
  },
  statusperkawinan: {
    type: String
  },
  pekerjaan: {
    type: String
  }

})
module.exports = mongoose.model('e-ktponline', ektponlineSchema)