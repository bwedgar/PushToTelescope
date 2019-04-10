//let data1="name,raHours,raMinutes,decDegrees,decMinutes,lightYears,absMagnitue,type,notes\

var index = 0;
let data = ["47 Tucanae,0,24,-72,5,13000,,GC,30 thousand stars with a dense core which may contain a black hole. Second brightest globular cluster. Not part of the LMC. 12 myo.",
  "Andromeda Galaxy,0,43,41,16,2900000,3.4,GX,Nearest major galaxy to us. one trillion stars. 2X milky way.",
  "Blue Planetary Nebula,11,50,-57,10,4900,,RN,brightest nebula in the south",
  "Butterfly Cluster,17,40,-32,13,2000,4.2,OC,",
  "Carina nebula,10,45,-59,52,7000,,NB,Includes Eta Carina.",
  "Centaurus A,13,25,-43,1,10000000,,GX,The centre of this galaxy is a massive black hole that is creating a jet of X-rays and radio waves.",
  "Centre of Galaxy,17,49,-27,50,27000,1,ST,You cannot see this but you can see where it is.",
  "Coal Sack Nebula,12,50,-62,30,600,0,NB,covers 7 degrees. A cloud that stops light.",
  "Crab Nebula,5,34,22,1,6300,8.4,RN,This is the remains of a supernova explosion. These happen when a massive star runs out of fuel and collapses before exploding.The shock wave produced heats up gas to millions of degrees and makes it luminous. The supernova was seen in China in 1054 AD. In the centre is a pulsing neutron star that is emitting radio and X-ray waves.",
  "Eta Carinae Nebula,10,45,-59,41,7500,4,NB,This covers several degrees. In the middle is the star eta Carina. In 1843 it erupted to be the second brightest star in the sky. It is surrounded by the homunculus nebula ",
  "Ghost of Jupiter,10,25,-18,38,2500,,RN,blueish oval 25X15 with fainter outside envelope. ",
  "IC2391,8,40,-53,4,500,,OC,30 stars  visible to naked eye",
  "Jewel Box,12,57,-60,22,6400,,OC,Only 14 myo. Very bright blue stars with one red giant.",
  "Lagoon nebula,18,3,-24,23,5200,5.8,NB,",
  "Large Magellanic Cloud,5,18,-69,13,160000,,GX,Satellite galaxy of Milky Way.  14 kly diameter. 10 billion solar Masses. Covers 10 degrees of sky.",
  "M83,13,38,-29,52,15000000,7.6,GX,shows spiral arms.",
  "Messier 25,18,32,-19,15,2000,4.6,OC,",
  "NGC1039 M34,2,42,42,47,1400,5.2,OC,",
  "NGC1068 M77,2,43,0,1,60000000,8.8,GX,",
  "NGC1904 M79,5,24,-24,33,41100,8,GC,",
  "NGC1912 M38,5,29,35,50,4200,6.4,OC,",
  "NGC1960 M36,5,36,34,8,4100,6,OC,",
  "NGC1982 M43,5,35,-5,16,1600,9,NB,",
  "NGC205 M110,0,40,41,41,2900000,8,GX,",
  "NGC2068 M78,5,47,0,3,1600,8,NB,",
  "NGC2099 M37,5,52,32,33,4400,5.6,OC,",
  "NGC2168 M35,6,9,24,20,2800,5.1,OC,120 stars  over 30 ",
  "NGC221 M32,0,43,40,52,2900000,8.2,GX,",
  "NGC2287 M41,6,47,-20,44,2300,4.5,OC,Reddish star in centre surrounded by blue stars. ",
  "NGC2323 M50,7,3,-8,20,3000,5.9,OC,",
  "NGC2422 M47,7,37,-14,30,1600,4.4,OC,yellow and blue stars; 6th mag.",
  "NGC2437 M46,7,42,-14,49,5400,6.1,OC,several100 stars; uniformly spread",
  "NGC2447 M93,7,45,-23,52,3600,6.2,OC,",
  "NGC2548 M48,8,14,-5,48,1500,5.8,OC,",
  "NGC2632 M44 The Beehive,8,40,19,59,577,3.1,OC,One of the nearest open clusters; several multiple stars. Known to Galileo.",
  "NGC2682 M67,8,50,11,49,2700,6.9,OC,",
  "NGC3351 M95,10,44,11,42,38000000,9.7,GX,",
  "NGC3368 M96,10,47,11,49,38000000,9.2,GX,",
  "NGC3379 M105,10,48,12,35,38000000,9.3,GX,",
  "NGC3623 M65,11,19,13,5,35000000,9.3,GX,",
  "NGC3627 M66,11,20,12,59,35000000,9,GX,",
  "NGC4192 M98,12,14,14,54,60000000,10.1,GX,",
  "NGC4254 M99,12,19,14,25,60000000,9.8,GX,",
  "NGC4258 M106,12,19,47,18,25000000,8.3,GX,",
  "NGC4303 M61,12,22,4,28,60000000,9.7,GX,",
  "NGC4321 M100,12,23,15,49,60000000,9.4,GX,",
  "NGC4374 M84,12,25,12,53,60000000,9.3,GX,",
  "NGC4382 M85,12,25,18,11,60000000,9.2,GX,",
  "NGC4406 M86,12,26,12,57,60000000,9.2,GX,",
  "NGC4472 M49,12,30,8,0,60000000,8.4,GX,",
  "NGC4486 M87,12,31,12,24,60000000,8.6,GX,",
  "NGC4501 M88,12,32,14,25,60000000,9.5,GX,",
  "NGC4548 M91,12,35,14,30,60000000,10.2,GX,",
  "NGC4552 M89,12,36,12,33,60000000,9.8,GX,",
  "NGC4569 M90,12,37,13,10,60000000,9.5,GX,",
  "NGC4579 M58,12,38,11,49,60000000,9.8,GX,",
  "NGC4590 M68,12,40,-26,45,33300,8.2,GC,",
  "NGC4594 M104,12,40,-11,37,50000000,8.3,GX,",
  "NGC4621 M59,12,42,11,39,60000000,9.8,GX,",
  "NGC4649 M60,12,44,11,33,60000000,8.8,GX,",
  "NGC4736 M94,12,51,41,7,14500000,8.1,GX,",
  "NGC4826 M64,12,57,21,41,19000000,8.5,GX,",
  "NGC5024 M53,13,13,18,10,56400,7.7,GC,",
  "NGC5055 M63,13,16,42,2,37000000,8.6,GX,",
  "NGC5194 M51,13,30,47,12,37000000,8.1,GX,",
  "NGC5272 M3,13,42,28,23,33900,6.4,GC,",
  "NGC5904 M5,15,18,2,5,24500,5.8,GC,",
  "NGC6093 M80,16,17,-22,59,27400,7.2,GC,",
  "NGC6121 M4,16,23,-26,32,7200,5.9,GC,",
  "NGC6171 M107,16,33,-13,3,19600,8.1,GC,",
  "NGC6205 M13,16,42,36,28,22800,5.9,GC,",
  "NGC6218 M12,16,47,-1,57,16000,6.6,GC,",
  "NGC6254 M10,16,57,-4,6,14400,6.6,GC,",
  "NGC6266 M62,17,1,-30,7,21500,6.6,GC,",
  "NGC6273 M19,17,3,-26,16,27100,7.2,GC,",
  "NGC628 M74,1,37,15,47,35000000,9.2,GX,",
  "NGC6333 M9,17,19,-18,31,26700,7.9,GC,",
  "NGC6341 M92,17,17,43,8,26400,6.5,GC,",
  "NGC6402 M14,17,38,-3,15,27400,7.6,GC,",
  "NGC6494 M23,17,57,-19,1,2150,5.5,OC,",
  "NGC6531 M21,18,5,-22,30,4250,5.9,OC,",
  "NGC6603 M24,18,16,-18,29,10000,4.5,OC,",
  "NGC6611 M16,18,19,-13,47,7000,6,NB,",
  "NGC6613 M18,18,20,-17,8,4900,6.9,OC,",
  "NGC6626 M28,18,25,-24,52,17900,6.9,GC,",
  "NGC6637 M69,18,31,-32,21,26700,7.7,GC,",
  "NGC6656 M22,18,36,-23,54,10100,5.1,GC,",
  "NGC6681 M70,18,43,-32,18,28000,8.1,GC,",
  "NGC6694 M26,18,45,-9,24,5000,8,OC,",
  "NGC6715 M54,18,55,-30,29,82800,7.7,GC,",
  "NGC6720 M57,18,54,33,2,4100,9,RN,",
  "NGC6779 M56,19,17,30,11,31600,8.2,GC,",
  "NGC6809 M55,19,40,-30,58,16600,7,GC,",
  "NGC6838 M71,19,54,18,47,11700,8.3,GC,",
  "NGC6853 M27,20,0,22,43,1250,8.1,RN,",
  "NGC6864 M75,20,6,-21,55,57700,8.6,GC,",
  "NGC6913 M29,20,23,38,32,4000,6.6,OC,",
  "NGC6981 M72,20,54,-12,32,52800,9.4,GC,",
  "NGC7078 M15,21,30,12,10,33600,6.4,GC,",
  "NGC7089 M2,21,33,0,-49,37500,6.5,GC,",
  "NGC7099 M30,21,40,-23,11,24800,7.5,GC,",
  "Omega Centauri,13,26,-47,28,16000,,GC,Largest globular cluster in the Milky Way.  150 ly across with 10 million stars. 12 billion years old. The stars in the core are only 0.1 ly apart.",
  "Omicron Ceti,2,19,-2,59,300,0.99,ST,Called Mira as it is a pulsing red giant red star.  Its magnitude varies from 2 to 5 taking 100 days to maximum and 200 to minimum. The star is a binary system with the white dwarf star gaining mass from the red giant.",
  "Orion Nebula,5,35,-5,27,1600,4,NB,24 ly across. 2000 x mass of Sun. Contains 4 stars called the trapezium.",
  "Pleiades,3,47,24,7,380,1.2,OC,Up to 1000 hot B type blue stars made in the last 100 million years. May last twice that long. Maori named it Matariki.A blue nebulosity surrounds some stars.",
  "Ptolemy cluster,17,54,-34,49,800,3.3,OC,",
  "Sculptor galaxy NGC253,0,47,-25,17,11400000,,GX,One of the brightest galaxies. 40 kly diameter. Spiral.",
  "Sigma Octantis,21,9,-88,57,281,0.86,ST,The southern pole star.  A Giant F class star.",
  "Small Magellanic Cloud,0,52,-72,50,210000,,GX,Satellite galaxy of Milky Way.  17 kly diameter. 7 billion solar Masses. Covers 4 degrees of sky.",
  "Southern Pleiades,10,43,-62,23,547,,OC,Contains 74 stars.",
  "Swan or Omega Nebula,18,21,-16,11,5000,7,NB,",
  "Tarantula Nebula,5,38,-69,5,163000,,NB,Inside the Large Magellanic Cloud. 300 ly diameter the largest nebula observable. 1/2 million times mass of Sun. Will become globular cluster.",
  "Tau Canis Majoris Cluster,7,18,-24,57,4800,,OC,6 across 1 myo - so quite young!",
  "Triangulum galaxy,1,34,30,39,3000000,5.7,GX,60 kly diameter. 40 billion stars.",
  "Trifid Nebula,18,2,-23,2,5200,8.5,NB,3100 young stars",
  "Wild duck cluster,18,51,-6,16,6000,5.8,OC,2900 stars. 250 mlo.",
  "Wishing Well Cluster,11,5,-58,44,1321,,OC,150 stars and 7 red giants.",
  "NGC55,0,12,-39,50,10000000,,GX,Part of sculptor group nearest group of galaxies to our local group.Side on view of spiral galaxy.",
  "Theta Eridani,2,56,-40,30,120,,ST,Double. 3.4 and 4.4 magnitude 8.5 sec separation.",
  "NGC1535,4,12,-12,52,2100,,NB,Planetary Nebula.",
  "Alpha Andromeda    Alpheratz,0,8,29,5,97,2.06,ST,B9",
  "Alpha Phoenix    Ankaa,0,26,-42,18,77,2.4,ST,K0",
  "Alpha Cassiopeia    Schedar,0,40,56,32,228,2.24,ST,K0",
  "Beta Cetus    Diphda,0,43,-17,59,95,2.04,ST,K0",
  "Beta Andromeda    Mirach,1,9,35,37,199,2.06,ST,M0",
  "Alpha Eridanus    Achernar,1,37,-57,14,143,0.45,ST,B3",
  "Gamma Andromeda    Almach,2,3,42,20,354,2.12,ST,K2; B8",
  "Alpha Aries    Hamal,2,7,23,28,65,2,ST,K2",
  "Alpha Ursa Minor    Polaris,2,31,89,16,431,1.97,ST,F7",
  "Alpha Cetus    Menkar,3,2,4,5,220,2.54,ST,M2",
  "Beta Perseus    Algol,3,8,40,57,92,2.09,ST,B8",
  "Alpha Perseus    Mirfak,3,24,49,52,591,1.79,ST,F5",
  "Alpha Taurus    Aldebaran,4,35,16,31,65,0.87,ST,K5",
  "Beta Orion    Rigel,5,14,-8,12,772,0.18,ST,B8",
  "Alpha Auriga    Capella,5,16,46,0,42,0.08,ST,G5",
  "Gamma Orion    Bellatrix,5,25,6,21,243,1.64,ST,B2",
  "Beta Taurus    Elnath,5,26,28,36,131,1.65,ST,B7",
  "Delta Orion    M,5,32,0,18,916,2.25,ST,O9.5; B9",
  "Epsilon Orion    Alnilam,5,36,-1,12,1342,1.69,ST,B0",
  "Zeta Orion    Alnitak,5,40,-1,57,817,1.74,ST,O9; B9",
  "Kappa Orion    Saiph,5,47,-9,40,721,2.06,ST,B0",
  "Alpha Orion    Betelgeuse,5,55,7,24,427,0.45,ST,M2",
  "Beta Auriga    Menkal,5,59,44,57,82,1.9,ST,A2",
  "Beta Canis Major    Mirzam,6,22,-17,57,499,1.98,ST,B1",
  "Alpha Carina    Canopus,6,23,-52,42,312,-0.62,ST,F0",
  "Gamma Gemini    Alhena,6,37,16,24,104,1.93,ST,A0",
  "Alpha Canis Major    Sirius,6,45,-16,43,8,-1.44,ST,A0",
  "Epsilon Canis Major    Adhara,6,58,-28,58,430,1.5,ST,B2",
  "Delta Canis Major    Wezen,7,8,-26,24,1792,1.83,ST,F8",
  "Alpha Gemini    Castor,7,34,31,53,51,1.58,ST,A2; B9",
  "Alpha Canis Minor    Procyon,7,39,5,13,11,0.4,ST,F5",
  "Beta Gemini    Pollux,7,45,28,2,33,1.15,ST,K0",
  "Gamma Vela    Regor,8,9,-47,20,840,1.75,ST,WC8; O9",
  "Epsilon Carina    Avior,8,22,-59,31,632,1.86,ST,K3; B2",
  "Delta Velorum,8,44,-54,43,79,1.93,ST,A1",
  "Lambda Vela    Suhail,9,8,-43,26,573,2.23,ST,K4",
  "Beta Carina    Miaplacidus,9,13,-69,43,111,1.67,ST,A2",
  "Alpha Hydra    Alphard,9,27,-8,40,177,1.99,ST,K3",
  "Alpha Leo    Regulus,10,8,11,58,77,1.36,ST,B7",
  "Gamma Leo    Algieba,10,19,19,50,125,2,ST,K0",
  "Beta Ursa Major    Merak,11,1,56,23,79,2.34,ST,A1V",
  "Alpha Ursa Major    Dubhe,11,3,61,45,123,1.81,ST,K0; F8",
  "Beta Leo    Denebola,11,49,14,34,36,2.14,ST,A3",
  "Alpha  Crucis    Acrux,12,26,-63,6,320,0.77,ST,B0.5; B9",
  "Gamma  Crucis    Gacrux,12,31,-57,7,87,1.6,ST,M4",
  "Beta Crux    Mimosa,12,47,-59,41,352,1.25,ST,B0",
  "Epsilon Ursa Major    Alioth,12,54,55,58,80,1.76,ST,A0",
  "Alpha Virgo    Spica,13,25,-11,10,262,0.98,ST,B1",
  "Eta Ursa Major    Alkaid,13,47,49,19,100,1.85,ST,B3",
  "Beta Centaurus    Hadar,14,3,-60,22,525,0.61,ST,B1",
  "Theta Centaurus    Menkent,14,6,-36,22,60,2.06,ST,K0",
  "Alpha Bootes    Arcturus,14,15,19,11,36,-0.05,ST,K2",
  "Alpha Centauri    Rigil Kentaurus,14,39,-60,50,4,-0.01,ST,G2; K4",
  "Beta Ursa Minor    Kochab,14,50,74,9,126,2.06,ST,K4",
  "Alpha Corona Borealis    Alphecca,15,34,26,43,74,2.22,ST,A0",
  "Alpha Scorpius    Antares,16,29,-26,26,604,1.06,ST,M1; B2",
  "Alpha Triangulum Australis    Atria,16,48,-69,2,415,1.91,ST,K2",
  "Lambda Scorpius    Shaula,17,33,-37,6,702,1.62,ST,B1.5",
  "Alpha Ophiuchus    Rasalhague,17,34,12,34,46,2.08,ST,A5",
  "Theta Scorpius    Sargas,17,37,-43,0,272,1.86,ST,F1",
  "Gamma in Draco    Eltan,17,56,51,29,147,2.24,ST,K5",
  "Epsilon Sagitarius    Kaus Australis,18,24,-34,23,144,1.79,ST,B9.5",
  "Alpha Lyra    Vega,18,36,38,47,25,0.03,ST,A0",
  "Sigma Sagittarius    Nunki,18,55,-26,18,224,2.04,ST,B2",
  "Alpha Aquila    Altair,19,50,8,52,16,0.76,ST,A7",
  "Gamma Cygnus    Sadr,20,22,40,15,1524,2.23,ST,F8",
  "Alpha Pavo    Peacock,20,25,-56,44,183,1.94,ST,B2",
  "Alpha Cygnus    Deneb,20,41,45,17,3229,1.25,ST,A2",
  "Epsilon Pegasus    Enif,21,44,9,53,672,2.38,ST,K2",
  "Alpha Grus    Al,22,8,-46,58,101,1.73,ST,B7",
  "Beta Grus,22,42,-46,53,170,2.06,ST,M5",
  "Alpha Piscis Austrinus    Fomalhaut,22,57,-29,37,25,1.17,ST,A3",
  "Alpha Pegasus    Markab,23,4,15,12,139,2.49,ST,B9.5",
  "Beta Monocerotis,6,26,-7,0,700,,ST,Triple star 4.7 and 4.6 sep 7.5sec and 5.6 sep 2.8sec from 4.6.",
  "Gamma Leonis,10,17,20,6,130,,ST,Double; 2.6 and 3.8 separated by 4.3sec",
  "Gem Cluster,10,31,-57,58,1400,,OC,Red supergiant surrounded by blue stars. 8min across."
]

