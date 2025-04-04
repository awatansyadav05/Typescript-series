// Static member means that we can use static by the writing static means static is that we can access without making any instance

class Hero{
  static version = 1.0;
  static getRandomNumber(){
    return Math.random();
  }
}
Hero.version;
// We can access any number from the static without creating any instances