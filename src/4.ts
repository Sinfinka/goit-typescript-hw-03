
class Key {
    private signature: number;
  
    constructor() {
      this.signature = Math.random();
    }
  
    getSignature(): number {
      return this.signature;
    }
  }
  
 
  class Person {
    private key: Key;
  
    constructor(key: Key) {
      this.key = key;
    }
  
    getKey(): Key {
      return this.key;
    }
  }
  

  abstract class House {
    protected door: boolean;
    protected key: Key;
    protected tenants: Person[];
  
    constructor(key: Key) {
      this.door = false;
      this.key = key;
      this.tenants = [];
    }
  
    abstract openDoor(key: Key): void;
  
    comeIn(person: Person): void {
      if (this.door) {
        this.tenants.push(person);
        console.log("Person entered the house.");
      } else {
        console.log("The door is closed.");
      }
    }
  }
  

  class MyHouse extends House {
  
    openDoor(key: Key): void {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
        console.log("Door is open.");
      } else {
        console.log("Wrong key.");
      }
    }
  }
  

  const key = new Key();
  const person = new Person(key);
  const house = new MyHouse(key);
  
  house.openDoor(person.getKey());
  house.comeIn(person);
  