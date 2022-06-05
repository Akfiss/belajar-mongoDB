// select count(*) from jenis_barang
db.jenis_barang.find({}).count()

// select * from jenis_barang limit 3
db.jenis_barang.find({}).limit(3)

// select * from customers offset 2
db.customers.find({}).skip(2)

// select * from customers limit 3 offset 2
db.customers.find({}).limit(3).skip(2)

// select * from customers order by nama asc, kategori desc
db.customers.find({}).sort({
    nama: 1,
    kategori: -1
})
