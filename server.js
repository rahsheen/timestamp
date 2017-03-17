var express = require("express")
var app = express();

app.get('/:date', function(req, res) {
    var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

    var data = req.params.date

    var d = new Date(/[a-z]/i.test(data) ? data : +data)
    var natDate = monthNames[d.getMonth()] +" "+ d.getDay()+", " + d.getFullYear()

    var ret = {
        "unix": d.getTime(),
        "natural": natDate 
    }

    res.end(JSON.stringify(ret));
})

app.listen(8080)
