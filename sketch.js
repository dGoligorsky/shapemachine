const instructionsTexts = document.getElementsByClassName("instructions");

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 100);

  // background(random(0, 100), random(0, 100), random(50, 100));
}

function draw() {
  // nice color palette + set background (move these to setup to avoid redraws)
  background(random(0, 100), random(0, 100), random(50, 100));

  noStroke();

  // curve tightness
  curveTightness(random(0, 50));

  // transformations
  scale(random(0.25, 0.55));
  translate(windowWidth, windowHeight);
  rotate(random(0, 360));

  for (var shaper = 1; shaper < random(1, 5); shaper++) {
    fill(random(0, 100), random(0, 100), random(50, 100));
    rotate(random(0, TWO_PI));
    scale(random(0.5, 1.25));

    beginShape();

    for (var i = 1; i < 3; i++) {
      curveTightness(random(-2, 0));
      curveVertex(
        windowWidth / 2 - random(0, windowWidth / 2),
        windowHeight / 2 - random(0, windowHeight / 2)
      );
    }

    for (var j = 1; j < 2; j++) {
      curveTightness(random(-0.1, 0.1));
      curveVertex(
        windowWidth / 2 + random(0, windowWidth / 2),
        windowHeight / 2 - random(0, windowHeight / 2)
      );
    }

    for (var k = 1; k < 2; k++) {
      curveTightness(random(-0.1, 0.1));
      curveVertex(
        windowWidth / 2 + random(0, windowWidth / 2),
        windowHeight / 2 + random(0, windowHeight / 2)
      );
    }

    for (var l = 1; l < 3; l++) {
      curveTightness(random(-2, 0));
      curveVertex(
        windowWidth / 2 - random(0, windowWidth / 2),
        windowHeight / 2 + random(0, windowHeight / 2)
      );
    }

    endShape();
  }

  for (var shaper = 1; shaper < random(1, 3); shaper++) {
    fill(random(0, 100), random(0, 100), random(50, 100));
    rotate(random(0, TWO_PI));
    scale(random(0.75, 1.25));

    beginShape(TRIANGLE_STRIP);

    for (var i = 1; i < 3; i++) {
      curveTightness(random(-2, 0));
      vertex(
        windowWidth / 2 - random(0, windowWidth / 2),
        windowHeight / 2 - random(0, windowHeight / 2)
      );
    }

    for (var j = 1; j < 2; j++) {
      curveTightness(random(-0.1, 0.1));
      vertex(
        windowWidth / 2 + random(0, windowWidth / 2),
        windowHeight / 2 - random(0, windowHeight / 2)
      );
    }

    for (var k = 1; k < 2; k++) {
      curveTightness(random(-0.1, 0.1));
      vertex(
        windowWidth / 2 + random(0, windowWidth / 2),
        windowHeight / 2 + random(0, windowHeight / 2)
      );
    }

    for (var l = 1; l < 3; l++) {
      curveTightness(random(-2, 0));
      vertex(
        windowWidth / 2 - random(0, windowWidth / 2),
        windowHeight / 2 + random(0, windowHeight / 2)
      );
    }

    endShape();
  }

  //   automatic redraw rate
  frameRate(1 / 10);
}

// This used to work, but I think browsers and new OS restrictions prevent it from working :( But I'll leave the function here anyway
function deviceShaken() {
  redraw();
}

function touchEnded() {
  redraw();
}

function mouseClicked() {
  redraw();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
