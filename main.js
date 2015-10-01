$(document).ready(function(){
    var screenHeight = $(window).height();
    
    $("body").css("height",screenHeight);
    var padding = ((screenHeight/2)-64)/2;
    $("#top-left","#top-right","#bottom-left","#bottom-right").css("padding-top",padding)
    $("#top-left","#top-right","#bottom-left","#bottom-right").css("padding-bottom",padding)
    console.log(padding);
    
    function displayTimeTL(){
        var amPm = "am";
        var currentTime = new Date();
        var hours = currentTime.getHours();
        if (hours > 12) {
            hours = hours - 12;
            amPm  = "pm"
        }
        var minutes = currentTime.getMinutes();
        if (minutes < 10) minutes = "0"+minutes;
        var seconds = currentTime.getSeconds();
        if (seconds < 10) seconds = "0"+seconds;
        
        $("#top-left").html("Eastern Std Time<br>"+hours+":"+minutes+":"+seconds+amPm);
    }
    function displayTimeTR(){
        var amPm = "am";
        var currentTime = new Date();
        var hours = currentTime.getHours();
        // central time
        hours = hours - 1;
        
        if (hours > 12) {
            hours = hours - 12;
            amPm  = "pm"
        }
        var minutes = currentTime.getMinutes();
        if (minutes < 10) minutes = "0"+minutes;
        var seconds = currentTime.getSeconds();
        if (seconds < 10) seconds = "0"+seconds;
        
        $("#top-right").html("Central Time<br>"+hours+":"+minutes+":"+seconds+amPm);
    }
    
      function displayTimeBR(){
        var amPm = "am";
        var currentTime = new Date();
        var hours = currentTime.getHours();
        // central time
        hours = hours - 2;
        
        if (hours > 12) {
            hours = hours - 12;
            amPm  = "pm"
        }
        var minutes = currentTime.getMinutes();
        if (minutes < 10) minutes = "0"+minutes;
        var seconds = currentTime.getSeconds();
        if (seconds < 10) seconds = "0"+seconds;
        
        $("#bottom-right").html("Mountain Time<br>"+hours+":"+minutes+":"+seconds+amPm);
    }
         function displayTimeBL(){
        var amPm = "am";
        var currentTime = new Date();
        var hours = currentTime.getHours();
        // central time
        hours = hours - 3;
        
        if (hours > 12) {
            hours = hours - 12;
            amPm  = "pm"
        }
        var minutes = currentTime.getMinutes();
        if (minutes < 10) minutes = "0"+minutes;
        var seconds = currentTime.getSeconds();
        if (seconds < 10) seconds = "0"+seconds;
        
        $("#bottom-left").html("Pacific Time<br>"+hours+":"+minutes+":"+seconds+amPm);
    }
    setInterval(function(){
         displayTimeTL();
    }, 200);
    
    setInterval(function(){
         displayTimeTR();
    }, 200);
     setInterval(function(){
         displayTimeBR();
    }, 200);
     setInterval(function(){
         displayTimeBL();
    }, 200);
   
});