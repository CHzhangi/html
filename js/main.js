window.onload=function(){
//获取标签元素
    function $(idname)
    {
        return document.getElementById(idname);
    }
    //全局变量
    var game=$("game"), gamebegin = $("Begin"),gamestart=$("gamestart"),gameenter=$("gameenter"),
    myplane=$("myplane"),bullets=$("bullet"),enemy=$("oppoentplane");
    var delta_x=0;//水平方向
    var delta_y=0;//竖直方向
    var speed=40;//控制move函数出现的速率
    var ifenter=false;//是否成功进入了游戏界面
    var key=[37,38,39,40,65,68,83,87];

    function getStyle(obj,attr){
        if(obj.currentStyle){
            return obj.currentStyle[attr];
        }else{
            return getComputedStyle(obj)[attr];
        }
    }

    class Student {
        // 构造器：当用户new Student对象的时候：new出来的对象会自动调用的方法
         constructor(stuNo, stuName, stuGender, stuAge) {
             // 创建属性：this永远代表对象
             this.stuNo = stuNo;
             this.stuName = stuName;
             this.stuGender = stuGender;
             this.stuAge = stuAge;
         }
         // 其他方法：方法名 + () + {}
         say() {
             console.log(this.stuName + '很美');
         }
     }
     let s1 = new Student('001', '希希子', '女', 'secret'); 
    //调用方法
    s1.say();
    //登录游戏 按键 press
    gamestart.firstElementChild.onclick=function(){
        gamebegin.style.display="None";
        gameenter.style.display="block";
        ifenter=true;
    }

    //增加监听事件keydown，并记录对应的delta_x和delta_y
    document.addEventListener('keydown',(e)=>{
        if(!ifenter){
            return false;
        }
        var ev = e || window.event;
        switch(ev.keyCode){
            case 37://左
            delta_x=-1;
            break;
            case 65://左
            delta_x=-1;
            break;
            case 38://上
            delta_y=-1;
            break;
            case 87://上
            delta_y=-1;
            break;
            case 39://右
            delta_x=1;
            break;
            case 68://右
            delta_x=1;
            break;
            case 40://下
            delta_y=1;
            break;
            case 83://下
            delta_y=1;
            break;
            default:
            break;
        }
    },false);
    var key
    //增加监听事件keyup,delta_x和delta_y归0
    document.addEventListener('keyup',(e)=>{
        var ev = e || window.event;
        if(ev.keyCode==37||ev.keyCode==65||ev.keyCode==39||ev.keyCode==68)
        {
            delta_x=0;
        }
        if(ev.keyCode==38||ev.keyCode==87||ev.keyCode==40||ev.keyCode==83)
        {
            delta_y=0;
        }
    },false);
    
    //移动函数 每speed ms自动执行一次
    var timer = window.setInterval(()=>{
        var unit = 10;
        var left = window.getComputedStyle(myplane,null).left;
        var top = window.getComputedStyle(myplane,null).top;
        left=parseInt(left)+delta_x*unit;
        top=parseInt(top)+delta_y*unit;
        //防止越界
        if(left>=0&&left<=1120){		
        myplane.style.left=left+'px';
        }
        if(top>=0&&top<=700){
        myplane.style.top=top+'px';
        }
    },speed);
    /*document.onkeydown=function(e)
    {
        if(!ifenter){
            return false;
        }
        var e=e||window.e;
        var key = (window.Event) ? e.which : e.keyCode;
        //console.log(keycode);       
        myplanemove(key);
        clearInterval(keyTimer);
        keyTimer = setInterval(function(){
            myplanemove(key);
        }, 50)
        return false;
    }
    window.onkeyup = function(e) {
        if(!ifenter){
            return false;
        }
        var keyCode = e.keyCode;
        if (keyCode == 37 || keyCode == 38 || keyCode == 39 || keyCode == 40) {
            clearInterval(keyTimer);
        }
    }

    var w_game=getStyle(game,"width");//获取界面大小 宽度 高度 防止飞机溢出去
    var h_game=getStyle(game,"height");
    console.log(w_game);
    var keyTimer = null;
    function myplanemove(key)
    {
        console.log("left:"+myplane.style.left);
        console.log("top:"+myplane.style.top);
        switch(key) {
            case 37://左          
                myplane.style.left=myplane.offsetLeft-10+'px';
                break;
            case 38://上
                myplane.style.top=myplane.offsetTop-10+'px';
                break;
            case 39://右
                myplane.style.left=myplane.offsetLeft+10+'px';
                break;
            case 40://下
                myplane.style.top=myplane.offsetTop+10+'px';
                break;

    }

    }*/
}