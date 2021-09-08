var x = 50;
var y = 50;
var speedY = Math.floor((Math.random() * 10) + 1);
var speedX = Math.floor((Math.random() * 10) + 1);

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('black');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {

  background('black');
  // stel vulkleur in
  fill(100, 100, 255);

  // teken een cirkel
  ellipse(x,y,80,80);

  x = x + speedX;
  y = y + speedY;

  if (y > 680 || y < 40) {
    speedY = speedY * -1;
  }

  if (x > 1240 || x < 40) {
    speedX = speedX * -1;
  }
}
