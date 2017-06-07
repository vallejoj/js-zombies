
function Item(name) {
  this.name = name
}


function Weapon(name, damage) {
  this.damage = damage
  Item.call(this, name)
}

Weapon.prototype = Object.create(Item.prototype, {
  constructor: Item
})



function Food(name, energy) {
  this.energy = energy
  Item.call(this, name)
}

Food.prototype = Object.create(Item.prototype, {
  constructor: Item
});


function Player(name, health, strength, speed) {
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



Player.prototype.getPack = function() {

  return this._pack

}
Player.prototype.checkPack = function() {
  console.log("You curently have" + this.getPack());
}

Player.prototype.getMaxHealth = function() {
  return this._maxHealth
}


Player.prototype.takeItem = function(item) {

  if (this.getPack().length >= 3) {
    console.log("Pack is full so the item could not be stored.")
    return false;
  } else {
    console.log(this.name + " just recieved " + item.name)
    this.getPack().push(item);
  }
}

Player.prototype.discardItem = function(item) {
  if (this.getPack().indexOf(item) !== -1) {
    var removed = this.getPack().indexOf(item);
    this.getPack().splice(removed, 1)
    console.log(this.name + " just removed " + item.name)
    return true
  } else {
    console.log("You have no items in your pack")
    return false
  }
};


Player.prototype.equip = function(itemToEquip) {
  var swap = this.getPack().indexOf(itemToEquip);
  if (this.equiped === false && itemToEquip instanceof Weapon &&
    this.getPack().indexOf(itemToEquip) !== -1) {
    this.getPack().splice(swap, 1 )
    this.equiped = itemToEquip

  } else if (this.equiped !== false && itemToEquip instanceof Weapon &&
    this.getPack().indexOf(itemToEquip) !== -1) {
    this.equipped = this.getPack()[swap];
    this.getPack().splice(swap, 1, this.equiped)
    this.equiped = itemToEquip

  } else {
    return false
  }
}

Player.prototype.eat = function(itemToEat) {
  var swapEats= this.getPack().indexOf(itemToEat);
if (itemToEat instanceof Food && this.getPack().indexOf(itemToEat) !== -1 ) {
      this.getPack().splice(swapEats, 1 )
      this.health+=itemToEat.energy
  if (this.health>this._maxHealth) {
this.health = this._maxHealth;
  }
}else{
  return false
}
};

Player.prototype.useItem = function (item) {

    if (item instanceof Weapon) {
      this.equip(item);
    } if(item instanceof Food){
    this.eat(item);
  }else{
    return false
  }
};

Player.prototype.equippedWith = function () {
  if (this.equipped!==false) {
    console.log(this.name + 'is equipped with a '+ this.equipped.name)
    return this.equipped.name
  }else{
    return false
  }
};



/**
 * Class => Zombie(health, strength, speed)
 * -----------------------------
 * Creates a normal zombie.
 *
 * @name Zombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 * @private {number} maxHealth      Default value should be set to `health`.
 * @property {number} health
 * @property {number} strength
 * @property {number} speed
 * @property {boolean} isAlive      Default value should be `true`.
 */
function Zombie (health, strength, speed) {
 this.health= health;
 this.strength=strength;
 this.speed=speed;
 this.isAlive=true;
  var maxHealth=health
}

/**
 * Class => FastZombie(health, strength, speed)
 * -----------------------------
 * Creates a fast zombie.
 *
 * The FastZombie class constructor will call
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name FastZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */
function FastZombie (health,strength,speed) {
  Zombie.call(this, health, strength, speed)
}


FastZombie.prototype= Object.create (Zombie.prototype, {
  constructor:FastZombie
});

function StrongZombie (health,strength,speed) {
  Zombie.call(this, health, strength, speed)
}

StrongZombie.prototype =Object.create(Zombie.prototype, {
constructor:FastZombie
})

/**
 * Class => StrongZombie(health, strength, speed)
 * -----------------------------
 * Creates a strong zombie.
 *
 * The StrongZombie class constructor will call
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name StrongZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */


/**
 * StrongZombie Extends Zombie Class
 * -----------------------------
 */



/**
 * Class => RangedZombie(health, strength, speed)
 * -----------------------------
 * Creates a ranged zombie.
 *
 * The RangedZombie class constructor will call
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name RangedZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */


/**
 * RangedZombie Extends Zombie Class
 * -----------------------------
 */



/**
 * Class => ExplodingZombie(health, strength, speed)
 * -----------------------------
 * Creates an exploding zombie.
 *
 * The ExplodingZombie class constructor will call
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name ExplodingZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */


/**
 * ExplodingZombie Extends Zombie Class
 * -----------------------------
 */




/**
 * Sample run.
 * Feel free to edit this and check your game logic.
 */
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
