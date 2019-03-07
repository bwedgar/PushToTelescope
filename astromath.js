astromath = {
radians : function(degrees) {
return degrees*2*Math.PI/360;
},
raHours : function(radiansIn) {
return Math.floor(radiansIn/2/Math.PI*24);
},
raMinutes : function(radiansIn) {
hours=radiansIn/2/Math.PI*24;
return Math.abs(Math.round(hours%1*60,2));
},

decDegrees : function(radiansIn) {
return Math.floor(radiansIn/2/Math.PI*360,2);
},

decMinutes : function(radiansIn) {
degrees=radiansIn/2/Math.PI*360;
return Math.abs(Math.round(degrees%1*60,2));
},

raRadians : function(hours,minutes) {
return  astromath.radians(hours/24*360+minutes/24/60*360);
},
decRadians : function(degrees, minutes) {
return astromath.radians(degrees*1+(degrees<0?-1:1)*minutes/60);
},

galacticLatitude : function(ra,dec){
return Math.asin(Math.cos(dec)*Math.cos(astromath.radians(27.4))*Math.cos(ra-astromath.radians(192.25))+Math.sin(dec)*Math.sin(astromath.radians(27.4))) ;
},

galacticLongitude : function(ra,dec){
x=Math.cos(dec)*Math.sin(ra-astromath.radians(192.25))*Math.cos(astromath.radians(27.4));
y=Math.sin(dec)-Math.sin(astromath. galacticLatitude(ra,dec))*Math.sin(astromath.radians(27.4));
ratio=y/x;
atan=Math.atan2(y,x);
atan=atan<0?atan+2*Math.PI:atan;
long=atan+astromath.radians(33);
return long;
},

getJulianDate : function(){
  d=new Date();
  M=d.getUTCMonth()+1;
  Y=d.getUTCFullYear();
  D=d.getUTCDate()+d.getUTCHours()/24;
  if (M<3) {
    Y=Y-1;
    M=M+12;
  }
  A=Math.floor(Y/100);
  B=2-A+Math.floor(A/4);
  if (Y<0) { C=Math.floor((375.25*Y)-.75)}
  else
    { C=Math.floor(365.25*Y) }
  E=Math.floor(30.6001*(M+1));
  JD=B+C+D+E+1720994.5;
},

getGST : function() {
  d=new Date()
  JD=astromath.getJulianDate()
  GMT=d.getUTCHours()+d.getUTCMinutes()/60
  T= (JD-2451545.0)/36525.0
  T0=6.697374558+ (2400.051336*T)+(0.000025862*T*T)+(GMT*1.0027379093)
  T0=T0%24
},

getLST : function() {
  LST=astromath.getGST()+(longitude/15);
  return LST
},

// getAltitude : function(ra,dec){
//   hourAngle=(astromath.getLST()*2*Math.PI/24-ra);
//   //latitude=observer.latitude();
//   answer=Math.asin(Math.sin(dec)*Math.sin(latitude)+Math.cos(dec)* Math.cos(latitude)*Math.cos(hourAngle));
//   answer=answer*360/2/Math.PI;
// },
//
//   getAzimuth: function(ra,dec) {
//     hourAngle=(astromath.getLST()*2*Math.PI/24-ra);
//     y=-1*Math.cos(dec)*Math.cos(latitude) *Math.sin(hourAngle);
//     x=Math.sin(dec) - Math.sin(latitude)*Math.sin(astromath.getAltitude(ra,dec )*2*Math.PI/360 );
//     answer= Math.atan2(y,x);
//     if (answer < 0) { answer=2*Math.PI+answer;}
//     answer=answer*360/2/Math.PI;
//   },

distSunToCentre :
function(ra,dec,distance){
return distance*Math.cos(dec);
},

distInPlane : function(ra,dec,distance){
return distance*Math.sin(dec)*Math.sin(ra)
},

distAbovePlane :
function(ra,dec,distance){
return distance*Math.sin(dec)*Math.cos(ra);
},

daysFromJ2000 : function() {
epoch=new Date(2000,0,1,12,0,0);
today=new Date();
return (today-epoch)/(1000*60*60*24);
},

LST : function() {
longitudeDeg=longitude*360/2/Math.PI;
daysFromJ2000=astromath.daysFromJ2000();
today=new Date();
//today =observer.localTime;
UT = today.getUTCHours()+today.getUTCMinutes()/60;
answer= ((100.46 + 0.985647 * daysFromJ2000 + longitudeDeg + 15*UT)%360);
return astromath.radians(((answer<0?360:0)+answer));
},

hourAngle : function(ra)  {
return astromath.LST()-ra;
},

altitude : function(ra,dec) {
hourAngle=astromath.hourAngle(ra);
//latitude=observer.latitude();
return Math.asin(Math.sin(dec)*Math.sin(latitude)+Math.cos(dec)*Math.cos(latitude)*Math.cos(hourAngle));
},

azimuth : function(ra,dec) {
//latitude=observer.latitude();
y=-1*Math.cos(dec)*Math.cos(latitude) *Math.sin(hourAngle);
x=Math.sin(dec) - Math.sin(latitude)*Math.sin(astromath.altitude(ra,dec ) );
answer= Math.atan2(y,x);
return (answer <0?2*Math.PI:0)+answer ;
},

longitudeRadians : function(degrees,minutes,direction) {
return astromath.decRadians((direction=='W'?-1:1)*degrees,minutes);
},

latitudeRadians : function(degrees,minutes,direction) {
return astromath.decRadians((direction=='S'?-1:1)*degrees,minutes);
},

angleSub : function(angle1,angle2) {
if (angle1-angle2>Math.PI) {return (angle1-angle2)-2*Math.PI;
exit;
}
if (angle1-angle2<-1*Math.PI)
{return (angle1-angle2)+2*Math.PI;}
else {return angle1-angle2;}
},

screenY : function(altitude,azimuth,azCentre) {


//return altitude<0?-1000:Math.round(((3.14/2-altitude)*300)-60,0);

//subtract the altitude from PI/2 deg  to get the distance from the top from 0 to PI/2.
//a distance of pi/2 should equal the height of the canvas
//so divide the distance by pi/2 and multiply by the height of the canvas
scale=2/3.14*($('#skyViewDiv').height())*4/5; //4/5 is for the fact I move the stars down 1/5th of the screen
//return altitude<0?-1000:Math.round((3.14/2-altitude)*scale,0);
return Math.sin(Math.PI/2-astromath.angleSub(azimuth,azCentre))*(Math.PI/2-altitude)*scale+Math.PI/2*scale/5;

},

screenX : function(altitude,azimuth,azCentre) {


//return Math.round(skyViewDiv.width/2+(astromath.angleSub(azimuth,azCentre))/(2*Math.PI)*240*3,0);


//return Math.round(150+(astromath.angleSub(azimuth,azCentre))/(2*Math.PI)*240*3,0);
//return Math.round(astromath.angleSub(azimuth,azCentre)*scale,0);
return Math.cos(Math.PI/2-astromath.angleSub(azimuth,azCentre))*(Math.PI/2-altitude)*scale+$('#skyViewDiv').width()/2;

},



radiansToDegreesAndMinutes : function(radians) {
return Math.floor(radians/2/Math.PI*360)+' &deg; '+Math.floor((radians/2/Math.PI*360)%1*60)+' min';
}

}
