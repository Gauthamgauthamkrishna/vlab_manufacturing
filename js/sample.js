function animatearrow()
{
     if (document.getElementById('arrow1').style.visibility=="hidden")
         document.getElementById('arrow1').style.visibility="visible";
     else
         document.getElementById('arrow1').style.visibility="hidden";
}


//animate arrow at position
function animateArrowATPosition(left,top,degg)
{
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:"+left+"px; top: "+top+"px; height: 30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate("+degg+"deg)";
	 // Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate("+degg+"deg)";
	 // Standard syntax
	document.getElementById("arrow1").style.transform = "rotate("+degg+"deg)";
}

//stop blinking arrow
function myStopFunction()
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}


//function to move to next canvas
function navNext()
{
	for(temp=0;temp<=3;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	magic();
}

//magic function for animation in each canvas
function magic() {
    if(simsubscreennum == 1) {
        //Write code for canvas 1 animations
        myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
        animateArrowATPosition(160,350,-90);//specify the left top and deg of arrow
        document.getElementById("bucket").onclick = function() {
            document.getElementById("bucket").onclick = " "//To stop further click on pattern
            myStopFunction();//stops blinking arrow
            document.getElementById("bucket").style.animation = "movePattern 1.2s ease-out forwards ";//Since it runs for 1.2s
            setTimeout(function() {
                document.getElementById("nextButton").style.visibility = "visible";
            },1250);
        }
    } else if(simsubscreennum == 2) {
      document.getElementById("bucket").style.visibility = "hidden";
      myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
      animateArrowATPosition(210,250,-90);//specify the left top and deg of arrow
      document.getElementById("sand").onclick = function() {
        document.getElementById("sand").onclick =" "
        myStopFunction();
        document.getElementById("sand").style.animation = "moveSand 1.2s ease-out forwards";
        setTimeout(function() {
            document.getElementById("nextButton").style.visibility = "visible";
        },1250);
      }    
    }
  }
