var settings = {
    off_flag: false,
    size: 150,
    showBox: false,
    showScrews: true
};

var airspeed = $.flightIndicator('#airspeed', 'airspeed', settings);
var attitude = $.flightIndicator('#attitude', 'attitude', settings);
var altimeter = $.flightIndicator('#altimeter', 'altimeter', settings);
var turn_coordinator = $.flightIndicator('#turn_coordinator', 'turn_coordinator', settings);
var heading = $.flightIndicator('#heading', 'heading', settings);
var variometer = $.flightIndicator('#variometer', 'variometer', settings);

//needles ausblenden
heading.setBeaconOne(0, false);
heading.setBeaconTwo(0, false);

setInterval(function() {

    airspeed.setAirSpeed(120);

    attitude.setRoll(10);
    attitude.setPitch(10);
    //attitude.setILSLocalizer(-10);
    //attitude.setILSGlideslope(15);

    altimeter.setAltitude(11500);
    altimeter.setPressure(29.92);
    turn_coordinator.setTurn(20);
    heading.setHeading(180);
   


    variometer.setVario(5);

}, 50);


const bat_temp = document.getElementById('bat_temp');

number1 = 140;

bat_temp.style.width = number1*100/160 + '%';
if(number1 < 80){
    bat_temp.style.backgroundColor  = "green";
    }
else if (number1 > 130) {
    bat_temp.style.backgroundColor  = "red";
} 
else {
    bat_temp.style.backgroundColor  = "yellow";    
}

const bat_temp_num = document.getElementById('bat_temp_num');
 
bat_temp_num.innerHTML = number1 +'°';

const mot_temp = document.getElementById('mot_temp');

number2 = 87;
mot_temp.style.width = number2*100/100 + '%';
if(number2 < 50){
mot_temp.style.backgroundColor = "green";
}
else if (number2 >85) {
    mot_temp.style.backgroundColor = "red";

} 
else {
    mot_temp.style.backgroundColor = "yellow";

}


const mot_temp_num = document.getElementById('mot_temp_num');
mot_temp_num.innerHTML = number2 +'°';
