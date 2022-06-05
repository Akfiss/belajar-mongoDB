// Insert anonim document
db.customers.insertOne({
    _id: "anonim",
    full_name: "Anonim"
});

// Delete document by _id
db.customers.deleteOne({
    _id: "anonim"
});

// Insert many anonim documents
db.customers.insertMany([
    {
        _id: "anonim1",
       nama: "Anonim1"
    },
    {
        _id: "anonim2",
        nama: "Anonim2"
    },
    {
        _id: "anonim3",
        nama: "Anonim3"
    }
]);

// Delete many documents
db.customers.deleteMany({
    _id: {
        $regex: "anonim"
    }
})
