# lamp
智能电灯

安装在树梅派上

配合nodegpio使用


启动：

node server.js


客户端：

让gpio1高点平

coap://localhost/gpio_1/on

让gpio1低电平

coap://localhost/gpio_1/off

客户端测试：

node client.js
