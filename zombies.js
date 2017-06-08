class Item {
  constructor(name) {
    this.name = name
  }
}

class Weapon extends Item {
  constructor(name, damage) {
    super(name)
    this.damage = damage
  }

}

class Food extends Item {
  constructor(name, energy) {
    super(name)
    this.energy = energy
  }
}


class Player {
  constructor(name, health, strength, speed) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.speed = speed;
    this.isAlive = true;
    this._maxHealth = health;
    this.equipped = false;
    this._pack = [];
    this.weaponEquiped = [];
  }
  getPack() {
    return this._pack
  }

  getMaxHealth(){
    return this._maxHealth
  }

 takeItem(item){
   if (this.getPack().length >= 3) {
  console.log("Pack is full so the item could not be stored.")
  return false;
} else {
  console.log(this.name + " just recieved " + item.name)
  this.getPack().push(item);
}
}
 discardItem(item){
   if (this.getPack().indexOf(item) !== -1) {
    var removed = this.getPack().indexOf(item);
    this.getPack().splice(removed, 1)
    console.log(this.name + " just removed " + item.name)
    return true
  } else {
    console.log("You have no items in your pack")
    return false
  }
 }
 checkPack(){
    console.log("You curently have" + this.getPack());
 }
 equip(itemToEquip){
   var itemIndex = this._pack.indexOf(itemToEquip);
 if (itemToEquip instanceof Weapon && itemIndex !== -1){
   if (this.equipped !== false){
   this.equipped;
     this._pack.splice(itemIndex, 1, this.equipped);
     this.equipped = itemToEquip;
   } else if (this.equipped === false && itemToEquip instanceof Weapon) {
       this._pack.splice(itemIndex, 1);
       this.equipped = itemToEquip;
   } else {
       return false;
   }
 }
 }
 eat(itemToEat){
   var swapEats = this.getPack().indexOf(itemToEat);
if (itemToEat instanceof Food && this.getPack().indexOf(itemToEat) !== -1) {
  this.getPack().splice(swapEats, 1)
  this.health += itemToEat.energy
  if (this.health > this._maxHealth) {
    this.health = this._maxHealth;
  }
} else {
  return false
}
 }
 useItem(item ){
   if (item instanceof Weapon) {
       this.equip(item);
     }
     if (item instanceof Food) {
       this.eat(item);
     } else {
       return false
     }
 }
 equippedWith(){
   if (this.equipped !== false) {
    console.log(this.name + 'is equipped with a ' + this.equipped.name)
    return this.equipped.name
  } else {
    return false
  }
 }
}


class Zombie {
  constructor(health, strength, speed){
    this.health=health
    this.strength=strength
    this.speed=speed
    this.isAlive=true
  }
}
class FastZombie extends Zombie{
  constructor(health, strength, speed){
    super(health, strength, speed)
  }
}
class StrongZombie extends Zombie{
  constructor(health, strength, speed){
    super(health, strength, speed)
  }
}
class RangedZombie extends Zombie{
  constructor(health, strength, speed){
    super(health, strength, speed)
  }
}
class ExplodingZombie extends Zombie{
  constructor(health, strength, speed){
    super(health, strength, speed)
  }
}

function runGame() {
  // var player = new Player("Joan", 500, 30, 70);
  // var zombie = new Zombie(40, 50, 20);
  // var charger = new FastZombie(175, 25, 60);
  // var tank = new StrongZombie(250, 100, 15);
  // var spitter = new RangedZombie(150, 20, 20);
  // var boomer = new ExplodingZombie(50, 15, 10);

  // var shovel = new Weapon("shovel", 15);
  // var sandwich = new Food("sandwich", 30);
  // var chainsaw = new Weapon("chainsaw", 25);

  // player.takeItem(shovel);
  // player.takeItem(sandwich);
  // player.takeItem(chainsaw);
  // player.discardItem(new Weapon("scythe", 21));
  // player.discardItem(shovel);
  // player.checkPack();
  // player.takeItem(shovel);
  // player.checkPack();

  // player.equippedWith();
  // player.useItem(chainsaw);
  // player.equippedWith();
  // player.checkPack();

  // player.useItem(shovel);
  // player.equippedWith();
  // player.checkPack();

  // player.health = 487;
  // console.log("Before health: " + player.health);
  // player.useItem(sandwich);
  // console.log("After health: " + player.health);
  // player.checkPack();
}
