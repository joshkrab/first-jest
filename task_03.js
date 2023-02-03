function randomInt (min, max) {
  let random = min + Math.random() * (max + 1 - min);

  return Math.floor(random);
}

module.exports = randomInt;