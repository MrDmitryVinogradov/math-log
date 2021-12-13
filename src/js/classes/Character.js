export default class Character {
  constructor(name) {
    if (typeof name === 'string' && name.length > 2 && name.length < 10) { this.name = name; }
    else { throw new Error('Character name length must be 3-9 symbols'); }
    this.health = 100;
    this.level = 1;
  }
}
