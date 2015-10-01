$(document).ready(function(){
    var screenHeight = $(window).height();
    
    $("body").css("height",screenHeight);
    var padding = ((screenHeight/2)-64)/2;
    $("#top-left","#top-right","#bottom-left","#bottom-right").css("padding-top",padding)
    $("#top-left","#top-right","#bottom-left","#bottom-right").css("padding-bottom",padding)
    console.log(padding);
    
    function displayTime(tZone,screenpos,timeType){
        var amPm = "am";
        var tZoneName;
        var currentTime = new Date();
        var hours = currentTime.getHours();
        
        tZoneName = "Eastern"
        switch( tZone ){
            case "pst":
                hours = hours-3;
                break;
            case "cen":
                hours = hours-1;
                break;
            case "mnt":
                hours = hours-2;
                break;
        }
        
        if (hours >= 12 && timeType = "24H") {
            hours = hours - 12;
            amPm  = "pm"
        }
        var minutes = currentTime.getMinutes();
        if (minutes < 10) minutes = "0"+minutes;
        var seconds = currentTime.getSeconds();
        if (seconds < 10) seconds = "0"+seconds;
        
        if (timeType = "12H") {
             $(screenpos).html("Eastern Std Time<br>"+hours+":"+minutes+":"+seconds+amPm);  
        }
        else{
             $(screenpos).html("Eastern Std Time<br>"+hours+":"+minutes+":"+seconds);  
        }

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