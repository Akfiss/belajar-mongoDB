// select *  from customers where _id = 'martha'
db.customers.find({
    _id: "martha"
});

// select * from customers where nama = 'Bagas Kahfa'
db.customers.find({
    name: "Bagas Kahfa"
});

// select * from jenis_barang where tarif = 2000
db.jenis_barang.find({
    tarif: 2000
});

// select * from orders where items.jenis_barang_id = 2
db.orders.find({
    "items.jenis_barang_id": 2
});

// menampilkan data indeks array ke 1 dengan jenis_barang_id = 3
db.orders.find({
    "items.1.jenis_barang_id": 3
})

// menampilkan data _id dan nama dari collection jenis_barang dimana tarif = 2000
db.jenis_barang.aggregate([
    {$match: {tarif: {$eq: 2000}}},
    {$project: {_id: 1, nama: 1}}
    ])

// menampilkan data _id dan nama dari collection jenis_barang
db.jenis_barang.aggregate([
    {$project: {_id: 1, nama: 1}}
    ])
