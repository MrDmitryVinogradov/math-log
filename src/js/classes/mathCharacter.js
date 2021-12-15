import Character from './Character';

export default class MathCharacter extends Character {
  constructor(name, distance, stoned) {
    super(name);
    this.distance = distance;
    this._stoned = stoned;
  }

  set stoned(arg) {
    this._stoned = arg;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(arg) {
    this._attack = arg;
  }

  get attack() {
    let mathAttack = 0;
    if (this.distance > 0 && this.distance < 10) {
      const attackPercent = 1.1 - this.distance * 0.1;
      mathAttack = this._attack * attackPercent;
      if (this._stoned === true) {
        mathAttack = (this._attack * attackPercent) - Math.log2(this.distance) * 5;
      }
      return Math.round(mathAttack);
    }
    if (this.distance >= 10) {
      return 0;
    }
    return this._attack;
  }
}
