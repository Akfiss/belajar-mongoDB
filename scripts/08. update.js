// update customers set alamat = "Jl. Kemenangan no.12" where _id = "kenedy"
db.customers.updateOne({
    _id: "kenedy"
},{
    $set: {
        alamat: "JL. Kemenangan no.12"
    }
});

// update customers set alamat = "Tidak diketahui" and no_hp = "Tidak diketahui" where _id = "kahfa"
db.customers.updateMany({
    _id: "kahfa"
},{
    $set: {
        alamat: "Tidak diketahui",
        no_hp: "Tidak diketahui"
    }
});

// replace customers with id kahfa
db.customers.replaceOne({
    _id: "kahfa"
},{
    nama: "Bagus Kahfi",
    alamat: "Jl. Nin aja dulu no.99",
    no_hp: 082355467890,
});
