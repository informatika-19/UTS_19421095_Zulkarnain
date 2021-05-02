const ektponlineModel = require('../model/E-ktponline')
const objectId = require('mongoose').Types.ObjectId

//meng create data baru (create)
exports.create= (data) =>
  new Promise((resolve, reject)=> {
    ektponlineModel.create(data)
      .then(()=> resolve({
        status : true,
        pesan : 'Berhasil Input Data Diri'
      })).catch(()=> ({
        status : false,
        pesan : 'Gagal Input Data Diri'
      }))
  })
//menampilkan seluru data diri (read)
  exports.showAllData = () =>
    new Promise((resolve, reject) => {
        ektponlineModel.find()
        .then(result => {
          resolve({
            status: true,
            pesan: 'Berhasil Menampilkan Data Diri',
            data: result
          })
        }).catch(() => reject({
            status: false,
            pesan: 'Gagal Menapilkan Data Diri',
            data: []
        }))
    })
// menampilkan data diri dengan object id (read)
exports.showDataById = (id) =>
    new Promise((resolve, reject) => {
        ektponlineModel.findOne({
        _id: objectId(id)
    }).then(result => {
      resolve({
        status: true,
        pesan: 'Berhasil Menampilkan Data Diri',
        data: result
      })
    }).catch(() => reject({
      status: false,
      pesan: 'Gagal Menapilkan Data Diri',
      data: null
  }))
})
// update data diri dengan object id (update)
exports.update = (id, data) => 
  new Promise ((resolve, reject) => {
    ektponlineModel.updateOne({
      _id: objectId(id)
    }, data).then(() => resolve({
        status: true,
        pesan: 'Berhasil Mengubah Data Diri'
    })).catch(() => reject({
        status: false,
        pesan: 'Gagal Mengubah Data Diri'
    }))
})
//menghapus data diri dengan object id (delete)
exports.delete = (id) =>
  new Promise((resolve, reject) => {
    ektponlineModel.deleteOne({
      _id: objectId(id)
    }).then(() => resolve ({
      status: true,
      pesan : 'Berhasil Menghapus Data Diri'
    })).catch(() => reject({
      status: false,
      pesan: 'Gagal Menghapus Data Diri'
  }))
})
