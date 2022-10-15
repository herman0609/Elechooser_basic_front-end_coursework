var oUl=document.getElementById("Tz_List");
var aLi=oUl.getElementsByTagName("li");
var liIndex=[0,1,3,4,6,7];
var date=new Date();
var hours=date.getHours();
var minutes=date.getMinutes();
var seconds=date.getSeconds();
var str=fullZero(hours,2)+""+fullZero(minutes,2)+""+fullZero(seconds,2);
init();
function init(){
    for(var i=0;i<liIndex.length;i++){
        var a=liIndex[i];
        aLi[a].getElementsByTagName("img")[0].src="../picture/"+str.charAt(i)+".png";
        aLi[a].getElementsByTagName("img")[0].index=str.charAt(i);
        play(aLi[a],i);
    }
}
function play(obj,index){
    var num=0;
    setInterval(function(){
        var date=new Date();
        var hours=date.getHours();
        var minutes=date.getMinutes();
        var seconds=date.getSeconds();
        var str2=fullZero(hours,2)+""+fullZero(minutes,2)+""+fullZero(seconds,2);
        var aImg=obj.getElementsByTagName("img");
        if(str2.charAt(index)!=aImg[num].index){
            aImg=obj.getElementsByTagName("img");
            Move(aImg[num],"top",10,-61);
            if(num==1){
                aImg[num-1].src="../picture/"+str2.charAt(index)+".png";
                aImg[num-1].index=str2.charAt(index);
                Move(aImg[num-1],"top",10,0,function(){
                    aImg[num].style.top="61px";
                    num--;
                });
            }else{
                aImg[num+1].src="../picture/"+str2.charAt(index)+".png";
                aImg[num+1].index=str2.charAt(index);
                Move(aImg[num+1],"top",10,0,function(){
                    aImg[num].style.top="61px";
                    num++;
                });
            }
        }
    },1000);
}
function fullZero(time,n){
    var str=time+"";
    while(str.length<n){
        str="0"+str;
    }
    return str;
}