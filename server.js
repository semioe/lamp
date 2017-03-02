const coap = require('coap');
var server = coap.createServer();
var nodegpio = require('nodegpio');
server.on('request', function(req, res) {
    if (req.headers['Accept'] != 'application/json') {
        var error_json = JSON.stringify({
            error: "not json"
        });
        res.end(error_json);
        return false;
    }
    var gpio_number = req.url.split('/')[1];
    var gpio_status = req.url.split('/')[2];
    res.setOption('Content-Format', 'application/json');
    var json = JSON.stringify({
        gpio_number: gpio_number,
        gpio_status: gpio_status
    });
    if(gpio_status===1||gpio_status==='on'||gpio_status==='ON'||gpio_status==='On'){
      console.log('点亮',gpio_number);
      nodegpio.high(gpio_number);
    }else{
      console.log('熄灭',gpio_number);
      nodegpio.low(gpio_number);
    }
    res.end(json);
    //res.end('Hello ' + req.url.split('/')[1] + '\n');
    //console.log(req);
    //console.log('');
    console.log(json);
})

server.listen(function() {
    console.log('server started')
})
