import MathCharacter from './mathCharacter';

export default class Magician extends MathCharacter {
  constructor(name) {
    super(name);
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;
  }
}
