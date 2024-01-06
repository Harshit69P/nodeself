const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://HarshitGupta:M04encTg2XESFXRM@nodejs.yiozcp3.mongodb.net/');

mongoose.connection.on('error',err=>{
    console.log('connection failed')
})

mongoose.connection.on('connected',connected=>{
    console.log('connected with database successfully')
})