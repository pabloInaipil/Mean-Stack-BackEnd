const mongoose = require("mongoose");

mongoose
    .connect("mongodb://Localhost/mean-employees", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        userFindAndModify: false

    })
    .then((db) => console.log("Db is connected"))
    .catch((err) => console.error(err));