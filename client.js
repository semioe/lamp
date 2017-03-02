const coap = require('coap');
const BufferList = require('bl');

var req = coap.request('coap://localhost/gpio_1/on');
req.setHeader("Accept", "application/json");
req.on('response', function(res) {
    res.pipe(BufferList(function(err, data) {
        var json = JSON.parse(data);
        console.log(json);
        process.exit(0);
    }));
})

req.end()
