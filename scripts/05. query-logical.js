// select * from jenis_barang where kategori not in ('small', 'medium')
db.jenis_barang.find({
    kategori: {
        $not: {
            $in: ["small", "medium"]
        }
    }
});

// select * from jenis_barang where tarif between 1000 and 2000 and kategori != 'small'
db.jenis_barang.find({
    $and: [
        {
            tarif: {
                $gte: 1000,
                $lte: 2000
            }
        },
        {
            category: {
                $ne: 'small'
            }
        }
    ]
});
