var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

function showCurrentTime()
{
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours
  	if (hours >= noon)
  	{
  		meridian = "PM";
  	}

  	if (hours > noon)
  	{
  		hours = hours - 12;
  	}
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 

    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};


function updateClock() 
{
  	var time = new Date().getHours();
  	var messageText;
    var image = "cat";

  	var timeEventJS = document.getElementById("timeEvent");
  	var lolcatImageJS = document.getElementById('lolcatImage');
  
  	if (time == partytime)
  	{
      image = "cats-parting.jpeg";
    	messageText = "Let's party!";
  	}
  	else if (time == wakeuptime)
  	{
      image = "cat";
    	messageText = "Wake up!";
  	}
    else if (time == lunchtime)
  	{
      image = "cat-eating";
    	messageText = "Let's have some lunch!";
  	}
  	else if (time == naptime)
  	{
      image = "cat-sleeping";
    	messageText = "Sleep tight!";
  	}
  	else if (time < noon)
  	{
      image = "cat";
    	messageText = "Good morning!";
  	}
  	else if (time >= evening)
  	{
      image = "cat";
    	messageText = "Good evening!";
  	}
  	else
  	{  
      image = "cat";
    	messageText = "Good afternoon!";
  	}

  	console.log(messageText); 
  	timeEventJS.innerText = messageText;
  	lolcatImage.src = image;
  
  	showCurrentTime();
};
updateClock();

var oneSecond = 1000;
setInterval( updateClock, oneSecond);


var partyButton = document.getElementById("partyTimeButton");

function partyEvent()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 


var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

function wakeUpEvent()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

function lunchEvent()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);

var napTimeSelector =  document.getElementById("napTimeSelector");

function napEvent()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent); 