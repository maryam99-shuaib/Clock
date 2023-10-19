var clockType = 24;
function CurrentTime(){
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    // console.log(seconds.toString().length)
    // test leenght for seconds
    if (seconds.toString().length === 1) {
        seconds = "0" + seconds;
    } 
    if (minutes.toString().length === 1) {
        minutes = "0" + minutes;
    } 
    if (hours > 12 && clockType === 12 ){
        hours = hours - 12
    }
    if (hours.toString().length === 1) {
        hours = "0" + hours;
    } 
    document.getElementById("time_hours").innerHTML = hours; 
    document.getElementById("time_minutes").innerHTML = minutes; 
    document.getElementById("time_seconds").innerHTML = seconds; 
}
setInterval(CurrentTime , 1000);
function Switchbtn(){
    
}
function SwitchClockType(){
    if (clockType === 24) {
        clockType = 12;
        if(){
            
        }
        document.getElementById("am-pm").innerHTML= 
    } 
    else{
        clockType = 24;
    }
    console.log(clockType)
    document.getElementById("ClocktypeSwitch").innerHTML=clockType + " hours";
}