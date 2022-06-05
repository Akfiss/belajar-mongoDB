// Insert document customers
db.customers.insertMany([
    {
        _id: "kenedy",
        nama: "Leon Kenedy",
        alamat: "Jl. Kenangan no.12",
        no_hp: "08123476898"
    },
    {
        _id: "martha",
        nama: "Arinda Martha",
        alamat: "Jl. Bahagia no.17",
        no_hp: "082347607690"
    },
    {
        _id: "kahfa",
        nama: "Bagas Kahfa",
        alamat: "Jl. Maju Mundur no.69",
        no_hp: "085244321095"
    },
    {
        _id: "raden",
        nama: "Kanjeng Raden",
        alamat: "Jl. Keraton no.99",
        no_hp: "082134579923"
    },
    {
        _id: "angela",
        nama: "Novi Angela",
        alamat: "Jl. Mawar no.46",
        no_hp: "08906783211"
    }
]);

// Insert document pegawai
db.pegawai.insertMany([
    {
        _id: "bp",
        nama: "Budi Perkasa",
    },
    {
        _id: "pa",
        nama: "Putri Ayu",
    },
    {
        _id: "ad",
        nama: "Ahmad Dodi",
    },
    {
        _id: "am",
        nama: "Awal Mulyadi",
    }
]);

// Insert document jenis_barang
db.jenis_barang.insertMany([
    {
        _id: 1,
        nama: "Baju Kaos",
        tarif: new NumberLong(1000),
        kategori: "small"
    },
    {
        _id: 2,
        nama: "Jaket/Kemeja/Sweater",
        tarif: new NumberLong(2000),
        kategori: "medium"
    },
    {
        _id: 3,
        nama: "Celana Pendek",
        tarif: new NumberLong(1000),
        kategori: "small"
    },
    {
        _id: 4,
        nama: "Celana Panjang(jeans/kain)",
        tarif: new NumberLong(2000),
        kategori: "medium"
    },
    {
        _id: 5,
        nama: "Selimut/Gorden",
        tarif: new NumberLong(3000),
        kategori: "big"
    }
]);

// Insert document orders
db.orders.insertMany([
    {
        _id: new ObjectId(),
        customers_id: "kenedy",
        total: new NumberLong(15000),
        items: [
            {
                jenis_barang_id: 1,
                tarif: new NumberLong(1000),
                jumlah: new NumberInt(10)
            },
            {
                jenis_barang_id: 3,
                tarif: new NumberLong(1000),
                jumlah: new NumberInt(5)
            }
        ]
    },
    {
        _id: new ObjectId(),
        customers_id: "martha",
        total: new NumberLong(16000),
        items: [
            {
                jenis_barang_id: 1,
                tarif: new NumberLong(1000),
                jumlah: new NumberInt(5)
            },
            {
                jenis_barang_id: 3,
                tarif: new NumberLong(1000),
                jumlah: new NumberInt(5)
            },
            {
                jenis_barang_id: 2,
                tarif: new NumberLong(2000),
                jumlah: new NumberInt(3)
            }
        ]
    },
    {
        _id: new ObjectId(),
        customers_id: "kahfa",
        total: new NumberLong(20000),
        items: [
            {
                jenis_barang_id: 1,
                tarif: new NumberLong(1000),
                jumlah: new NumberInt(10)
            },
            {
                jenis_barang_id: 4,
                tarif: new NumberLong(2000),
                jumlah: new NumberInt(5)
            }
        ]
    },
    {
        _id: new ObjectId(),
        customers_id: "raden",
        total: new NumberLong(18000),
        items: [
            {
                jenis_barang_id: 1,
                tarif: new NumberLong(1000),
                jumlah: new NumberInt(12)
            },
            {
                jenis_barang_id: 4,
                tarif: new NumberLong(2000),
                jumlah: new NumberInt(3)
            }
        ]
    },
    {
        _id: new ObjectId(),
        customers_id: "angela",
        total: new NumberLong(20000),
        items: [
            {
                jenis_barang_id: 1,
                tarif: new NumberLong(1000),
                jumlah: new NumberInt(8)
            },
            {
                jenis_barang_id: 4,
                tarif: new NumberLong(2000),
                jumlah: new NumberInt(4)
            },
            {
                jenis_barang_id: 2,
                tarif: new NumberLong(2000),
                jumlah: new NumberInt(2)
            }
        ]
    }
])
