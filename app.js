const express = require('express');
const app = express();

// var routes = require("./routes")
// var jasonParser = require("body-parser").json;
// app.use(jasonParser());
// app.use("/getData",routes)

app.set('view engine', 'pug');
app.get('/', (req, res)=>{
	res.render('index');
});

app.use("/getData", function(req, res, next){
	res.send("Lack of Parameter");
	next();
});



app.listen(3000);
