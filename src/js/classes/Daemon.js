import MathCharacter from './mathCharacter';

export default class Daemon extends MathCharacter {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
    this.attack = 10;
    this.defence = 40;
  }
}