class CelestialObject {
  constructor(
    name,
    raHours,
    raMinutes,
    decDegrees,
    decMinutes,
    lightYears,
    absMagnitue,
    type,
    notes
  )

  {
    this.name = name.replace(/M(\d+)/, "Messier $1");;
    this.raHours = raHours;
    this.raMinutes = raMinutes;
    this.decDegrees = decDegrees;
    this.decMinutes = decMinutes;
    this.lightYears = lightYears;
    this.absMagnitue = absMagnitue;
    this.type = type;
    this.notes = notes;

    this.galLongitude = astromath.galacticLongitude(
      astromath.raRadians(this.raHours, this.raMinutes),
      astromath.decRadians(this.decDegrees, this.decMinutes)
    );
    this.galLatitude = astromath.galacticLatitude(
      astromath.raRadians(this.raHours, this.raMinutes),
      astromath.decRadians(this.decDegrees, this.decMinutes)
    );
    this.azimuth = astromath.azimuth(astromath.raRadians(this.raHours, this.raMinutes), astromath.decRadians(this.decDegrees, this.decMinutes));
    this.visible =
      astromath.altitude(astromath.raRadians(this.raHours, this.raMinutes), astromath.decRadians(this.decDegrees, this.decMinutes)) > 15 ? true : false;
    let scales = [0, 0.0005, 12.5, 250, 5000, 50000, 500000, 50000000, 100000000]
    let indexScale = 0
    for (let [i, s] of scales.entries()) {
      if (this.lightYears < s) {
        this.scale = i
        //console.log(`name: ${this.name} scale: ${this.scale}`)
        break
      }
    }
  }
}

