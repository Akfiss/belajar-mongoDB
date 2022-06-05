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
