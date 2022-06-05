// select * from customers where _id = 'kahfa'
db.customers.find({
    _id: {
        $eq: "kahfa"
    }
});

// select * from jenis_barang where tarif > 1000
db.products.find({
    tarif: {
        $gt: 1000
    }
});

// select * from jenis_barang where kategori in ('small', 'big') and tarif > 1000
db.products.find({
    kategori: {
        $in: ["small", "big"]
    },
    tarif: {
        $gt: 1000
    }
});
