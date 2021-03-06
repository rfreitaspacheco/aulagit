function realiseForAdults(peoples, callback) {
  for (let i = 0; i < peoples.length; i++) {
    const people = peoples[i];
    if (people.age >= 18) {
      callback(people);
    }
  }
}

function keepTime(callback) {
  setTimeout(() => {
    callback();
  }, 3000);
}

function subtrair(a, b) {
  return a - b;
}

module.exports = {
  realiseForAdults,
  keepTime,
  subtrair,
};
