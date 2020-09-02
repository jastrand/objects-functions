

// Function constructor - Pattern for writing a blueprint 

// const john = {
//   name: 'john',
//   yearOfBirth: 1990,
//   job: 'Teacher'
// };

// Brand new empty object is created when using New 
// Then the function is called that has a this variable. 
// 
const Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.calculateAge = function () {
    console.log(2020 - this.yearOfBirth);
  }
}

const john = new Person('John', 1990, 'Teacher')
const sara = new Person('Sara', 1985, 'Designer')
const marie = new Person('Marie', 1970, 'Chef')

john.calculateAge()
sara.calculateAge()
marie.calculateAge()