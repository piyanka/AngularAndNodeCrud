var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var corsOptions = {
    origin : 'http://localhost:4201'
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({etended: true}));

// mongo db connection establishement

const db = require('./models');
db.mongoose.connect(db.url,{
      useNewUrlParser: true,
      useUnifiedTopology: true
}).then(() => {
    console.log("connected to database");
}).catch(err => {
    console.log("err to connected database",err);
    // it is used for process restart again without exit the process 
    process.exit();
})

require("./routes/student.routes")(app);

const PORT = process.env.PORT || 8080
app.listen(PORT,function(){
    console.log("server is running on port no",PORT);
})

