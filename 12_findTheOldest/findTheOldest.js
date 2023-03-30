const findTheOldest = function(people) {
    const currentYear = (new Date()).getFullYear();
    return people.reduce((oldest, person) => {
      const ageOldest = oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth :
       currentYear - oldest.yearOfBirth;
      const agePerson = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth :
       currentYear - person.yearOfBirth;
      return agePerson > ageOldest ? person : oldest;

});
}

// Do not edit below this line
module.exports = findTheOldest;
