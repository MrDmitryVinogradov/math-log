import Magician from '../js/classes/Magician';

test('should create Magician', () => {
  const magician = new Magician('User');
  expect(magician.name).toBe('User');
});

test('name length', () => {
  expect(() => new Magician('fffffffffffff')).toThrow('Character name length must be 3-9 symbols');
});

test(' get stoned', () => {
  const magician = new Magician('User');
  magician.stoned = true;
  expect(magician.stoned).toBe(true);
});

test('stoned attack', () => {
  const magician = new Magician('User');
  magician.attack = 100;
  magician.distance = 2;
  magician.stoned = true;
  expect(magician.attack).toBe(85);
});

test('unstoned attack', () => {
  const magician = new Magician('User');
  magician.attack = 100;
  magician.distance = 2;
  magician.stoned = false;
  expect(magician.attack).toBe(90);
});

test('too far', () => {
  const magician = new Magician('User');
  magician.attack = 100;
  magician.distance = 11;
  magician.stoned = false;
  expect(magician.attack).toBe(0);
});

test('not too far', () => {
  const magician = new Magician('User');
  magician._attack = 100;
  magician.distance = 0;
  magician._stoned = false;
  expect(magician.attack).toBe(100);
});
