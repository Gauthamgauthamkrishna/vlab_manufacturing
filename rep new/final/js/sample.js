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
            myStopFunction();//stops blinking arrow
            //you have below mentioned bucketMove css, next is durations, 3rd one: repeat value, 4th can be: linear, forwards, ease-in, ease-out can refer w3schools for available options
            document.getElementById('bucket').style.visibility="hidden";
	          document.getElementById('bucket1').style.visibility="visible";
            // document.getElementById("bucket").style.animation = "bucketMove 1.2s 1 linear";//Since it runs for 1.2s
            //Next you have to write setTimeout function: what to run after 1.2s animation:
            //setTimeout duration is times*repeat if repeat is > 1

            // setTimeout(function(){
            //     document.getElementById("bucket").style.visibility = "hidden";
            //
                // myInt = setInterval(function(){ animatearrow(); }, 500);
                // animateArrowATPosition(480,350,-90);//specify the left top and deg of arrow

                // document.getElementById("bucket").onclick = function() {
                //     myStopFunction();//stops arrow blinking

                    // document.getElementById("bucket").style.animation = "bucketScale 2.5s 2 linear";

                    // setTimeout(function() {
                    //     document.getElementById("bucket").style.visibility = "visible";

                        // myInt = setInterval(function(){ animatearrow(); }, 500);
                        // animateArrowATPosition(540,350,-90);//specify the left top and deg of arrow

                        // document.getElementById("bucket").onclick = function() {
                        //     myStopFunction();
                        //     document.getElementById("bucket").style.transformOrigin = "0% 50%";
                        //     document.getElementById("bucket").style.animation = "bucketRotate 1.2s linear"
                  setTimeout(function() {
                                document.getElementById("nextButton").style.visibility = "visible";
                            },250);


        }
    } else if(simsubscreennum == 2) {
      document.getElementById("bucket1").style.visibility = "hidden";
        myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
        animateArrowATPosition(210,250,-90);//specify the left top and deg of arrow
        document.getElementById("sand").onclick = function() {
          myStopFunction();//stops blinking arrow
          document.getElementById('sand').style.visibility="hidden";
          document.getElementById('sand1').style.visibility="visible";
          document.getElementById("sand1").style.transformOrigin = "0% 50%";
          document.getElementById("sand1").style.animation = "bucketRotate 1.2s forwards  "
          setTimeout(function() {
              document.getElementById("sandfill").style.visibility = "visible";
              document.getElementById("sandup").style.visibility = "visible";
              document.getElementById("bucket3").style.visibility = "hidden";
                setTimeout(function() {
                  document.getElementById("sandfill").style.visibility = "hidden";
                  document.getElementById('sand1').style.visibility="hidden";

              setTimeout(function() {
                            document.getElementById("nextButton").style.visibility = "visible";
                        },1250);
            },1250)
       },1250)
     }

    }else if(simsubscreennum == 3) {
      document.getElementById("sand1").style.visibility = "hidden";
        document.getElementById("sandfill").style.visibility = "hidden";
        document.getElementById("sandup").style.visibility = "hidden";
      myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
      animateArrowATPosition(480,250,-90);//specify the left top and deg of arrow
      document.getElementById("tray1").onclick = function() {
           myStopFunction();//stops blinking arrow
           document.getElementById("tray1").style.transformOrigin = "0% 90%";
           document.getElementById("tray1").style.animation = "trayRotate 1.2s forwards "
           setTimeout(function() {
                         document.getElementById("tray1").style.visibility = "hidden";
                         document.getElementById('tray2').style.visibility="visible";
                         setTimeout(function() {
                                       document.getElementById("tray3").style.visibility = "visible";
                                       myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
                                       animateArrowATPosition(560,150,-90);//specify the left top and deg of arrow
                                       document.getElementById("tray3").onclick = function() {
                                        myStopFunction();//stops blinking arrow
                                       document.getElementById("tray3").style.visibility="hidden";
                                       document.getElementById("tray2").style.visibility="hidden";
                                       document.getElementById("tray4").style.visibility="visible";

                                      setTimeout(function() {
                                                    document.getElementById("nextButton").style.visibility = "visible";
                                    },750);
                                  }

                                },500);

                     },350);


            // document.getElementById('tray1').style.visibility="hidden";

      //   document.getElementById("sand1").style.transformOrigin = "0% 50%";
      //   document.getElementById("sand1").style.animation = "bucketRotate 1.2s forwards  "



    }

  }else if(simsubscreennum == 4) {

      document.getElementById("tray4").style.visibility="hidden";
      //Write code for canvas 1 animations
      myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
      animateArrowATPosition(160,350,-90);//specify the left top and deg of arrow
      document.getElementById("pat5").onclick = function() {
          myStopFunction();//stops blinking arrow
          //you have below mentioned bucketMove css, next is durations, 3rd one: repeat value, 4th can be: linear, forwards, ease-in, ease-out can refer w3schools for available options
          document.getElementById('pat5').style.visibility="hidden";
          document.getElementById('pat6').style.visibility="visible";
          setTimeout(function() {
                        document.getElementById("nextButton").style.visibility = "visible";
                    },250);


       }

    }else if(simsubscreennum == 5) {
      document.getElementById("tray5").style.visibility = "hidden";
      document.getElementById("pat6").style.visibility = "hidden";
      myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
      animateArrowATPosition(210,250,-90);//specify the left top and deg of arrow
      document.getElementById("sand5").onclick = function() {
        myStopFunction();//stops blinking arrow
        document.getElementById('sand5').style.visibility="hidden";
        document.getElementById('sand6').style.visibility="visible";
        document.getElementById("sand6").style.transformOrigin = "0% 50%";
        document.getElementById("sand6").style.animation = "bucketRotate 1.2s forwards  "
        setTimeout(function() {
            document.getElementById("sandfill1").style.visibility = "visible";
            document.getElementById("sandup1").style.visibility = "visible";
            document.getElementById("bucket5").style.visibility = "hidden";
              setTimeout(function() {
                document.getElementById("sandfill1").style.visibility = "hidden";
                document.getElementById('sand6').style.visibility="hidden";

            setTimeout(function() {
                          document.getElementById("nextButton").style.visibility = "visible";
                      },1250);
          },1250)
     },1250)



        // document.getElementById("nextButton").style.visibility = "hidden";
        // document.getElementById("scale").style.visibility = "hidden";

      }

    }else if(simsubscreennum == 6) {
         document.getElementById("sandup1").style.visibility = "hidden";
        document.getElementById("sand6").style.visibility = "hidden";
        document.getElementById("sandfill1").style.visibility = "hidden";
        document.getElementById("tray6").style.visibility = "hidden";
        document.getElementById("bucket5").style.visibility = "hidden";

      myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
      animateArrowATPosition(480,250,-90);//specify the left top and deg of arrow
      document.getElementById("tray7").onclick = function() {
           myStopFunction();//stops blinking arrow
           document.getElementById("tray9").style.visibility = "visible";
           document.getElementById("tray7").style.visibility = "hidden";
           document.getElementById("tray10").style.visibility = "visible";
           document.getElementById("tray10").style.transformOrigin = "0% 90%";
           document.getElementById("tray10").style.animation = "trayRotate 1.2s forwards "
           setTimeout(function() {
                         document.getElementById("tray10").style.visibility = "hidden";
                         document.getElementById('tray8').style.visibility="visible";


                                      setTimeout(function() {
                                                    document.getElementById("nextButton").style.visibility = "visible";
                                    },750);




                     },350);


            // document.getElementById('tray1').style.visibility="hidden";

      //   document.getElementById("sand1").style.transformOrigin = "0% 50%";
      //   document.getElementById("sand1").style.animation = "bucketRotate 1.2s forwards  "



    }

  }
}
