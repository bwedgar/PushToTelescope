astromath = {

  longitude: 0,

  latitude: 0,

  formatDistance: (num1) => {
    if (num1 < 0.001) { //planets show AU
      return Math.floor(63421 * num1*10)/10 + " AU "
    } else {
      let t = (num1 * 1).toExponential(2).toString()
      let ex = /(\d+)$/g.exec(t)[0]
      let prefix = ["", "k", "m", "b"]
      let n = /^(\S{3})/g.exec(t)[1] * 10 ** (ex % 3)
      return Math.floor(n) + " " + prefix[Math.floor(ex / 3)] + " LY "
    }
  },

  formatNames: (name) => {
    return name//`&${name.split(" ")[0].toLowerCase()}; ${name.substr(name.indexOf(" "),name.length)}`
  },

  polarToCartesian: (lat, long, r) => {
    lat = Math.PI / 2 - lat
    long = (-long + Math.PI / 2) % (Math.PI * 2) //+ Math.PI / 2
    let x = r * Math.sin(lat) * Math.cos(long)
    let y = r * Math.sin(lat) * Math.sin(long)
    let z = r * Math.cos(lat)
    return {
      x,
      y,
      z
    }
  },

  radians: function(degrees) {
    return degrees * 2 * Math.PI / 360;
  },

  degrees: function(radians) {
    return radians * 360 / 2 / Math.PI;
  },

  hours: function(radians) {
    return radians / 2 / Math.PI * 24;
  },

  radiansToHoursAndMinutes: function(radians) {
    return Math.floor(radians / 2 / Math.PI * 24) + ':' + Math.floor((radians / 2 / Math.PI * 24) % 1 * 60);
  },

  radiansToDegreesAndMinutes: function(radians) {
    return Math.floor(radians / 2 / Math.PI * 360) + '&deg;' + Math.floor((radians / 2 / Math.PI * 360) % 1 * 60) + '\'';
  },

  raHours: function(radiansIn) {
    return Math.floor(radiansIn / 2 / Math.PI * 24);
  },

  raMinutes: function(radiansIn) {
    hours = radiansIn / 2 / Math.PI * 24;
    return Math.abs(Math.round(hours % 1 * 60, 2));
  },

  decDegrees: function(radiansIn) {
    return Math.floor(radiansIn / 2 / Math.PI * 360, 2);
  },

  decMinutes: function(radiansIn) {
    degrees = radiansIn / 2 / Math.PI * 360;
    return Math.abs(Math.round(degrees % 1 * 60, 2));
  },

  raRadians: function(hours, minutes) {
    return astromath.radians(hours / 24 * 360 + minutes / 24 / 60 * 360);
  },
  decRadians: function(degrees, minutes) {
    return astromath.radians(degrees * 1 + (degrees < 0 ? -1 : 1) * minutes / 60);
  },

  galacticLatitude: function(ra, dec) {
    return Math.asin(Math.cos(dec) * Math.cos(astromath.radians(27.4)) * Math.cos(ra - astromath.radians(192.25)) + Math.sin(dec) * Math.sin(astromath.radians(27.4)));
  },

  galacticLongitude: function(ra, dec) {
    x = Math.cos(dec) * Math.sin(ra - astromath.radians(192.25)) * Math.cos(astromath.radians(27.4));
    y = Math.sin(dec) - Math.sin(astromath.galacticLatitude(ra, dec)) * Math.sin(astromath.radians(27.4));
    ratio = y / x;
    atan = Math.atan2(y, x);
    atan = atan < 0 ? atan + 2 * Math.PI : atan;
    long = atan + astromath.radians(33);
    return long;
  },

  getJulianDate: function() {
    d = new Date();
    M = d.getUTCMonth() + 1;
    Y = d.getUTCFullYear();
    D = d.getUTCDate() + d.getUTCHours() / 24;
    if (M < 3) {
      Y = Y - 1;
      M = M + 12;
    }
    A = Math.floor(Y / 100);
    B = 2 - A + Math.floor(A / 4);
    if (Y < 0) {
      C = Math.floor((375.25 * Y) - .75)
    } else {
      C = Math.floor(365.25 * Y)
    }
    E = Math.floor(30.6001 * (M + 1));
    JD = B + C + D + E + 1720994.5;
    return JD;
  },

  getGST: function() {
    d = new Date()
    JD = astromath.getJulianDate()
    GMT = d.getUTCHours() + d.getUTCMinutes() / 60
    T = (JD - 2451545.0) / 36525.0
    T0 = 6.697374558 + (2400.051336 * T) + (0.000025862 * T * T) + (GMT * 1.0027379093)
    T0 = T0 % 24
    return T0; //24 hour time
  },

  getLST: function() {
    LST = (astromath.getGST() + (astromath.degrees(astromath.longitude) / 15)) % 24;
    return LST //24 hour time
  },

  distSunToCentre: function(ra, dec, distance) {
    return distance * Math.cos(dec);
  },

  distInPlane: function(ra, dec, distance) {
    return distance * Math.sin(dec) * Math.sin(ra)
  },

  distAbovePlane: function(ra, dec, distance) {
    return distance * Math.sin(dec) * Math.cos(ra);
  },

  daysFromJ2000: function() {
    epoch = new Date(2000, 0, 1, 12, 0, 0);
    today = new Date();
    return (today - epoch) / (1000 * 60 * 60 * 24);
  },

  hourAngle: function(ra) {
    //console.log("ra:"+ ra);
    ha = astromath.getLST() - ra * 24 / 2 / Math.PI;
    //working in hours

    ha = (ha < 0) ? ha + 24 : ha; //if the hour angle is negtive ass 24 hours
    // ha=  (astromath.getLST()*2*Math.PI/24 - ra);
    // ha = (ha<0) ? ha+2*Math.PI : ha ;
    //console.log("lst: "+ astromath.getLST()+" ra(hrs): "+ra*24/2/Math.PI+" HA: "+ha);
    return astromath.radians(ha * 360 / 24); //return radians
  },

  altitude: function(ra, dec) {
    radians = Math.asin(Math.sin(dec) * Math.sin(astromath.latitude) + Math.cos(dec) * Math.cos(astromath.latitude) * Math.cos(astromath.hourAngle(ra)));
    return radians * 360 / 2 / Math.PI;
  },

  azimuth: function(ra, dec) {
    y = -1 * Math.cos(dec) * Math.cos(astromath.latitude) * Math.sin(astromath.hourAngle(ra));
    x = Math.sin(dec) - Math.sin(astromath.latitude) * Math.sin(astromath.radians(astromath.altitude(ra, dec)));
    answer = Math.atan2(y, x);
    radians = (answer < 0 ? 2 * Math.PI : 0) + answer;
    return radians * 360 / 2 / Math.PI;
  },

  longitudeRadians: function(degrees, minutes, direction) {
    return astromath.decRadians((direction == 'W' ? -1 : 1) * degrees, minutes);
  },

  latitudeRadians: function(degrees, minutes, direction) {
    return astromath.decRadians((direction == 'S' ? -1 : 1) * degrees, minutes);
  },


  angleSub: function(angle1, angle2) {
    if (angle1 - angle2 > Math.PI) {
      return (angle1 - angle2) - 2 * Math.PI;
      exit;
    }
    if (angle1 - angle2 < -1 * Math.PI) {
      return (angle1 - angle2) + 2 * Math.PI;
    } else {
      return angle1 - angle2;
    }
  }



}
