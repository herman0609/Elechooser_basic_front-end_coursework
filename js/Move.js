function Move(obj,attr,speed,target,endFn){
		
		speed=parseInt(css(obj,attr))>target?-speed:speed;

		clearInterval(obj.timer)
		obj.timer=setInterval(function(){
			var startDir=css(obj,attr);
			var nowDir=parseInt(startDir)+speed;

				if(nowDir>=target && speed>0){nowDir=target;} 
				if(nowDir<target && speed<0){nowDir=target;}

				obj.style[attr]=nowDir+"px"; 

				if(nowDir==target){ clearInterval(obj.timer);

									endFn && endFn();
				} 

		},30);
}


function css(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
}