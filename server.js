const express = require("express")
const moment = require('moment')
const app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.status(200).send("Sample Usage: /[unix timestamp or date]")
    })

app.get('/:date', function(req, res) {

    const data = req.params.date
    var d;

    if(/^[0-9]+$/.test(data)) {
        d = moment.utc(data, 'X')
    } else {
        d = moment.utc(data, 'MMMM DD, YYYY')
    }

    if(d.isValid()) {
        res.status(200).send({
            original: data,
            unix: d.format('X'),
            natural: d.format('MMMM DD, YYYY')
        });
    } else {
        res.status(400).send("Date format error.")
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
