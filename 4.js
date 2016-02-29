var myhour;
var myminute;
var mysecond;
var timeNum;
var ctx;
var num;

setInterval('print()',500);


function print(){
	var mytime = new Date();
	myhour = mytime.getHours();
	myminute = mytime.getMinutes();
	mysecond = mytime.getSeconds();

	timeNum = getNum(myhour,myminute,mysecond);
	ctx = set();
	num = digit;
	// returnNum = returnNum(timeNum);


	drawTime(timeNum,num);
}

function set(){
	var canvas = document.getElementById("canvas");
	canvas.width = 1024;
	canvas.height = 800;

	context = canvas.getContext("2d");

	return context;
}


function getNum(hour,min,second){
	var time= new Array();

	time[0] = Math.floor(hour/10);
	time[1] = hour%10;
	time[2] = Math.floor(min/10);
	time[3] = min%10;
	time[4] = Math.floor(second/10);
	time[5] = second%10;

	return time;
}

/*function returnNum(arr){
	var num =new Array();

	for(var i=0; i<6; i++){
		num[i] = digit[arr[i]];
	}

	return num;
}*/

function draw(x,y,ctx){
	ctx.beginPath();
	ctx.arc(x,y,4,0,Math.PI*2)
	ctx.closePath();

	ctx.fillStyle= "#f00";
	ctx.fill();
}


function drawNum(num,nums,y){
	for(var i=0; i<num[nums].length;i++)
	{
		for(var j=0; j<num[nums][0].length;j++){
			if(num[nums][i][j]==1){
				draw(j*10+4+y,i*10+4,ctx);
			}
		}
	}
}

function drawTime(time,num){
	var j=0;
	for(var i=0; i<6; i++){
		drawNum(num,time[i],j*100);
		j++;
		if(i==1||i==3){
			drawNum(num,10,j*100);
			j++;
		}
	}
}
