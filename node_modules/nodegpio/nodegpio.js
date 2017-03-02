var fs=require('fs');
var path='/sys/class/gpio/';
module.exports={
	/*
	 numberArray:
	 [
	 {number:21,type:'out'},
	 {number:16,type:'in'}
	 ]
	 */
	numberArray:[],
	set:function(numberArray,callback){
		this.numberArray=numberArray;
		numberArray.map(function(one,index,arr){
			fs.writeFile(path+'export',one.number,function(){
				fs.writeFile(path+'gpio'+one.number+'/direction',one.type,function(){
				});
			});
		});
		setTimeout(function(){
			if(typeof(callback)==='function'){
				callback();
			}
		},1000);
	},
	in:function(number,callback){
		fs.readFile(path+'gpio'+number+'/value',function(err, data){
			if(err){
				console.log("读取文件fail " + err);
			}else{
				// 读取成功时
				var value=parseInt(data);
				callback(value);
			}
		});
	},
	out:function(number,value,callback){
		fs.writeFile(path+'gpio'+number+'/value',value,function(){
			if(typeof(callback)==='function'){
				callback();
			}
		});
	},
	clearall:function(callback){
		var numberArray=this.numberArray;
		numberArray.map(function(one,index,arr){
			fs.writeFile(path+'unexport',number,function(){

			});
		});

	},
	//以下为兼容1.0写法。不提倡再使用。后续版本可能会移除。
	write:function(number,type,callback){
		fs.writeFile(path+'export',number,function(){
			fs.writeFile(path+'gpio'+number+'/direction','out',function(){
				fs.writeFile(path+'gpio'+number+'/value',type,function(){
					if(typeof(callback)==='function'){
						callback();
					}
				});
			});
		});
	},
	high:function(number,callback){
		this.write(number,1,callback);
	},
	low:function(number,callback){
		this.write(number,0,callback);
	},clear:function(number,callback){
		fs.writeFile(path+'unexport',number,function(){
			if(typeof(callback)==='function'){
				callback();
			}
		});
	}
}