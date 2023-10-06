// class movie

class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movieList) {
      return movieList.filter((movie) => movie.rating === "PG");
    }
  }
  
  
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG");
  const loveToday = new Movie("love Today", "red giant", "PG-13");
  const vikram = new Movie("vikram", "raj kamal production", "R");
  const Thunivu = new Movie("thunivu", "red giant", "PG-13");
  
  
  const movieList = [
    new Movie("Casino Royale", "Eon Productions", "PG"),
    new Movie("love Today", "red giant", "PG-13"),
    new Movie("vikram", "raj kamal production", "R"),
    new Movie("thunivu", "red giant", "PG"),
  ];
  
  const pgMovies = Movie.getPG(movieList);
  
  pgMovies.forEach((movie) => {
    console.log(`${movie.title} - Rating: ${movie.rating}`);
  });
  



//2 class circle
class Circle {
    constructor(radius = 1.0, color = "red") {
      this._radius = radius;
      this._color = color;
    }
  
    get radius() {
      return this._radius;
    }
  
    set radius(radius) {
      this._radius = radius;
    }
  
    get color() {
      return this._color;
    }
  
    set color(color) {
      this._color = color;
    }
  
    toString() {
      return `Circle [radius = ${this._radius} , color = ${this._color}]`;
    }
  
    getArea() {
      return Math.PI * Math.pow(this._radius, 2);
    }
  
    getCircumference() {
      return 2 * Math.PI * this._radius;
    }
  }
  
  const circle1 = new Circle(2, "green");
  const circle2 = new Circle(5, "Yellow");
  
  console.log(circle1.toString());
  console.log("Area:", circle1.getArea());
  console.log("Circumference:", circle1.getCircumference());
  
  console.log(circle2.toString());
  console.log("Area:", circle2.getArea());
  console.log("Circumference:", circle2.getCircumference());
  
  //circle 1
  /*
  Circle [radius = 2 , color = green]
  Area: 12.566370614359172
  Circumference: 12.566370614359172
  */
  
  //circle 1
  /*
  Circle [radius = 5 , color = Yellow]
  Area: 78.53981633974483
  Circumference: 31.41592653589793
  */


//3 Write a “person” class to hold all the details.


class Person {
    constructor(firstName, lastName, age, email, place, year, batch, education) {
        this.firstName = firstName;
        this.age = age;
        this.email = email;
        this.place = place;
        this.year = year;
        this.batch = batch;
        this.education = education;
    }
    getFullName() {
        return this.firstName;
    }
    getAge() {
        return this.age;
    }
    getEmail() {
        return this.email;
    }
    getPlace() {
        return this.place;
    }
    setPlace(place) {
        this.place = place;
    }
    getYear() {
        return this.year;
    }
    setYear(year) {
        this.year = year;
    }
    getBatch() {
        return this.batch;
    }
    setBatch(batch) {
        this.batch = batch;
    }
    getEducation() {
        return this.education;
    }
    setEducation(education) {
        this.education = education;
    }
}
const person = new Person("SUNDARRAJAN S", 23, "sundarsangar057@gmail.com", "TIRUVANNAMALAI", 2023, "B51 WD Tamil", "BE(MECH)");
console.log("Full Name:", person.getFullName());
console.log("Age:", person.getAge());
console.log("Email:", person.getEmail());
console.log("Place:", person.getPlace());
console.log("Year:", person.getYear());
console.log("Batch:", person.getBatch());
console.log("Education:", person.getEducation());

//Output:
//Full Name: SUNDARRAJAN S
//Age: 23
//Email: sundarsangar057@gmail.com
//Place: TIRUVANNAMALAI
//Year: 2023
//Batch: B51 WD Tamil
//Education: BE(MECH)



//4 uber price calc

class UberPriceCalculator {
    constructor(baseFare, costPerMile, costPerMinute) {
      this.baseFare = baseFare;
      this.costPerMile = costPerMile; 
      this.costPerMinute = costPerMinute; 
    }
  
    calculateFare(distanceInMiles, timeInMinutes) {
      const fare = this.baseFare + (distanceInMiles * this.costPerMile) + (timeInMinutes * this.costPerMinute);
      return fare;
    }
  }
  
  
  const calculator = new UberPriceCalculator(10, 20, 7); 
  
  const distance = 5; 
  const time = 15; 
  
  const fare = calculator.calculateFare(distance, time);
  
  console.log(`The estimated Uber fare for a ${distance}-mile, ${time}-minute trip is $${fare.toFixed(2)}.`);
  