class CelestialObjects {
  constructor() {}
  makeCelestialObjects() {
    celestialObjects = [];
    for (let datum of data) {
      let c = datum.split(",");
      //console.log(c);
      let celestialObject = new CelestialObject(
        c[0],
        c[1],
        c[2],
        c[3],
        c[4],
        c[5],
        c[6],
        c[7],
        c[8]
      );
      celestialObjects.push(celestialObject);
    }
    for (var i of [0, 1, 3, 4, 5, 6, 7]) { //planets[0], planets[1], planets[3], planets[4], planets[5], planets[6], planets[7]]) {
      //console.log("i: "+i+" name: "+ planets[i].name)

      var ra = radecr(helios(planets[i]), helios(planets[2]))[0];

      var raHours = Math.floor(ra);
      var raMinutes = Math.round((ra - raHours) * 60);
      var dec = radecr(helios(planets[i]), helios(planets[2]))[1];
      var decDegrees = Math.floor(dec);
      var decMinutes = Math.round((dec - decDegrees) * 60);
      var distance = radecr(helios(planets[i]), helios(planets[2]))[2] * 0.00001581; //from AU to light Years
      var n = planets[i].name;
      var co = new CelestialObject(n, raHours, raMinutes, decDegrees, decMinutes, distance, "", "PL", "")

      celestialObjects.push(co);

    }
    celestialObjects = celestialObjects.sort((f, g) => (f.azimuth < g.azimuth) ? -1 : 1);

    index = celestialObjects.findIndex(co =>
      co.visible == true & co.type == "ST"
    );
    console.log("index at celestialobjects.js is: " + index)

    return celestialObjects;
  }
}
