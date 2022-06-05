// select *  from customers where _id = 'khannedy'
db.customers.find({
    _id: "martha"
});

// select * from customers where nama = 'Bagus Kahfa'
db.customers.find({
    name: "Bagus Kahfa"
});

// select * from jenis_barang where tarif = 2000
db.products.find({
    tarif: 2000
});

// select * from orders where items.jenis_barang_id = 2
db.orders.find({
    "items.jenis_barang_id": 2
});
