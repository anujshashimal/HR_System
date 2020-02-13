const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/HR_DB", {

useNewUrlParser: true,
useCreateIndex: true,
useFindAndModify: false,
useUnifiedTopology: true
}).then(() => console.log("DB is Created!"))
.catch(err => console.log(err));

