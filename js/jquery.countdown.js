/*!
	时间插件  v1.0

	依赖jquery
	http://jquery.com/

	Date: 2017-03-02 14:27

	Author: pine
*/
(function(){
	jQuery.fn.extend({
		countDown: function(endtime,fn){
			var 
				_jquery = this,
				timer = null,
				endtime = new Date(endtime);

			var main = {
				init: function(){
					this.show();
					this.interval();
				},
				interval: function(){
					var _this = this;
					timer = setInterval(function(){
						//时间到期处理
						if(new Date() > endtime) {
							clearInterval(timer);
							//调用用户的回调函数，并使用call改变回调函数内部this指向
							fn && fn.call(_jquery[0]);
							return;
						}
						_this.show();
					},1000);
				},
				//获取剩余的时间  天 小时 分钟 秒
				getDate: function(){
					var 
						now = new Date(),
						time = endtime - now,
						arr = [];
					
					arr[0] = parseInt( time/(24*60*60*1000) );
					arr[1] = parseInt( time/(60*60*1000) ) % 24;
					arr[2] = parseInt( time/(60*1000))  % 60;
					arr[3] = parseInt(time/1000)%60;

					arr.forEach(function(v,i){
						if(v < 10){
							arr[i] = '0' + v;
						}
					});
					return arr;
				},
				show: function(){
					//获取时间信息
					var time = this.getDate();
					var setting = [' 天 ',' : ',' : ',''];
					
					var info = '';
					for(var i=0,len=setting.length; i<len; i++){
						info += time[i]+setting[i];
					}
					//填充到元素中
					_jquery.html(info);
				}
			};
			main.init();

			return _jquery;
		}
	});
})();