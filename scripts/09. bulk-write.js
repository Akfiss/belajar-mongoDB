// Insert dan Update sekaligus
db.customers.bulkWrite([
    {
        insertOne: {
            document: {
                _id: "budi",
                nama: "Budi"
            }
        }
    },
    {
        insertOne: {
            document: {
                _id: "badang",
                nama: "Badang"
            }
        }
    },
    {
        updateMany: {
            filter: {
                _id: {
                    $in: ["budi", "badang", "bahagia"]
                }
            },
            update: {
                $set: {
                    nama_lengkap: "Budi Badang Bahagia"
                }
            }
        }
    }
])
