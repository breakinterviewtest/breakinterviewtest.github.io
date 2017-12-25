var count=0;
var answer=new Array(5);
answer=[0,0,0,0,0];
var problem = new Array(5);
	for (var i = 0; i < 5; i++) {
  	problem[i] = new Array(6);
	}
	problem[0]=["___________ made us much disappointed.","Not Frank coming back","Frank not coming back","Not Frank come back","Frank not to come back"];
	problem[1]=["The naughty boy stood beside his mother, __________ a face at her.","made","to make","make","making"];
	problem[2]=["What movies do you like","dhoom","sultan","dangal","ishq","champak"];
	problem[3]=["What books do you like","maths","phy","chem","scie","program"];
	problem[4]=["What city do you like","lko","jansi","kanpur","kolaa","orai"];


function window_on_load(){
   var div = document.getElementById("question");  
            if (div.style.display !== "none") {  
                div.style.display = "none";  
            }  
            else {  
                div.style.display = "block";  
            }  
			document.getElementById("hide").disabled = true;
}
function submit(){
	//var opt = document.querySelector('input[name = "optradio"]:checked').value;
	//answer[count]=opt;
	for(var i=0;i<5;i++)
	{
		if(answer[i]!=0)
		console.log(i+"->"+answer[i]);
		else
			console.log(i+1+"-> Not selected");
	}
	countDownTimer=0;
	document.getElementById("timer").innerHTML = "00 : 00";
	document.getElementById("show").disabled = true;
	document.getElementById("notice").style.display="block";
	document.getElementById("notice").innerHTML="<center><h1>Test completed successfully</h1></center>";
	var div = document.getElementById("question");  
            if (div.style.display !== "none") {  
                div.style.display = "none";  
            }  
            else {  
                div.style.display = "block";  
            } 
            document.getElementById("hide").disabled = true;
}

function start(){
	var x=count;
	
	for(var y=0;y<6;y++)
	{
		document.getElementById("quesno").innerHTML =x+1;
	  	document.getElementById("ans"+y).innerHTML =problem[x][y];
	}
	document.querySelector('input[name = "optradio"]').checked=false;
	document.getElementById("notice").style.display="none";
	document.getElementById("hide").disabled = false;
	document.getElementById("show").disabled = true;
}

function sub(){
	var opt = document.querySelector('input[name = "optradio"]:checked').value;
	answer[count]=opt;
	document.getElementById("anssub").innerHTML="Submitted";
}
function previous()
{
	if(count>0)
	{
		var x=--count;
		for(var y=0;y<6;y++)
		{
			document.getElementById("quesno").innerHTML =x+1;
	  		document.getElementById("ans"+y).innerHTML =problem[x][y];
		}
		rad();
		if(answer[count]!=0)
		document.getElementById("anssub").innerHTML="Submitted";
		else
		document.getElementById("anssub").innerHTML="Submit Answer";			
		//document.getElementById("start").disabled = true;}
	}
}
function change(){
document.getElementById("anssub").innerHTML="Submit Answer";	
}
function rad()
{
	if(answer[count]==0)
			document.querySelector('input[name = "optradio"]:checked').checked=false;
	else
		document.getElementById("radio"+answer[count]).checked=true;
}
function next()
{
	if(count<4)
	{
		var x=++count;
		for(var y=0;y<6;y++)
		{
			document.getElementById("quesno").innerHTML =x+1;
	  		document.getElementById("ans"+y).innerHTML =problem[x][y];
		}
		rad();

		if(answer[count]!=0)
		document.getElementById("anssub").innerHTML="submitted";
		else
		document.getElementById("anssub").innerHTML="submit answer";
	}
}

$(document).ready(function(){
    $("#hide").click(function(){
        $("#question").hide();
    });
    $("#show").click(function(){
        $("#question").show();
    });
});

var countDownTime = 3600;
	function countDownTimer() {
		var hours = parseInt( countDownTime / 3600 ) % 24;
		var minutes = parseInt( countDownTime / 60 ) % 60;
		var seconds = countDownTime % 60;
		var result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);
		document.getElementById("timer").innerHTML = result;
   		if(countDownTime == 0 ){ 
   			submit();
   			document.getElementById("timer").innerHTML = "00:00";
   			
   		}
   		countDownTime = countDownTime - 1;
   		setTimeout(function(){ countDownTimer() }, 1000);
	}
	countDownTimer();
/*function timer(){
var countDownDate = new Date("Dec 23, 2017 16:45:25").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = minutes +":" + seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}*/
/*function timer()
{	
	var m=0;
	var today = new Date("");
    var s = today.getSeconds();
    for(m=0;m<60;m++)
    {
    	for(s=0;s<60;s++)
    	document.getElementById('timer').innerHTML = m+":"+s;		
    }
    document.getElementById('timer').innerHTML =
    m+":"+s;
    var t = setTimeout(timer, 1000);
}
*/
/*function mysleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function initTimer(){
	setTimeout(function(){
		timer();
	},0);
}
	function timer()
	{
		var s=0;
		var m=0;
		for(m=0;m<60;m++)
		{
			for(s=0;s<60;s++)
			{	
				//console.log(m+":"+s);
				mysleep(1000);
				// setTimeout(function(){
					document.getElementById("timer").innerHTML = m +":" + s;
					console.log(m +":" + s)

				// },10000)
			}	
		}
	}
*/