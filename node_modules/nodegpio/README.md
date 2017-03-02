# nodegpio
#use:
#npm install nodegpio


example 1:
```
var nodegpio=require('nodegpio');
var i=0;
setInterval(function(){
        if(i===0){
                i=1;
                nodegpio.high(21,1);
        }else{
                i=0;
                nodegpio.low(21,1);
        }
},1000);
```


example 2:
```
var i=0;
var ii=0;
setInterval(function(){
        ii+=1;
        if(ii<10){
                if(i===0){
                        i=1;
                        nodegpio.high(21,1);
                }else{
                        i=0;
                        nodegpio.low(21,1);
                }
        }else if(ii===10){
                nodegpio.clear(21,function(){
                        console.log('turn off');
                });
        }
},1000);
```

example 3:

```
var nodegpio=require('nodegpio');
nodegpio.set([
		{number:21,type:'out'},
		{number:12,type:'in'}
	],function(){
        setInterval(function(){
            nodegpio.in(12,function(value){
                if(value===0){
                    //console.log('ok');
                    nodegpio.out(21,1);
                }else{
                    nodegpio.out(21,0);
                }
            });
        },500);
});
```


##这是一个node.js版本的gpio库。适用于RASPBIAN操作系统。

##为什么写这个库？因为我用其他库都没操作成功，所以，只好自己写一个了。


如何点亮一个LED？

```
var nodegpio=require('nodegpio');
nodegpio.set([
        {number:21,type:'out'},
        {number:12,type:'in'}
    ],function(){
    nodegpio.out(21,1);
});
```

##如果有更多疑问，请私信我。新浪微博 @codetyphon
##http://www.weibo.com/codetyphon
##http://www.codetyphon.com
